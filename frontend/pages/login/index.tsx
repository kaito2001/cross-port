import { useSession } from 'next-auth/react'
import UnauthenticatedModal from './UnauthenticatedModal'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()

  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
    return <UnauthenticatedModal />
  } else if (status === 'loading') {
    return <LoadingSpinner text={'Loggin In'} />
  } else {
    router.push('/')
  }
}
