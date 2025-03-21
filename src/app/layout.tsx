export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>SPV Wallet App</title>
        <meta name="description" content="Bitcoin SV SPV Wallet Application" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="font-bold text-xl cursor-pointer">SPV Wallet</a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">{children}</main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Bitcoin SV SPV Wallet</p>
          </div>
        </footer>
      </body>
    </html>
  );
}