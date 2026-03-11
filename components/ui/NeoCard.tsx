'use client'
import { cn } from '@/lib/utils'
import React from 'react'

interface NeoCardProps {
  children: React.ReactNode
  className?: string
  accent?: string
  hover?: boolean
  id?: string
  onClick?: () => void
}

export function NeoCard({ children, className, accent, hover = true, id, onClick }: NeoCardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={cn(
        'border-2 border-black dark:border-white',
        'bg-white dark:bg-neo-card',
        'shadow-neo dark:shadow-neo-white',
        hover && 'transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-white-hover',
        hover && 'active:translate-x-0.5 active:translate-y-0.5 active:shadow-none',
        onClick && 'cursor-pointer',
        className
      )}
      style={accent ? { borderTopColor: accent, borderTopWidth: '4px' } : undefined}
    >
      {children}
    </div>
  )
}
