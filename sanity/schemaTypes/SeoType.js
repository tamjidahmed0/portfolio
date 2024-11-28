import {EarthGlobeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const SeoType = defineType({
  name: 'seo',
  title: 'Seo',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [

    defineField({
      title: 'Set site name',
      name:'site_name',
      description:'Set website name that show in web result.',
      type: 'string'
  }),


    defineField({
        title: 'Set website title',
        name:'title',
        description:'Set website title that show in web result.',
        type: 'string'
    }),

    defineField({
      title: 'Website Meta Description',
      name: 'metadescription',
      description: 'Set a website meta description that shows in web results. Limit to 160 characters.',
      type: 'text',
      validation: (Rule) => Rule.max(160).warning('Meta description should not exceed 160 characters.'),
    }),


    defineField({
      title: 'Keywords',
      name:'keywords',
      description:'Set keywords to improve your search result on search engine',
      type: 'array',
      of: [
  
        {
          title: 'Keywords',
          type: 'object',
          fields: [
            {
              title: 'Keyword name',
              name: 'keyword',
              type: 'string'
            },   
          ]
        }
      ]
    }),
 

    defineField({
      title: 'Meta image',
      name:'image',
      description:'You can add multiple image in meta image',
      type: 'array',
      of: [
  
        {
          title: 'Image',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image'
            },   
          ]
        }
      ]
    }),


  

  ],


  preview: {
    select: {
      title: 'seo',
      media: 'image',
    },
  },
})
