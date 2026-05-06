import { LinkButton } from '@components'
import { cn } from '@utils'

interface Props {
  code?: string
  preview?: string
  className?: string
}

export const ProjectLinks = ({ code, preview, className }: Props) => {
  if (!code && !preview) return null

  return (
    <div className={cn('flex items-center gap-2 mt-3', className)}>
      {code && (
        <LinkButton icon='github' href={code} newTab small>
          Code
        </LinkButton>
      )}
      {preview && (
        <LinkButton icon='preview' href={preview} newTab small>
          Try it out
        </LinkButton>
      )}
    </div>
  )
}
