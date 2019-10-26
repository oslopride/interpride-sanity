export default {
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
}