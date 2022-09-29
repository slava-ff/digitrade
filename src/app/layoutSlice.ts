import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import { useAppSelector } from 'app/hooks'

interface LayoutSlice {
  layout: any
}

const initialState: LayoutSlice = {
  layout: null,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<object>) => {
      state.layout = action.payload
    },
  },
})

export const { setLayout } = layoutSlice.actions

export const layoutSelector = () =>
  useAppSelector((state: RootState) => state.layout)

export default layoutSlice.reducer
