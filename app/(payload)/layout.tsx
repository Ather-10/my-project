import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import { handleServerFunctions } from '@payloadcms/next/rsc'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={config}
      serverFunction={handleServerFunctions}
    >
      {children}
    </RootLayout>
  )
}