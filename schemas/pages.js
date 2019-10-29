export default {
  title: "Pages",
  name: "pages",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      }
    },
    {
      title: "Layout",
      name: "layout",
      type: "array",
      of: [
        {
          type: "textArea"
        },
        {
          type: "banner"
        },
        {
          type: "hero"
        },
        {
          type: "image",
          options: {
            hotspot: true
          }
        },
        {
          type: "split"
        }
      ]
    }
  ]
}