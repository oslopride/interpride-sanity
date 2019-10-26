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
  },
}