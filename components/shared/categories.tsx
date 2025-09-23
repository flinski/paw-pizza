import { cn } from '@/lib/utils'

const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктели', 'Кофе', 'Напитки', 'Десерты', 'Соусы']
const activeCategoryIndex = 0

type CategoriesProps = {
  className?: string
}

export function Categories({ className }: CategoriesProps) {
  return (
    <div className={cn('inline-flex rounded-lg', className)}>
      {categories.map((category, index) => (
        <a
          key={index}
          className={cn(
            'hover:text-primary flex h-14 cursor-pointer items-center font-semibold duration-150 not-first:ml-6',
            activeCategoryIndex === index && 'text-primary'
          )}
        >
          {category}
        </a>
      ))}
    </div>
  )
}
