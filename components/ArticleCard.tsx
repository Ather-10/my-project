import Link from 'next/link'

type Article = {
  id: string
  slug: string
  title: string
  excerpt?: string
  mainImage?: { url: string; alt: string }
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      {article.mainImage?.url && (
        <img src={article.mainImage.url} alt={article.mainImage.alt} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="font-semibold text-lg">{article.title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  )
}