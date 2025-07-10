export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
