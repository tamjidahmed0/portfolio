import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const ResumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [

    defineField({
      title: 'Education',
      name:'education',
      type: 'array',
      of: [
  
        {
          title: 'Education',
          type: 'object',
          fields: [
            {
              title: 'Year',
              name: 'year',
              type: 'string'
            },
            {
              title: 'Subject',
              name: 'subject',
              type: 'string'
            },
            {
              title: 'Institute name',
              name: 'institute',
              type: 'string'
            },
            {
              title: 'Background color',
              name: 'color',
              type: 'simplerColor'
            } ,
  
          ]
        }
      ]
    }),


    defineField({
      title: 'Experience',
      name:'experience',
      type: 'array',
      of: [
  
        {
          title: 'Experience',
          type: 'object',
          fields: [
            {
              title: 'Year',
              name: 'year',
              type: 'string'
            },
            {
              title: 'Field',
              name: 'field',
              type: 'string'
            },
            {
              title: 'Company name',
              name: 'company',
              type: 'string'
            },
            {
              title: 'Background color',
              name: 'color',
              type: 'simplerColor'
            } ,
  
          ]
        }
      ]
    }),



    defineField({
      title: 'Work Skills',
      name:'skills',
      type: 'array',
      of: [
  
        {
          title: 'Work Skills',
          type: 'object',
          fields: [
            {
              title: 'Skills name',
              name: 'skills',
              type: 'string'
            },   
          ]
        }
      ]
    }),


    defineField({
      title: 'Soft Skills',
      name:'soft_skills',
      type: 'array',
      of: [
  
        {
          title: 'Sofft Skills',
          type: 'object',
          fields: [
            {
              title: 'Skills name',
              name: 'soft_skills',
              type: 'string'
            },   
          ]
        }
      ]
    }),

  ],


  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
