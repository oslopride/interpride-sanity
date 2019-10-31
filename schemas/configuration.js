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
          type: "keyValuePair"
        }
      ]
    }
  ]
}