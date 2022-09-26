import { Heading } from 'theme-ui';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
	return <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
			<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
				<Heading as='h1' id="heading" sx={{ textAlign: 'center' }}>Zorotic</Heading>
				<h4 id="heading2" as='h4' sx={{ textAlign: 'center', marginTop: 2}}>
				{"<"} 19, Hobbyist interested in making things scale. {"/>"}
				</h4>
				<Header/>
				{/* <h4 className="about" as='h4' sx={{ textAlign: 'center', marginTop: 10, color: 0xD91895 }}>
				CTO, Ex-Software Engineer<br/>
				CTO at <a className="about-links" href="https://plexidev.org/" target="_blank">Plexi Development.</a><br/>
				</h4> */}
				<br/>
				<Footer/>
			</div>
		</div>
}
