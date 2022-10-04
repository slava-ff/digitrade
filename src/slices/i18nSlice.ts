import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { useAppSelector } from 'store'

interface I18nSlice {
  i18n: {
    language: string
    isRtl: boolean
    translations: { [key: string]: string }
  }
}

const initialState: I18nSlice = {
  i18n: {
    language: 'he',
    isRtl: true,
    translations: {},
  },
}

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setI18n: (state, action: any) => {
      // PayloadAction<object>) => {
      state.i18n = action.payload
    },
  },
})

export const { setI18n } = i18nSlice.actions

export const i18nSelector = () =>
  useAppSelector((state: RootState) => state.i18n)

export default i18nSlice.reducer
