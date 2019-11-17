// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from "./page";
import frontPage from "./frontPage";
import configuration from "./configuration";

// Types
import localeLayout from "./types/localeLayout"
import richText from "./types/richText";
import banner from "./types/banner";
import hero from "./types/hero";
import heroPromotion from "./types/hero/heroPromotion";
import keyValuePair from "./types/keyValuePair";
import textArea from "./types/textArea";
import split from "./types/split";
import figure from "./types/figure";
import youtube from "./types/youtube";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    frontPage,
    configuration,
    localeLayout,
    richText,
    banner,
    hero,
    heroPromotion,
    keyValuePair,
    textArea,
    split,
    figure,
    youtube
  ])
});
