import client from "part:@sanity/base/client"

// Run this migration with: `sanity exec --with-user-token migrations/addLocaleStringAsTitle.js`
// See https://www.sanity.io/docs/migrating-data

async function migrate() {
  const documents = await client.fetch(`*[_type == "page"][0...100] {_id, _rev, title}`);
  
  const patches = documents
    .filter(doc => typeof doc.title === "string")
    .map(doc => ({
      id: doc._id,
      patch: {
        set: { title: { _type: 'localeString', en: doc.title } },
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
