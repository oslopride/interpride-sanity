export default {
  title: "Hero",
  name: "hero",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string"
    },
    {
      title: "Promotions",
      name: "promotions",
      type: "array",
      validation: Rule => [ Rule.min(2), Rule.max(3) ],
      of: [
        {
          title: "Promotion",
          name: "promotion",
          type: "promotion"
        }
      ]
    }
  ],
  preview: {
    select: {
      subtitle: "title"
    },
    prepare: ({ subtitle }) => ({
      title: "Hero",
      subtitle
    })
  }
}