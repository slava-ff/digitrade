import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { useAppSelector } from 'hooks/reduxToolKitHooks'

interface ThemeSlice {
  theme: any
}

const initialState: ThemeSlice = {
  theme: null,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<object>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export const themeSelector = () =>
  useAppSelector((state: RootState) => state.theme)

export default themeSlice.reducer
