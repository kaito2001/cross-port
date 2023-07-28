import ConnectButton from './ConnectButton'
import Logo from './Logo'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex h-14 w-full justify-center shadow-md shadow-slate-100">
      <div className="flex h-full w-3/4 items-center justify-between">
        {/* <div className="absolute left-0"> */}
        <Logo />
        {/* </div> */}
        {/* <div className="flex w-full items-center justify-center">
          <Navbar />
        </div> */}
        {/* <div className="absolute right-0"> */}
        <ConnectButton />
        {/* </div> */}
      </div>
    </div>
  )
}
