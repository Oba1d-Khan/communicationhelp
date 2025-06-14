import {defineType, defineField} from 'sanity'

export const bookCategoryType = defineType({
  name: 'bookCategory',
  title: 'Book Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'category', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      description: 'Optional: Short explanation of what this category covers.',
    }),
  ],
})
