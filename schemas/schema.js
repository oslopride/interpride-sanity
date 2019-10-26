// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from "./pages";
import configuration from "./configuration";

// Types
import richText from "./types/richText";
import banner from "./types/banner";
import hero from "./types/hero";
import textArea from "./types/textArea";
import image from "./types/image";
import split from "./types/split";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    configuration,
    richText,
    banner,
    hero,
    textArea,
    image,
    split
  ])
})
