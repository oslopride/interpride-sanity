export default {
  title: "Banner",
  name: "banner",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string"
    }
  ],
  preview: {
    select: {
      subtitle: "text"
    },
    prepare: ({ subtitle }) => ({
      title: "Banner",
      subtitle
    })
  },
};