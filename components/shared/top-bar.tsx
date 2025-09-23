import { Container, Categories, SortPopup } from '@/components/shared'
import { cn } from '@/lib/utils'

type TopBarProps = {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  return (
    <div className={cn('sticky top-0 bg-white/50 shadow-xl/6 backdrop-blur-sm', className)}>
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
