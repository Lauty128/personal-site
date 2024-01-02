//----> Components
import { Menu } from '../components/static'
import { AboutMe, Skills, Projects, Contact , Header, MoreAboutMe, Articles } from '../components/section'

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <Header />
        <AboutMe />
        <hr className='separator' />
        <Skills />
        <hr className='separator' />
        <Projects />
        <hr className='separator' />
        <MoreAboutMe />
        <hr className='separator' />
        <Articles />
        <hr className='separator' />
        <Contact />
      </main>
    </>
  )
}
