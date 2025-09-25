'use client'

import { useEffect, useRef, useState } from 'react'
import { Container, Categories, SortPopup } from '@/components/shared'
import { cn } from '@/lib/utils'

type TopBarProps = {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  const topBarRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        const rect = topBarRef.current.getBoundingClientRect()
        setIsSticky(rect.top <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={topBarRef}
      className={cn(
        'sticky top-0 z-10 bg-white/75 backdrop-blur-sm duration-150',
        className,
        isSticky && 'shadow-xl/6'
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* {isSticky && <img src="/logo.png" width={32} height={32} className="" />} */}
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
