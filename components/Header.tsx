import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export default async function Header() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({ slug: 'header' })

  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl">
          {header.logoText}
        </Link>
        <nav className="flex gap-6">
          {header.navLinks?.map((l: any, i: number) => (
            <Link key={i} href={l.url} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
        {header.ctaText && (
          <Link
            href={header.ctaUrl || '#'}
            className="bg-black text-white px-4 py-2 rounded"
          >
            {header.ctaText}
          </Link>
        )}
      </div>
    </header>
  )
}