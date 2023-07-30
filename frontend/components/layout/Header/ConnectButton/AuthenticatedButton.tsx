import { connectMetamask } from '@/contract/connectMetamask'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import avatar from '@/assets/images/download.jpg'

export default function AuthenticatedButton() {
  const [showAvt, setShowAvt] = useState<boolean>(false)

  const handleAvtClick = async () => {
    setShowAvt(!showAvt)
  }

  const [address, setAddress] = useState<string | undefined>(
    undefined
  )

  const handleConnectWalletButtonClick = async () => {
    await connectMetamask()
      .then((value) => setAddress(value))
      .catch((err) => console.log(err))
  }

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <button className="w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white">
          {address}
        </button>
      ) : (
        <button
          className="w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white"
          onClick={handleConnectWalletButtonClick}
        >
          Connect Wallet
        </button>
      )}
      <div className="relative">
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={avatar}
            fill
            sizes="large"
            alt="Your avatar"
            onClick={handleAvtClick}
          />
        </button>
        {showAvt && (
          <div className="w-58 absolute right-0 z-10 mt-2 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-black">
            <a
              href="#"
              className="block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
            >
              Setting
            </a>
            <button
              onClick={() => signOut()}
              className="block w-full whitespace-nowrap px-4 py-2 text-left  text-lg text-gray-700 hover:bg-red-400"
              role="menuitem"
              tabIndex={-1}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
