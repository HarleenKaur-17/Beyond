import { notFound } from 'next/navigation'

interface Params {
  params: {
    id: string
  }
}

type Product = {
  id: number
  title: string
  price: number
  image: string
  description: string
}

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' })

  if (!res.ok) return null

  const product = await res.json()
  return product
}

export default async function ProductPage({ params }: Params) {
  const product = await getProduct(params.id)

  if (!product) return notFound()

  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[400px] object-contain rounded-md"
          loading="lazy"
        />
        <div>
          <h1 className="text-3xl font-extrabold">{product.title}</h1>
          <p className="text-yellow-600 text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
      </div>
    </article>
  )
}
