export default {
  title: "Promotion",
  name: "promotion",
  type: "object",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string"
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'}
            ]
          }
        }
      ]
    }
  ]
}
