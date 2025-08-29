'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

//   const addToCart = (item: Omit<CartItem, 'quantity'>) => {
//     setCart(prev => {
//       const existing = prev.find(p => p.id === item.id)
//       if (existing) {
//         return prev.map(p =>
//           p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
//         )
//       }
//       return [...prev, { ...item, quantity: 1 }]
//     })
//   }
const addToCart = (item: Omit<CartItem, 'quantity'>) => {
  setCart(prev => {
    const existing = prev.find(p => p.id === item.id)
    const updatedCart = existing
      ? prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
      : [...prev, { ...item, quantity: 1 }]
    
    console.log('Cart:', updatedCart) // ✅ log cart contents
    return updatedCart
  })
}


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
