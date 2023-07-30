import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'

export default function UnauthenticatedModal() {
  const googleIcon = (
    <FontAwesomeIcon icon={faGoogle} size="xl" className="pr-2" />
  )
  const facebookIcon = (
    <FontAwesomeIcon icon={faFacebook} size="xl" className="pr-2" />
  )
  return (
    <div className="flex flex-col space-y-4 rounded-2xl bg-slate-50 p-10">
      <div className="space-y-4">
        <p className="text-4xl font-semibold text-slate-700">
          Log in to Soundbound
        </p>
        <p className="text-xl font-semibold text-slate-500">
          Welcome back!
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => signIn('google')}
          className="rounded-xl bg-slate-700 px-64 py-4 hover:bg-slate-600 text-white"
        >
          {googleIcon} Sign in with Google
        </button>
        <button
          onClick={() => signIn('facebook')}
          className="rounded-xl bg-slate-700 px-64 py-4 hover:bg-slate-600 text-white"
        >
          {facebookIcon} Sign in with Facebook
        </button>
      </div>
    </div>
  )
}
