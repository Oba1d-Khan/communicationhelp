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
      name: 'description',
      type: 'text',
      title: 'Why this book?',
      rows: 3,
    }),
    defineField({
      name: 'purchaseLink',
      type: 'url',
      title: 'Buy Link',
    }),
    defineField({
      name: 'bookCategory',
      type: 'reference',
      title: 'Book Category',
      to: [{type: 'bookCategory'}],
    }),
  ],
})
