export default {
  title: "Split",
  name: "split",
  type: "object",
  fields: [
    {
      title: "Elements",
      name: "elements",
      type: "array",
      of: [
        {
          type: "textArea"
        },
        {
          type: "webImage"
        }
      ]
    }
  ],
  preview: {
    select: {
      elements: "elements"
    },
    prepare: ({ elements }) => ({
      title: `Split (${elements.length})`,
      media: elements.find(e => e._type === "webImage")
    })
  }
}