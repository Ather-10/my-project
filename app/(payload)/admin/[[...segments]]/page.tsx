import { RootPage } from '@payloadcms/next/views'
import config from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default async function Page({ params, searchParams }: Args) {
  const PageComponent = RootPage as any
  return <PageComponent config={config} params={params} searchParams={searchParams} />
}