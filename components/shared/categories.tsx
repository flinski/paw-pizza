'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Римские Пиццы' },
  { id: 3, name: 'Комбо' },
  { id: 4, name: 'Закуски' },
  { id: 5, name: 'Коктели' },
  { id: 6, name: 'Кофе' },
  { id: 7, name: 'Напитки' },
  { id: 8, name: 'Десерты' },
  { id: 9, name: 'Соусы' },
]

type CategoriesProps = {
  className?: string
}

export function Categories({ className }: CategoriesProps) {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div className={cn('inline-flex rounded-lg', className)}>
      {categories.map((category) => (
        <a
          href={`/#${category.name}`}
          key={category.id}
          className={cn(
            'hover:text-primary flex h-14 cursor-pointer items-center font-semibold duration-150 not-first:ml-6',
            categoryActiveId === category.id && 'text-primary'
          )}
        >
          {category.name}
        </a>
      ))}
    </div>
  )
}
