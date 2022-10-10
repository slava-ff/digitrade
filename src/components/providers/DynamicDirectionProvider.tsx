import rtlPlugin from 'stylis-plugin-rtl' // TO-DO: update version to avoid warning in console. also v2.0.2 fixes it
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis' // and @types/stylis in dev deps
import { useTranslation } from 'react-i18next'

import { Children } from 'interfaces'

const cacheRtl = createCache({
  key: 'mui-rtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const cacheLtr = createCache({
  key: 'mui-ltr',
})

const DynamicDirectionProvider: React.FC<Children> = ({ children }) => {
  const { i18n } = useTranslation()

  document.body.dir = i18n.dir()
  document.dir = i18n.dir()
  return (
    <CacheProvider value={i18n.dir() === 'rtl' ? cacheRtl : cacheLtr}>
      {children}
    </CacheProvider>
  )
}

export default DynamicDirectionProvider
