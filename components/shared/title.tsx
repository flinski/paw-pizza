import { createElement } from 'react'
import clsx from 'clsx'

type TitleSize = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'

type TitleProps = {
  size?: TitleSize
  className?: string
  text: string
}

export function Title({ text, size = 'h4', className }: TitleProps) {
  const mapClassNameBySize = {
    h6: 'text-[16px]',
    h5: 'text-[22px]',
    h4: 'text-[26px]',
    h3: 'text-[32px]',
    h2: 'text-[40px]',
    h1: 'text-[48px]',
  } as const

  return createElement(size, { className: clsx(mapClassNameBySize[size], className) }, text)
}
