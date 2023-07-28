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
        className=" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white"
        onClick={() => handleSignInButtonClick('/login')}
      >
        Sign in
      </button>
    )
  else if (status === 'authenticated') {
    return <AuthenticatedButton />
  }
}
