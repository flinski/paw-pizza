'use client'

import { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { cn } from '@/lib/utils'
import { Title } from './title'
import { ProductCard } from '@/components/shared'
import { useCategoryStore } from '@/store/category'

type ProductsGroupListProps = {
  title: string
  products: any[] // CategoryProducts['products']
  className?: string
  listClassName?: string
  categoryId: number
}

export function ProductsGroupList({
  title,
  products,
  categoryId,
  className,
  listClassName,
}: ProductsGroupListProps) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef<HTMLDivElement | null>(null)
  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId])

  return (
    <div ref={intersectionRef} id={title} className={className}>
      <Title text={title} size="h4" className="mb-5 font-extrabold" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
