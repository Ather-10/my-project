import { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'category', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'metaTitle', type: 'text', label: 'SEO Title' },
    { name: 'metaDescription', type: 'textarea', label: 'SEO Description' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL: /blog/your-slug' },
    },
    { name: 'mainImage', type: 'upload', relationTo: 'media' },
    { name: 'excerpt', type: 'textarea', maxLength: 300 },
    { name: 'description', type: 'richText' },
    { name: 'author', type: 'relationship', relationTo: 'authors' },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      required: true,
    },
    { name: 'likes', type: 'number', defaultValue: 0, admin: { readOnly: true } },
    { name: 'publishedAt', type: 'date' },
  ],
}