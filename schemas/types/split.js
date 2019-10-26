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
          type: "image",
          options: {
            hotspot: true
          },
          fields: [
            {
              title: "Caption",
              name: "caption",
              type: "string",
              options: {
                isHighlighted: true
              }
            }
          ]
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
      media: elements.find(e => e._type === "image")
    })
  }
}