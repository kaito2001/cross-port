import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const handleNavbarClick = (path: string) => {
    router.push(path)
  }

  return (
    <div>
      <ul className="flex space-x-10 text-slate-400">
        <li>
          <button
            className="font-semibold hover:text-black"
            onClick={() => handleNavbarClick('/')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="font-semibold hover:text-black"
            onClick={() => handleNavbarClick('/faucet')}
          >
            Faucet
          </button>
        </li>
      </ul>
    </div>
  )
}
