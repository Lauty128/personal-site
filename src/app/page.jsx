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
        <Skills />
        <Projects />
        {/* <MoreAboutMe /> */}
        <Contact />
        <Articles />
      </main>
    </>
  )
}
