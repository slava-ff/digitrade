import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface ThemeSlice {
  theme: object | null
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

export const themeSelector = (state: RootState) => state.theme

export default themeSlice.reducer