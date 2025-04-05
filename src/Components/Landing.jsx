import NavBar from './NavBar'
import '../Styles/stylesLanding.css'
import Footer from './Footer'
import Faq from './Faq'
import Info from './Info'
import Great from './Great'

const Landing = () => {
  return (
    <>
      <NavBar/>
      <Great/>
      <Info/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Landing
