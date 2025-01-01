"use client"

import React from 'react'
import Tailwind from 'primereact/passthrough/tailwind';

import { PrimeReactProvider } from 'primereact/api';

const ReactProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>{children}</PrimeReactProvider>
  )
}

export default ReactProvider