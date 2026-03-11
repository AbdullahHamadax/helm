'use client'
import { useLocalStorage } from './useLocalStorage'

export function useProgress(trackKey: string) {
  const [completed, setCompleted] = useLocalStorage<string[]>(`progress_${trackKey}`, [])

  const toggle = (stepId: string) => {
    setCompleted(prev =>
      prev.includes(stepId) ? prev.filter(id => id !== stepId) : [...prev, stepId]
    )
  }

  const percentage = (total: number) =>
    total === 0 ? 0 : Math.round((completed.length / total) * 100)

  const reset = () => setCompleted([])

  const isCompleted = (stepId: string) => completed.includes(stepId)

  return { completed, toggle, percentage, reset, isCompleted }
}
