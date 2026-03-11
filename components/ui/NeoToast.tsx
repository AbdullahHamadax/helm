'use client'
import { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, Info, AlertCircle } from 'lucide-react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'info' | 'error'
  icon?: string
}

interface ToastContextType {
  show: (message: string, type?: Toast['type'], icon?: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const show = (message: string, type: Toast['type'] = 'success', icon?: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts(prev => [...prev, { id, message, type, icon }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 2500)
  }

  const remove = (id: string) => setToasts(prev => prev.filter(t => t.id !== id))

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-[100] flex flex-col gap-2 items-end pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            onClick={() => remove(toast.id)}
            className={cn(
              'animate-slide-up border-2 border-black dark:border-white',
              'bg-black dark:bg-white text-white dark:text-black',
              'px-4 py-3 font-bold font-body text-sm',
              'flex items-center gap-2',
              'shadow-[4px_4px_0px_0px_#F5F5F0] dark:shadow-neo',
              'max-w-xs w-full sm:w-auto pointer-events-auto cursor-pointer',
            )}
          >
            {toast.icon ? (
              <span>{toast.icon}</span>
            ) : toast.type === 'success' ? (
              <CheckCircle size={16} />
            ) : toast.type === 'error' ? (
              <AlertCircle size={16} />
            ) : (
              <Info size={16} />
            )}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
