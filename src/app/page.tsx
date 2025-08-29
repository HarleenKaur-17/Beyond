import { Container } from '@/components/ui/container'
import ProductCard from './components/ProductCard'

type Product = {
  id: number
  title: string
  price: number
  image: string
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <Container className="py-12 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Beyond</h1>
      <h2 className="text-3xl mb-10 text-center">Beyond is a lifestyle</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id.toString()}
            id={product.id.toString()}
            name={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </Container>
  )
}
