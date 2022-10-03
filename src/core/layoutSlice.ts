import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { useAppSelector } from 'hooks/reduxToolKitHooks'

interface LayoutSlice {
  layout: {
    loginPage: {
      isPicture: boolean
      picLink: string
      alignmentToTheLeft: boolean
      logoLink: string
    }
  }
}

const initialState: LayoutSlice = {
  layout: {
    loginPage: {
      isPicture: false,
      picLink: '',
      alignmentToTheLeft: false,
      logoLink: '',
    },
  },
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout: (state, action: any) => {
      // PayloadAction<object>) => {
      state.layout = action.payload
    },
  },
})

export const { setLayout } = layoutSlice.actions

export const layoutSelector = () =>
  useAppSelector((state: RootState) => state.layout)

export default layoutSlice.reducer
