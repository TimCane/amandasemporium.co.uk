export async function GET() {
  let result = 
`local_backend: true
backend:
  name: git-gateway
media_folder: "public/media"
public_folder: "public"
publish_mode: simple
collections:
  - name: "bearBrands"
    label: "Bear Brands"
    label_singular: "Bear Brand"
    folder: "src/content/bearBrands"
    identifier_field: "name"
    extension: "md"
    publish: false
    create: true
    media_folder: ''
    public_folder: ''
    fields:
      - label: "Name"
        name: "name"
        widget: "string"
    
  - name: "bearSpecies"
    label: "Bear Species"
    label_singular: "Bear Species"
    folder: "src/content/bearSpecies"
    identifier_field: "name"
    extension: "md"
    publish: false
    create: true
    media_folder: ''
    public_folder: ''
    fields:
      - label: "Name"
        name: "name"
        widget: "string"

  - name: "events"
    label: "Events"
    label_singular: "Event"
    folder: "src/content/events"
    identifier_field: "name"
    extension: "md"
    publish: false
    create: true
    summary: "{{date}}: {{name}}"
    media_folder: ''
    public_folder: ''
    fields:
      - label: "Name"
        name: "name"
        widget: "string"

      - label: "Date"
        name: "date"
        widget: "datetime"

      - label: "Description"
        name: "description"
        widget: "text"

      - label: "Location"
        name: "location"
        widget: "object"
        collapsed: true
        summary: '{{fields.name}}: {{fields.location}}'
        fields:
          - label: "Location"
            name: "location"
            widget: "relation"
            collection: "locations"
            options_length: 10000
            search_fields: ["name"]
            value_field: "{{slug}}"
            display_fields: ["name"]

          - label: "Name"
            name: "name"
            widget: "string"

      - label: "Website"
        name: "website"
        widget: "string"

      - label: "Time"
        name: "time"
        widget: "string"

  - name: "locations"
    label: "Locations"
    label_singular: "Location"
    folder: "src/content/locations"
    identifier_field: "name"
    extension: "md"
    publish: false
    create: true
    media_folder: ''
    public_folder: ''
    fields:
      - label: "Name"
        name: "name"
        widget: "string"

      - label: "Data"
        name: "data"
        widget: "map"
        type: "Point"


  - name: "bears"
    label: "Bears"
    label_singular: "Bear"
    folder: "src/content/bears"
    identifier_field: "name"
    extension: "md"
    publish: false
    create: true
    path: '{{slug}}/index'
    media_folder: ''
    public_folder: ''
    fields:
      - label: "Name"
        name: "name"
        widget: "string"

      - label: "Uploaded On"
        name: "uploadedOn"
        widget: "datetime"

      - label: "Picture"
        name: "picture"
        widget: "image"

      - label: "Description"
        name: "description"
        widget: "text"

      - label: "Tags"
        name: "tags"
        widget: "list"
        add_to_top: true

      - label: "Brand"
        name: "brand"
        widget: "relation"
        collection: "bearBrands"
        options_length: 10000
        search_fields: ["name"]
        value_field: "{{slug}}"
        display_fields: ["name"]

      - label: "Species"
        name: "species"
        widget: "relation"
        collection: "bearSpecies"
        options_length: 10000
        search_fields: ["name"]
        value_field: "{{slug}}"
        display_fields: ["name"]
    
      - label: "Rescued"
        name: "rescued"
        widget: "object"
        collapsed: true
        summary: '{{fields.location}}: {{fields.date}}'
        fields:
          - label: "Location"
            name: "location"
            widget: "relation"
            collection: "locations"
            options_length: 10000
            search_fields: ["name"]
            value_field: "{{slug}}"
            display_fields: ["name"]

          - label: "Date"
            name: "date"
            widget: "datetime"

      - label: "Event"
        name: "event"
        widget: "relation"
        collection: "events"
        options_length: 10000
        search_fields: ["name"]
        value_field: "{{slug}}"
        display_fields: ["date","name"]
            
      - label: "Rehomed"
        name: "rehomed"
        widget: "object"
        collapsed: true
        summary: '{{fields.location}}: {{fields.date}}'
        fields:
          - label: "Location"
            name: "location"
            widget: "relation"
            collection: "locations"
            options_length: 10000
            search_fields: ["name"]
            value_field: "{{slug}}"
            display_fields: ["name"]

          - label: "Date"
            name: "date"
            widget: "datetime"
            
`;
 
  return new Response(result, {
    headers: {
      'Content-Type': 'text/yaml',
    },
  });
}
