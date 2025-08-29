'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext' // adjust path if needed

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type ProductCardProps = {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // prevent Link navigation
    addToCart({ id, name, price, image })
  }

  return (
    <Link href={`/products/${id}`} className="w-full">
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <img src={image} alt={name} className="w-full h-48 object-contain rounded-t-md" />
        
        <CardHeader>
          <CardTitle className="text-lg line-clamp-2">{name}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700 text-sm">${price.toFixed(2)}</p>
        </CardContent>

        <CardFooter>
          <Button onClick={handleAddToCart} size="sm" variant="default" className="w-full">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

