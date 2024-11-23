import {ProjectsIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'
import { PortableTextInput } from 'sanity'


export const projectsType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
        
            name: 'title',
            title: 'Title',
            type: 'string',
        
    }),
 
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
    }),

    defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
    }),




    defineField({
        title:'Project thumbnail',
        name: 'projectThumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      }),



      defineField({
        title: 'Carousel Image',
        name:'carousel',
        type: 'array',
        of: [
    
          {
            title: 'Carousel Image',
            type: 'image',
            options:{
              hotspot:true
            }
          }
        ]
      }),



    // defineField({
    //     name: 'body',
    //     title: 'Body',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'block',
    //       },
    //     ],
    //   components:{
    //     input:PortableTextInput
    //   }
    // }),

    defineField({
      title: 'Set repository or live link',
      name: 'urls',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'urlObject',
          title: 'URL Object',
          fields: [
            {
              name: 'text',
              title: 'Set URL text',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    }),
    



    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              fieldsets: [
                {
                  name: 'settings',
                  title: 'Image Settings',
                  options: { collapsible: true, collapsed: true }, // Collapsed by default
                },
              ],
            },
          ],
        },
      ],
    }),



    defineField({
      title: 'Technology use',
      name:'technology',
      type: 'array',
      of: [
  
        {
          title: 'Technology',
          type: 'object',
          fields: [
            {
              title: 'Name of technology',
              name: 'technology',
              type: 'string'
            },
        
      
  
          ]
        }
      ]
    }),






 


  
  ],
 
})
