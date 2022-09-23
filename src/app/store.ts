import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer from "./themeSlice"
import i18nReducer from "./i18nSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    i18n: i18nReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store