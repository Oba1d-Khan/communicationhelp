import {defineType, defineField} from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: 'Recommended Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
    }),
    defineField({
      name: 'purchaseLink',
      type: 'url',
      title: 'Buy Link',
    }),
    defineField({
      name: 'topic',
      type: 'reference',
      title: 'Related Topic',
      to: [{type: 'topic'}],
    }),
  ],
})
