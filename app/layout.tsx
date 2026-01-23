export default function RootLayout({
  // children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="unavailable">The site is temporarily unavailable.</div>
      </body>
    </html>
  );
}
