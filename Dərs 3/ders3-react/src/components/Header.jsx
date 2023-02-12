// ./components/Header.js
import { useSite } from "../context/SiteContext"

export default function Header() {

  const { theme, setTheme, language, setLanguage } = useSite()

  return (
    <header>
      website language: {language} <br />
      <button onClick={() => setLanguage(lang => lang === "az" ? "en" : "az")}>Change lang</button>
      
      <hr />
      website theme: {theme} <br />
      <button onClick={() => setTheme(theme => theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    </header>
  )
}