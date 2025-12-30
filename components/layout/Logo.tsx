import Link from 'next/link'
import Image from 'next/image'

type LogoProps = {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10 w-auto',
    md: 'h-14 w-auto',
    lg: 'h-16 w-auto',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  }

  return (
    <Link
      href="/"
      className={`flex items-center space-x-3 ${className} group`}
    >
      {/* Logo NeoDisplay - Image fournie */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image
          src="/images/logo-Neodisplay.jpg"
          alt="NeoDisplay Logo"
          width={120}
          height={120}
          className="object-contain w-full h-full group-hover:opacity-90 transition-opacity"
          priority
          unoptimized
        />
      </div>

      {/* Texte NeoDisplay */}
      {showText && (
        <span className={`${textSizes[size]} font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-tech-blue via-smartfilm-turquoise to-tech-blue group-hover:from-smartfilm-turquoise group-hover:via-tech-blue group-hover:to-smartfilm-turquoise transition-all duration-300`}>
          NeoDisplay
        </span>
      )}
    </Link>
  )
}

