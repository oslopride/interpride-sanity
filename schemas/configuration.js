export default {
  title: "Configuration",
  name: "config",
  type: "document",
  fields: [
    {
      title: "Navigation Bar",
      name: "navbar",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "page" }]
        }
      ]
    },
    {
      title: "Advanced",
      name: "advanced",
      type: "array",
      of: [
        {
          type: "keyValuePair"
        }
      ]
    }
  ]
}