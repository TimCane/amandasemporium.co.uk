const fs = require("fs");
const path = require("path");

camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
toProperCase = (s) =>
  s.replace(
    /\w\S*/g,
    (x) => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
  );

class DataItem {
  Name = "";

  constructor(fileName) {
    this.Name = fileName.split(".")[0];
  }

  get friendlyName() {
    return camelize(this.Name);
  }

  getimportStatement(dataType, plural) {
    return `import { ${this.friendlyName} } from '../../_${plural}/${this.Name}.${dataType}';`;
  }
}

const dataTypes = [
  {
    d: "bear",
    pl: "bears",
    pc: "Bear",
  },
  {
    d: "location",
    pl: "locations",
    pc: "Location",
  },
  {
    d: "event",
    pl: "events",
    pc: "Event",
  },
  {
    d: "product",
    pl: "products",
    pc: "Product",
  },
  {
    d: "photo",
    pl: "photos",
    pc: "Photo",
  },
  {
    d: "bear-brand",
    pl: "bear-brands",
    pc: "BearBrand",
  },
  {
    d: "bear-species",
    pl: "bear-species",
    pc: "BearSpecies",
  },
];

dataTypes.forEach((dataType) => {
  const folder = path.resolve(__dirname, `../src/_${dataType.pl}`);

  var dataItems = [];
  fs.readdirSync(folder).forEach((file) => {
    if (file[0] != "_") dataItems.push(new DataItem(file));
  });

  var importArray = [
    `import { I${dataType.pc} } from '../interfaces/${dataType.d}.interface';`,
  ];
  var exportArray = [];

  for (let i = 0; i < dataItems.length; i++) {
    const dataItem = dataItems[i];

    importArray.push(dataItem.getimportStatement(dataType.d, dataType.pl));
    exportArray.push(dataItem.friendlyName);
  }

  var importStr = importArray.join("\n");
  var exportStr = exportArray.join(", ");

  let pcpl = dataType.pc.endsWith("s") ? dataType.pc : dataType.pc + "s";

  fs.writeFileSync(
    path.resolve(__dirname, `../src/lib/arrays/${dataType.pl}.array.ts`),
    `${importStr}\nexport const ${pcpl}: I${dataType.pc}[] = [${exportStr}];`,
    { flag: "w" }
  );
});
