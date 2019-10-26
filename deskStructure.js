import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "config"
].includes(listItem.getId())
 
export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Configuration")
        .child(
          S.editor()
            .title("Configuration")
            .id('config')
            .schemaType("config")
            .documentId("global-config")
        ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ]);