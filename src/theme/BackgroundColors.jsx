import { useThemeContext } from "../context/theme-context"

const BackgroundColors = ({className}) => {
  const {themeHandler} = useThemeContext()
  return (
    <button className={className} onClick={() => themeHandler(className)}></button>
  )
}

export default BackgroundColors
