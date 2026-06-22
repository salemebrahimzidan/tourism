import { Link } from 'react-router-dom'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp'

interface BaseProps {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type LinkButtonProps = BaseProps & { to: string; href?: never }
type ExternalButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never }
type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }

type ButtonProps = LinkButtonProps | ExternalButtonProps | NativeButtonProps

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
  secondary:
    'bg-secondary text-text hover:bg-secondary-dark shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-md hover:shadow-lg',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
