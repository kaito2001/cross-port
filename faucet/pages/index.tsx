import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value)
  }

  return (
    <main
    className="flex h-screen w-screen items-center justify-center bg-white"
    >
      <div className="flex flex-col space-y-4 rounded-2xl bg-slate-50 p-10">
      <div className="space-y-4">
        <p className=" text-center text-4xl font-bold text-black">
          CrossTech Testnet Faucet
        </p>
        <p className=" text-center text-xl text-slate-500">
          Use this form to request tokens to your CrossTech address.
        </p>
      </div>
      <div className="divide-x divide-dashed divide-gray-300"></div>
      <div className="flex flex-col space-y-4">
        <form onSubmit={handleSubmit} className=" w-full">
          <input
            type="text"
            name="walletAddress"
            placeholder="Enter your CrossTech Address"
            className=" w-full rounded-full bg-slate-200 p-4 text-black focus:bg-white focus:outline-none"
            onChange={handleChange}
            value={walletAddress}
          />
        </form>
        <button className="rounded-full bg-slate-600 px-64 py-4 hover:bg-slate-400">
          Request Tokens
        </button>
      </div>
    </div>
    </main>
  )
}
