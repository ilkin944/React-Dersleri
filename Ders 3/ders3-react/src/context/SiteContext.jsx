// ./context/SiteContext.js
import { createContext, useState, useEffect, useContext } from "react"

const SiteContext = createContext()
const SiteProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')
  
  const data = {
    theme,
    setTheme,
    language,
    setLanguage
  }
  
  useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('language', language)
  }, [theme, language])
  
  return (
    <SiteContext.Provider value={data}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSite = () => useContext(SiteContext)
export default SiteProvider