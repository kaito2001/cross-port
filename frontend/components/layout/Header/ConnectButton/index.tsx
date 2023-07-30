import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import AuthenticatedButton from './AuthenticatedButton'

export default function ConnectButton() {
  const { status } = useSession()

  const router = useRouter()

  const handleSignInButtonClick = (path: string) => {
    router.push(path)
  }

  if (status === 'unauthenticated')
    return (
      <button
        className="rounded-xl bg-slate-700 px-6 py-1 text-white hover:bg-slate-600"
        onClick={() => handleSignInButtonClick('/login')}
      >
        Sign in
      </button>
    )
  else if (status === 'authenticated') {
    return <AuthenticatedButton />
  }
}
