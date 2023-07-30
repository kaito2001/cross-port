import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://34.232.46.225:9001/faucet/${walletAddress}`,
    };
        
    axios.request(config)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error);
      });
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
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            name="walletAddress"
            placeholder="Enter your CrossTech Address"
            className=" w-full rounded-full bg-slate-200 p-4 text-black focus:bg-white focus:outline-none"
            onChange={handleChange}
            value={walletAddress} 
          />
          <button type="submit" className="rounded-full w-full bg-slate-600 px-64 py-4 hover:bg-slate-400">
          Request Tokens
        </button>
        </form>
        
      </div>
    </div>
    </main>
  )
}
