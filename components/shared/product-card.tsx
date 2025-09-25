import Link from 'next/link'
import { Title } from '@/components/shared'
import { Button } from '@/components/ui'

type ProductCardProps = {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export function ProductCard({ id, name, price, imageUrl, className }: ProductCardProps) {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-orange-50 p-6">
          <img src={imageUrl} alt={name} width={584} height={584} className="size-[215px]" />
        </div>

        <Title text={name} size="h5" className="mt-3 mb-1 font-bold" />

        <p className="text-sm text-gray-400">
          Цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус
          альфредо
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg">
            от <b className="font-semibold">{price} ₽</b>
          </span>

          <Button
            variant="rounded"
            className="h-10 bg-orange-100 text-base font-bold text-orange-500 hover:bg-orange-200 hover:text-orange-600"
          >
            Выбрать
          </Button>
        </div>
      </Link>
    </div>
  )
}
