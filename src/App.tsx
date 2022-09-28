import React from 'react'
// import "i18n/i18n"
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'i18n/i18n'

import Pages from 'pages'
import DynamicThemeProvider from 'components/DynamicThemeProvider'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  document.body.dir = i18n.dir()

  return (
    <div className="App">
      <DynamicThemeProvider>
        <Pages />
      </DynamicThemeProvider>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('welcome')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
