import S from "@sanity/desk-tool/structure-builder";
 
export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Front Page")
        .child(
          S.editor()
            .title("Front Page")
            .id('frontPage')
            .schemaType("frontPage")
            .documentId("global-frontPage")
        ),
      S.listItem()
          .title("Pages")
          .child(
            S.documentTypeList("page")
            .title("Pages")
          ),
      S.listItem()
        .title("Configuration")
        .child(
          S.editor()
            .title("Configuration")
            .id('config')
            .schemaType("config")
            .documentId("global-config")
        )
    ]);