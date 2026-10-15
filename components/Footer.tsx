import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Footer() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({ slug: 'footer' })

  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {footer.columns?.map((col: { title: string; links?: { url: string; label: string }[] }, i: number) => (
          <div key={i}>
            <h4 className="font-semibold mb-2">{col.title}</h4>
            {col.links?.map((l: { url: string; label: string }, j: number) => (
              <a key={j} href={l.url} className="block text-sm hover:underline">
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center text-sm py-4 border-t">{footer.copyright}</div>
    </footer>
  )
}