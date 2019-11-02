export default {
  title: "Promotion",
  name: "heroPromotion",
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
  ],
  preview: {
    select: {
      subtitle: "heading"
    },
    prepare: ({ subtitle }) => ({
      title: "Promotion",
      subtitle
    })
  }
}
