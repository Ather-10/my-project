import { getPayload } from 'payload'
import config from '@payload-config'
import ArticleCard from '@/components/ArticleCard'

export default async function Home() {
  const payload = await getPayload({ config })
  const articles = await payload.find({
    collection: 'articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 10,
  })

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Articles</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.docs.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  )
}