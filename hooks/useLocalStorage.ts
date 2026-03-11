'use client'
import { useState, useEffect, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isHydrated, setIsHydrated] = useState(false)

  // Initial read
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch {
      // ignore
    }
    setIsHydrated(true)
  }, [key])

  // Custom sync listener
  useEffect(() => {
    const handleStorageChange = (e: CustomEvent | StorageEvent) => {
      if ('detail' in e) {
        // Custom event triggered by setValue in another component in same tab
        if (e.detail.key === key) {
          setStoredValue(e.detail.newValue)
        }
      } else {
        // Native event from another tab
        if ((e as StorageEvent).key === key) {
          try {
            const item = window.localStorage.getItem(key)
            if (item !== null) {
              setStoredValue(JSON.parse(item))
            } else {
              setStoredValue(initialValue)
            }
          } catch {
            // ignore
          }
        }
      }
    }

    window.addEventListener('local-storage', handleStorageChange as EventListener)
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('local-storage', handleStorageChange as EventListener)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key, initialValue])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore))
        window.dispatchEvent(new CustomEvent('local-storage', { detail: { key, newValue: valueToStore } }))
      }
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setValue, isHydrated] as const
}
