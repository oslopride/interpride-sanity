export default {
  title: "Image",
  name: "webImage",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}

// export default {
//   title: "Image",
//   name: "webImage",
//   type: "object",
//   fields: [
//     {
//       name: "image",
//       titile: "image",
//       type: 'image',
//       options: {
//         hotspot: true
//       },
//       fields: [
//         {
//           title: 'Caption',
//           name: 'caption',
//           type: 'string',
//           options: {
//             isHighlighted: true
//           }
//         }
//       ]
//     }
//   ],
//   preview: {
//     select: {
//       image: "image"
//     },
//     prepare: ({ image }) => ({
//       title: "Image",
//       media: image
//     })
//   }
// }