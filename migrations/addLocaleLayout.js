import client from "part:@sanity/base/client"

// Run this migration with: `sanity exec --with-user-token migrations/addLocaleLayout.js`
// See https://www.sanity.io/docs/migrating-data

async function migrate() {
  const documents = await client.fetch(`*[_type == "page" || _type == "frontPage"][0...100] {_id, _rev, layout}`);
  
  const patches = documents
    .filter(doc => Array.isArray(doc.layout))
    .map(doc => ({
      id: doc._id,
      patch: {
        set: { layout: { _type: 'localeLayout', en: doc.layout, es: [], fr: [] } },
        ifRevisionID: doc._rev
      }
    }));
  
  patches.forEach(patch => console.log(`Patching ${patch.id}`));
  
  const transaction = patches.reduce((tx, patch) => tx.patch(patch.id, patch.patch), client.transaction());

  await transaction.commit();
}

migrate().catch(err => {
  console.error(err)
  process.exit(1)
})
