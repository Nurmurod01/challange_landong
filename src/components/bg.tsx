"use client"

import Image from "next/image"
import { useState } from "react"

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
}

export function BackgroundImage({ src, alt, className = "" }: BackgroundImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 ${className}`} />
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      onError={() => setImageError(true)}
      priority
    />
  )
}
