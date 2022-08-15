import { useMediaQuery } from 'react-responsive'
import HomePageDesktop from './HomePageDesktop'
import HomePageMobile from './HomePageMobile'

const HomePage = () => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1024 })
        return isDesktop ? children : null
      }
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 1023 })
        return isMobile ? children : null
      }
  return (
<>  <Desktop>
        <HomePageDesktop/>
    </Desktop>
    <Mobile>
        <HomePageMobile/>
    </Mobile>
</>
    )
}

export default HomePage