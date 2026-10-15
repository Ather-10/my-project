import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    { name: 'logoText', type: 'text', defaultValue: 'My Blog' },
    { name: 'logoImage', type: 'upload', relationTo: 'media' },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    { name: 'ctaText', type: 'text' },
    { name: 'ctaUrl', type: 'text' },
  ],
}