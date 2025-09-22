import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Container } from '@/components/shared'
import { Button } from '@/components/ui'
import { ShoppingCart, User } from 'lucide-react'

type HeaderProps = {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-4">
        {/* Логотип */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Логотип Paw Pizza"
            width={477}
            height={414}
            className="w-[48px]"
          />
          <div>
            <h1 className="text-2xl font-black text-orange-950 uppercase">Paw Pizza</h1>
            <p className="text-sm leading-3 tracking-wider text-gray-400">сеть пиццерий</p>
          </div>
        </div>

        {/* Поиск */}

        {/* Корзина */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Войти
          </Button>

          <div>
            <Button>
              <span>520 ₽</span>
              <span className="mx-1 h-full w-[1px] bg-white/30"></span>
              <div className="flex items-center gap-1">
                <ShoppingCart size={16} />
                <span>3</span>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
