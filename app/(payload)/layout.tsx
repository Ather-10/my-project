import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const LayoutComponent = RootLayout as any
  return <LayoutComponent config={config}>{children}</LayoutComponent>
}