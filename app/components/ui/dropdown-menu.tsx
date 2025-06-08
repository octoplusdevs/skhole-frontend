'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Avatar } from './avatar'

interface DropdownMenuProps {
  name: string
  imageUrl?: string
}

export const DropdownMenu = ({ name, imageUrl }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)}>
        <Avatar name={name} imageUrl={imageUrl} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50 text-white">
          <div className="px-4 py-2 text-sm border-b border-zinc-700">
            Minha Conta
          </div>
          <button
            onClick={() => router.push('/perfil')}
            className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800"
          >
            Perfil
          </button>
          <button
            onClick={() => {
              console.log('Logout')
              // Adicionar lógica de logout real
              setOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
