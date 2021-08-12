import { Component } from "react";
import { NavLink } from "theme-ui";

export default class Header extends Component {
	render() {
		return (
			<div id="header">
				<div id="header-content">
					<NavLink id="header-links" 
						href="https://twitter.com/ZoroticWasTaken" target="_blank" p={2}>
							Twitter,
					</NavLink>
					<NavLink id="header-links"
						href="https://github.com/Zorotic" target="_blank" p={1}>
							GitHub,
					</NavLink>
					<NavLink id="header-links"
						href="https://discord.gg/ESG6N2T73M" target="_blank" p={1}>
							Discord
					</NavLink>
				</div>
			</div>
		)
	}
}
