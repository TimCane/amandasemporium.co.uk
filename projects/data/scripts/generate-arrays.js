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

  getimportStatement(dataType) {
    return `import { ${this.friendlyName} } from '../../_${dataType}s/${this.Name}.${dataType}';`;
  }
}

const dataTypes = ["bear", "location"];

dataTypes.forEach((dataType) => {
  const folder = path.resolve(__dirname, `../src/_${dataType}s`);

  const properCase = toProperCase(dataType);

  var dataItems = [];
  fs.readdirSync(folder).forEach((file) => {
    dataItems.push(new DataItem(file));
  });

  var importArray = [
    `import { I${properCase} } from '../interfaces/${dataType}.interface';`,
  ];
  var exportArray = [];

  for (let i = 0; i < dataItems.length; i++) {
    const dataItem = dataItems[i];

    importArray.push(dataItem.getimportStatement(dataType));
    exportArray.push(dataItem.friendlyName);
  }

  var importStr = importArray.join("\n");
  var exportStr = exportArray.join(", ");

  fs.writeFileSync(
    path.resolve(__dirname, `../src/lib/dictionaries/${dataType}s.dictonary.ts`),
    `${importStr}\nexport const ${dataType}s: { [name: string]: I${properCase} } = {${exportStr}};`,
    { flag: "w" }
  );
});
