
// import './globals.css'

// export const metadata = {
//   title: 'Beyond',
//   description: 'Basic eCommerce with shadcn UI',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col">
//         <header className="bg-gray-900 text-white p-4">
//           <h1 className="text-2xl font-bold">Beyond</h1>
//         </header>
//         <main className="flex-grow container mx-auto p-4">{children}</main>
//         <footer className="bg-gray-900 text-white p-4 text-center">
//           &copy; {new Date().getFullYear()} Beyond. All rights reserved.
//         </footer>
//       </body>
//     </html>
//   )
// }
import './globals.css'
import { CartProvider } from '@/context/CartContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <header className="bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold">Beyond</h1>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-gray-900 text-white p-4 text-center">
            &copy; {new Date().getFullYear()} Beyond
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}

