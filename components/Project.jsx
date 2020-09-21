// px: 2,
// py: 1,
// textTransform: 'uppercase',
// letterSpacing: '0.2em',

import { Card, Text } from 'theme-ui';

import { Component } from "react";

export default class Project extends Component {
	render() {
		return (
			<Card className={this.props.className || "project"} sx={{ px: 2, py: 2}}>
				<Text className="project-title" sx={{
					px: 2,
					py: 1,
					color: '#4CD936',
					textTransform: 'uppercase',
					letterSpacing: '0.1em',
				}}>{this.props.title}</Text>
				<Text className="project-description">{this.props.description}</Text>
				<a className="project-url" href={this.props.url} target="_blank">{this.props.lore}</a>
			</Card>
		)
	}
}