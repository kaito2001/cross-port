import { ethers } from 'ethers'
import { sbtAbi } from './sbtAbi'

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc-kura.cross.technology/'
)

const signer = provider.getSigner()

const contract = new ethers.Contract(
  '0x668276a6Be2E0C1DDA428a7aFe701E51cD798627',
  sbtAbi,
  signer
)

// export function here
