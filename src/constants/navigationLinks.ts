import { MessageCircleMoreIcon } from 'lucide-react'

export type NavigationLink = {
  label: string
  href: string
  Icon?: React.FC<{ className?: string }>
}

export const navigationLinks: Array<NavigationLink> = [
  { label: 'New chat', href: '/', Icon: MessageCircleMoreIcon },
]
