import { RootState, store } from '@/redux/store'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const address = store.getState().connectWallet.address

  const handleGenCP = async () => {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://34.232.46.225:9001/nft/generate/${address}`,
    }

    axios
      .request(config)
      .then((response) => {
        alert(response.data.message)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const isConnected = useSelector(
    (state: RootState) => state.connectWallet.isConnected
  )
  return (
    <div>
      {isConnected ? (
        <button
          className="rounded-xl bg-black px-4 py-2 text-white"
          onClick={handleGenCP}
        >
          Generate crossport
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-center text-4xl text-black">
            Welcome to
          </p>
          <p className="text-center text-6xl font-bold text-black">
            CrossPort
          </p>
          <div className="w-fit space-x-4">
            <button className="w-36 rounded-xl bg-black px-4 py-2 text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black">
              Get Started
            </button>
            <button className="w-36 rounded-xl bg-white px-4 py-2 text-black outline-dashed outline-1 outline-black hover:bg-black hover:text-white hover:outline-none">
              Explore now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
