import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const [showCommunity, setShowCommunity] = useState<boolean>(false)

  const router = useRouter()

  const handleCommunityMouseOver = () => {
    setShowCommunity(true)
  }

  const handleCommunityMouseOut = () => {
    setShowCommunity(false)
  }

  const handleNavbarClick = (path: string) => {
    router.push(path)
  }

  return (
    <div>
      <ul className="flex space-x-10 text-slate-500">
        <li>
          <div
            className="relative h-full w-full"
            onMouseOver={handleCommunityMouseOver}
            onMouseOut={handleCommunityMouseOut}
          >
            <button className="font-semibold hover:text-slate-700">
              Community
            </button>
            {showCommunity && (
              <div className="absolute -left-3/4 top-full translate-x-1/2 overflow-hidden rounded-md bg-white shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50"
                >
                  Telegram
                </a>
              </div>
            )}
          </div>
        </li>
        <li>
          <button
            className="font-semibold hover:text-slate-700"
            onClick={() => handleNavbarClick('/')}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            className="font-semibold hover:text-slate-700"
            onClick={() => handleNavbarClick('/faucet')}
          >
            Faucet
          </button>
        </li>
      </ul>
    </div>
  )
}
