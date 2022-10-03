import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import themeReducer from './core/themeSlice'
import i18nReducer from './core/i18nSlice'
import layoutReducer from './core/layoutSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    i18n: i18nReducer,
    layout: layoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
