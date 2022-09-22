export const mockConfig = {
  token: "123",
  theme: {
    custom: {
      brand50: "#F0EBFE",
      brand100: "#E2D8FD",
      brand200: "#C5B2FB",
      brand300: "#A88BF9",
      brand400: "#8B65F7",
      brand500: "#6F3FF5",
      brand600: "#5832C4",
      brand700: "#422593",
      brand800: "#2C1961",
    }
  },
  layout: {
    loginPage: "imageToTheLeft",
    mainPage: "layout3",
  },
  extraFunctionality: {
    news: false,
    settings: true,
  },
  i18n: {
    language: "en",
    translations: {
      "welcome": "Welcome to Digitrade!",
      "logInHeader": "Log In",
      "loginDescription": "Please fill your detail to access your account.",
    }
  }
}

const { REACT_APP_API_URL } = process.env
export const API_URL = `https://${REACT_APP_API_URL}`
