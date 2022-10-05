import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface LayoutSlice {
  layout: {
    loginPage: {
      isSidePicture: boolean
      sidePictureLink: string
      alignmentToTheLeft: boolean
      logoLink: string
    }
  }
}

const initialState: LayoutSlice = {
  layout: {
    loginPage: {
      isSidePicture: false,
      sidePictureLink: '',
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

export const layoutSelector = (state: RootState) => state.layout

export default layoutSlice.reducer
