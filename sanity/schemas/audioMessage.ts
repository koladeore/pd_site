// schema.js
export default {
  name: 'audioMessage',
  title: 'Audio Message',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    },
  ],
};

