import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  accent?: string
  label?: string
  size?: 'sm' | 'md'
  className?: string
}

export function ProgressBar({ value, accent = '#06D6A0', label, size = 'md', className }: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium font-body text-gray-600 dark:text-gray-400">{label}</span>
          <span className="text-xs font-bold font-body">{clampedValue}%</span>
        </div>
      )}
      <div className={cn(
        'w-full border-2 border-black dark:border-white bg-white dark:bg-neo-card',
        size === 'sm' ? 'h-2' : 'h-4'
      )}>
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${clampedValue}%`, backgroundColor: accent }}
        />
      </div>
    </div>
  )
}
