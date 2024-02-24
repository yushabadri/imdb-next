'use client'

import { ThemeProvider } from "next-themes"
import { Children } from "react"


export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="transition-color duration-300 dark: ">
            {children}
        </div>
    </ThemeProvider>
  )
}
