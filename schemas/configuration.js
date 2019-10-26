export default {
  title: "Configuration",
  name: "config",
  type: "document",
  fields: [
    {
      title: "Advanced",
      name: "advanced",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Key",
              name: "key",
              type: "string"
            },
            {
              title: "Values",
              name: "values",
              type: "array",
              of: [ {type: "string"} ]
            }
          ],
          preview: {
            select: {
              title: "key"
            }
          }
        }
      ]
    }
  ]
}