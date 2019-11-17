import supportedLanguages from "../../supportedLanguages";

export default {
  name: "localeLayout",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    fieldset: lang.isDefault ? null : "translations",
    of: [
      {
        type: "textArea"
      },
      {
        type: "banner"
      },
      {
        type: "hero"
      },
      {
        type: "image",
        options: {
          hotspot: true
        }
      },
      {
        type: "split"
      }
    ]
  }))
}