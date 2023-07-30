import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ConnectWalletState {
  address: string | undefined
  isConnected: boolean
}

const initialState: ConnectWalletState = {
  address: undefined,
  isConnected: false,
}

export const connectWalletSlice = createSlice({
  name: 'connectWallet',
  initialState,
  reducers: {
    connect: (state, action: PayloadAction<any>) => {
      state.address = action.payload
      state.isConnected = true
    },
    disconnect: (state) => {
      state.address = undefined
      state.isConnected = false
    },
  },
})

export const { connect, disconnect } = connectWalletSlice.actions

export default connectWalletSlice.reducer
