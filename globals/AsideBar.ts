import { GlobalConfig } from 'payload'

export const AsideBar: GlobalConfig = {
  slug: 'aside-bar',
  fields: [
    {
      name: 'widgets',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: ['recent', 'popular', 'tags', 'ad', 'custom'],
          required: true,
        },
        { name: 'title', type: 'text' },
        { name: 'adImage', type: 'upload', relationTo: 'media' },
        { name: 'adUrl', type: 'text' },
        { name: 'customHtml', type: 'textarea' },
      ],
    },
  ],
}