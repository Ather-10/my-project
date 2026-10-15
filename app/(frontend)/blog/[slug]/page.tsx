import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

async function getArticle(slug: string) {
  const payload = await getPayload({ config })
  const res = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })
  return res.docs[0]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt || '',
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || '',
      images: article.mainImage?.url ? [article.mainImage.url] : [],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      {article.mainImage?.url && (
        <img src={article.mainImage.url} alt={article.mainImage.alt} className="w-full rounded-lg mb-6" />
      )}
      <div className="prose max-w-none">
        {/* Rich text renderer — simplified */}
        <p>{article.excerpt}</p>
      </div>
    </article>
  )
}