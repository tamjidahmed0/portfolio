
export default  {
    name: 'Hero',
    type: 'document',
    title: 'Hero',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'color1',
        type: 'color',
        title: 'From color'
      },
      {
        name: 'color2',
        type: 'color',
        title: 'To color'
      },

      {
        name: 'desc',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'imageBgColor',
        type: 'color',
        title: 'Background image color'
      },

   
    ]
  }