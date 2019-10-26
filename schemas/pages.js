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
      title: "Layout",
      name: "layout",
      type: "array",
      of: [
        {
          title: "Text Area",
          name: "textArea",
          type: "object",
          fields: [
            {
              title: "Text",
              name: "text",
              type: "richText"
            }
          ],
          preview: {
            select: {},
            prepare: () => ({
              title: "Tex Area"
            })
          }
        },
        {
          type: "banner"
        },
        {
          type: "hero"
        }
      ]
    }
  ]
}