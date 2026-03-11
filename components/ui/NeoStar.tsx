'use client'
import React from 'react'
import { cn } from '@/lib/utils'

interface NeoStarProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'sparkle' | 'fat-star' | 'sunburst' | 'asterisk' | 'flower'
  accent?: string
  color?: string
}

export function NeoStar({ variant = 'sparkle', accent = '#FFE500', color, className, ...props }: NeoStarProps) {
  const fillColor = color || accent

  const getPath = () => {
    switch (variant) {
      case 'sparkle':
        return 'M50 0L59 41L100 50L59 59L50 100L41 59L0 50L41 41Z' // Star 1 style
      case 'fat-star':
        return 'M50 5L63 35L95 35L68 55L78 85L50 68L22 85L32 55L5 35L37 35Z' // Star 4 style
      case 'sunburst':
        return 'M50 0L60 20L85 15L80 35L100 50L80 65L85 85L60 80L50 100L40 80L15 85L20 65L0 50L20 35L15 15L40 20Z' // Star 12 style
      case 'asterisk':
        return 'M45 0H55V35L80 10L87 17L62 42H100V58H62L87 83L80 90L55 65V100H45V65L20 90L13 83L38 58H0V42H38L13 17L20 10L45 35V0Z' // Cross style
      case 'flower':
        return 'M50,10 C60,-5 80,-5 90,10 C105,20 105,40 90,50 C105,60 105,80 90,90 C80,105 60,105 50,90 C40,105 20,105 10,90 C-5,80 -5,60 10,50 C-5,40 -5,20 10,10 C20,-5 40,-5 50,10 Z'
      default:
        return 'M50 0L59 41L100 50L59 59L50 100L41 59L0 50L41 41Z'
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-12 h-12 inline-block', className)}
      {...props}
    >
      <path
        d={getPath()}
        fill={fillColor}
        stroke="var(--border)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
    </svg>
  )
}
