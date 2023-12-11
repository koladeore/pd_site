export  default{
    name: 'ebooks',
    title: 'EBooks',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        { 
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        { 
            name: 'details',
            title: 'Details',
            type: 'text',
        },
        {
            name: 'bookFile',
            title: 'Book File',
            type: 'file',
        },
    ],
};