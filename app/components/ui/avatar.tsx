'use client'

interface AvatarProps {
  name: string
  imageUrl?: string
}

export const Avatar = ({ name, imageUrl }: AvatarProps) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="relative w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm font-medium">{initials}</span>
      )}
    </div>
  )
}
