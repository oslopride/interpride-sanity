export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      }
    },
    {
      title: "Layout",
      name: "layout",
      type: "localeLayout"
    }
  ]
}