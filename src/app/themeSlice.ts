import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'
import { useAppSelector } from 'app/hooks'
// import { useAppDispatch } from 'app/hooks'

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

// export const dispatchTheme = (theme: object) => {
//   const dispatch = useAppDispatch()

//   dispatch(setTheme(theme))
// }

export const themeSelector = () => useAppSelector((state: RootState) => state.theme)

export default themeSlice.reducer