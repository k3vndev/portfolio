/**
 * Component to parse and render text with custom formatting.
 * Every word or phrase wrapped in [square brackets] will be rendered wrapped in <strong> tags, allowing for easy highlighting of important information within paragraphs.
 *
 * Example usage:
 * <ParsedText>"This is a [highlighted] word and this is [another one]."</ParsedText>
 */

import { cn } from '@utils'
import { type JSX, useMemo } from 'react'

export const ParsedText = ({ children, className, tag = 'p' }: Props) => {
  const parsed = useMemo(() => {
    const result = children.replace(/\[([^\]]+)\]/g, (_, text) => `<strong>${text}</strong>`)
    const sanitized = result.replace(/<(?!\/?strong\b)[^>]+>/g, '')
    return sanitized
  }, [children])

  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <Tag
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe because the input is controlled and sanitized.
      dangerouslySetInnerHTML={{ __html: parsed }}
      className={cn(
        'text-bluish-gray font-plus text-xl [&>strong]:text-low-gradient [&>strong]:brightness-110 [&>strong]:border-b-2 [&>strong]:border-white/25 [&>strong]:border-dashed [&>strong]:px-0.5',
        className
      )}
    />
  )
}

interface Props {
  children: string
  className?: string
  tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
