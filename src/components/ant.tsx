import * as React from 'react';

export interface AntProps {
	name: string
	company: string
	address: string
}

export class Ant extends React.Component<AntProps, {}> {
	constructor(props: AntProps) {
		super(props);
	}

	render() {
		return (
			<h1>
				Hi, I am {this.props.name}, I in {this.props.company} now, I live at {this.props.address}!
			</h1>
		)
	}
}