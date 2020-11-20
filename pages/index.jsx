import { Heading, Container, Card, Text } from 'theme-ui';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Additional from '../components/Additional'
import Particles from '../components/Particles'
import styled from 'styled-components'


export default function Home() {
	return <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			<Particles />
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
				<Heading as='h1' id="heading" sx={{
				textAlign: 'center'
				}}>Zorotic</Heading>
				<h4 id="heading2" as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
				{"<"} 19, Full-Stack Developer & System Administrator {"/>"}
				</h4>
				<Header/>
				<h4 className="about" as='h4' sx={{ textAlign: 'center', marginTop: 10, color: 0xD91895 }}>
				CTO, Lead Developer, Maintainer.<br/>
				CTO at <a className="about-links" href="https://plexidev.org/" target="_blank">Plexi Development.</a><br/>
				Lead Developer & Maintainer for <a className="about-links"href="https://captchabot.xyz/" target="_blank">Server Captcha Bot.</a>
				</h4>
				<Heading id="projects-heading" as='h3' sx={{
					paddingTop: 50,
					textAlign: 'center'
				}}>
				{"<"} Contact Me {"/>"}
				</Heading>
				<Container className="additional">
					<Additional className="item" title="Email" description="zorotic@captchabot.xyz" url="mailto:zorotic@captchabot.xyz"/>
				</Container>
				<Footer/>
			</div>
		</div>
}
