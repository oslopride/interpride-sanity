export default {
  title: "Front Page",
  name: "frontPage",
  type: "document",
  fields: [
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