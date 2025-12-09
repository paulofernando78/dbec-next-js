"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"

export function ThemeProvider({ children }) {
  return (
<NextThemeProvider
  attribute="data-theme"
  defaultTheme="system"
  enable={true}
>
  {children}
</NextThemeProvider>
  )
} 