import './App.css'
import Main from './Component/Main/Main';
import Navbar from './Component/Navbar/Navbar';
import Features from './Component/Features/Features';
import SocialMediaSection from './Component/SocialMediaSection/SocialMediaSection';
import PhotoPage from './Component/PhotoPage/PhotoPage';
import FreeTrialPage from './Component/FreeTrialPage/FreeTrialPage';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Features/>
      <SocialMediaSection/>
      <PhotoPage/>
      <FreeTrialPage/>
      <Footer/>
    </>
  )
}

export default App;
