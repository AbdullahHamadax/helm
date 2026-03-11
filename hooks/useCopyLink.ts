'use client'
import { useState } from 'react'

export function useCopyLink() {
  const [copied, setCopied] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copy = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setCopiedId(id)
      setTimeout(() => {
        setCopied(false)
        setCopiedId(null)
      }, 2500)
    })
  }

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return { copy, copyUrl, copied, copiedId }
}
