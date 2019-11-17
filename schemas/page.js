import supportedLanguages from "../supportedLanguages";

export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString"
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      }
    },
    {
      title: "Layout",
      name: "layout",
      type: "localeLayout"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare: ({ title }) => ({
      title: title.en,
      subtitle: supportedLanguages
        .filter(lang => !lang.isDefault)
        .map(lang => `${lang.id.toUpperCase()}: ${title[lang.id]}`)
        .join(", ")
    })
  }
}