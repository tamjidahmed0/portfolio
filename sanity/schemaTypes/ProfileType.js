import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'Name',
      type: 'string',
    }),
 
    defineField({
      name: 'Stack',
      type:'string'
    }),
    defineField(
      {
        name: 'available',
        title: 'Available',
        type: 'boolean',
        description: 'Show available badge',
        initialValue: true,  // default value
      },
    ),

    defineField({
      name: 'Facebook',
      type: 'string',
    }),

    defineField({
      name: 'Github',
      type: 'string',
    }),

    defineField({
      name: 'Linkedin',
      type: 'string',
    }),


    defineField({
      title:'Profile Image',
      name: 'mainImage',
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
      name: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'Location',
      type: 'string',
    }),


    defineField({
      title:'Upload resume',
      name: 'pdfFile',
      type: 'file',  
      options: {
        accept: 'application/pdf'
      }
    })



  
  ],
 
})
