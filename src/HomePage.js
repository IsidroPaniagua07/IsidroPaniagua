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
      <>
    <div className='spacer bg-image'>
  <Desktop>
        <HomePageDesktop/>
    </Desktop>
    <Mobile>
        <HomePageMobile/>
    </Mobile>

    </div>
</>
    )
}

export default HomePage