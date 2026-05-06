import { NotFoundDisplay } from '@components'

export default function NotFoundPage() {
  return (
    <NotFoundDisplay
      message='Sorry, the page you are looking for does not exist or may have been removed.'
      action={{
        label: 'Go back home',
        href: '/'
      }}
    />
  )
}
