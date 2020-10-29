import { Heading, Container, Card, Text } from 'theme-ui';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Additional from '../components/Additional'

export default function Home() {
  return (
    <div>
      <Heading as='h1' id="heading" sx={{
        textAlign: 'center'
      }}>Zorotic</Heading>
      <Heading as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
        {"<"} Full Stack Developer - Software Engineer {"/>"}
      </Heading>
      <Header/>
      <Heading className="about" as='h4' sx={{ textAlign: 'center', marginTop: 10}}>
        Co-Owner, Lead Developer, Maintainer.<br/>
        Co-Owner for <a className="about-links" href="https://plexidev.org/" target="_blank">Plexi Development.</a><br/>
        Lead Developer & Maintainer for <a className="about-links"href="https://captchabot.xyz/" target="_blank">Server Captcha Bot.</a>
      </Heading>
      <Heading id="projects-heading" as='h3' sx={{
        paddingTop: 50,
        textAlign: 'center'
      }}>
        {"<"} Contact Me {"/>"}
      </Heading>
      <Container className="additional">
        <Additional className="item" title="Email" description="zoro@captchabot.xyz"/>
      </Container>
      {/* <Heading id="projects-heading" as='h2' sx={{
        paddingTop: 50,
        textAlign: 'center'
      }}>Projects</Heading>
      <Container className="projects">
        <Project className="project" title="Server Captcha Bot" description="Verification for your Discord Server done right." lore="Check it out!" url="https://github.com/captcha-bot"/>
      </Container> */}
      <Footer/>
    </div>
  )
}
