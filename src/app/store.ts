import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import themeReducer from "./slice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store