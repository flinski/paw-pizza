import { ArrowUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type SortPopupProps = {
  className?: string
}

export function SortPopup({ className }: SortPopupProps) {
  return (
    <div
      className={cn(
        'hover:border-primary inline-flex h-9 cursor-pointer items-center gap-1 rounded-md border bg-neutral-100 px-4 text-sm duration-150 hover:bg-neutral-100/90',
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  )
}
