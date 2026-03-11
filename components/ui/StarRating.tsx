import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  max?: number
  size?: 'sm' | 'md'
  showNumber?: boolean
  accent?: string
  className?: string
}

export function StarRating({ rating, max = 5, size = 'sm', showNumber, accent = '#FFE500', className }: StarRatingProps) {
  const iconSize = size === 'sm' ? 14 : 18
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={iconSize}
          fill={i < rating ? accent : 'none'}
          stroke={i < rating ? accent : '#9CA3AF'}
          strokeWidth={2}
        />
      ))}
      {showNumber && (
        <span className="text-xs font-bold font-body ml-1">{rating}/{max}</span>
      )}
    </div>
  )
}
