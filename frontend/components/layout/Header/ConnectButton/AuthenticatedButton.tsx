import { connectMetamask } from '@/contract/connectMetamask'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import avatar from '@/assets/images/download.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { connect, disconnect } from '@/redux/connectWalletReducer'
import { RootState } from '@/redux/store'

export default function AuthenticatedButton() {
  const dispatch = useDispatch()

  const [showAvt, setShowAvt] = useState<boolean>(false)

  const handleAvtMouseOver = async () => {
    setShowAvt(true)
  }

  const handleAvtMouseOut = async () => {
    setShowAvt(false)
  }

  const address = useSelector(
    (state: RootState) => state.connectWallet.address
  )

  const handleConnectWalletButtonClick = async () => {
    await connectMetamask()
      .then((value) => dispatch(connect(value)))
      .catch((error) => console.log(error))
  }

  const handleLogoutBtnClick = () => {
    signOut()
    dispatch(disconnect())
  }

  return (
    <div className="flex items-center space-x-4">
      {address ? (
        <button className="w-40 truncate rounded-full px-6 py-1 text-slate-500 outline outline-1 outline-slate-400 hover:bg-slate-700 hover:text-white hover:outline-none">
          {address}
        </button>
      ) : (
        <button
          className="w-40 rounded-full px-6 py-1 text-slate-500 outline outline-1 outline-slate-400 hover:bg-slate-700 hover:text-white hover:outline-none"
          onClick={handleConnectWalletButtonClick}
        >
          Connect Wallet
        </button>
      )}
      <div
        className="relative"
        onMouseOver={handleAvtMouseOver}
        onMouseOut={handleAvtMouseOut}
      >
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={avatar}
            fill
            sizes="large"
            alt="Your avatar"
          />
        </button>
        {showAvt && (
          <div className="w-58 absolute right-0 z-10 overflow-hidden rounded-md bg-white shadow-lg">
            <a
              href="#"
              className="block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
            >
              Setting
            </a>
            <button
              onClick={handleLogoutBtnClick}
              className="block w-full whitespace-nowrap px-4 py-2 text-left  text-lg text-gray-700 hover:bg-red-400"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
