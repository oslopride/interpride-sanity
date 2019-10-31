export default {
  title: "Key Value Pair",
  name: "keyValuePair",
  type: "object",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "string"
      // TODO: Validate the key is unique
    },
    {
      title: "Value",
      name: "value",
      type: "string",
    }
  ],
  preview: {
    select: {
      title: "key"
    }
  }
};
