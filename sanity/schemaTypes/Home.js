
import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const HomeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      title:'About Me',
      name: 'about',
      type: 'text',
    }),

    defineField({
      title: 'What I Do',
      name:'skillsdescription',
      type: 'array',
      of: [
  
        {
          title: 'What i do',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            } ,
            {
              title: 'Description',
              name: 'description',
              type: 'text'
            } ,
            {
              title: 'Background color',
              name: 'color',
              type: 'simplerColor'
            } ,

            {
              title: 'Icon',
              name: 'icons',
              type: 'icon'
            } ,

            {
              title: 'Icon color',
              name: 'iconColor',
              type: 'simplerColor'
            } ,

       
          ]
        }
      ]
    }),

    
  ],

 
})
