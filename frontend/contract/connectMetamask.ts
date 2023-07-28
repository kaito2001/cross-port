import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum?: any
  }
}

export const connectMetamask = async () => {
  if (!window.ethereum) {
    alert('Please install MetaMask')
    return
  }
  await window.ethereum.request({ method: 'eth_requestAccounts' })
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const address = await signer.getAddress()
  return address
}
