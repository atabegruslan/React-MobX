import React from "react";
import { observer } from "mobx-react"

// https://stackoverflow.com/questions/40721277/mobx-leading-decorators-must-be-attached-to-a-class-declaration
// https://ultimatecourses.com/blog/react-create-class-versus-component
// https://mobx.js.org/observable-state.html#makeobservable
// https://doc.ebichu.cc/mobx/refguide/observer-component.html
// https://github.com/mobxjs/mobx-react/blob/master/README_v5.md#observercomponentclass
// https://codingislove.com/setup-mobx-react-context/
// https://mobx.js.org/react-integration.html

// https://github.com/mobxjs/mobx-react#choosing-your-version

@observer
export default class List extends React.Component {
	render() {
		return (
			<div className='container'>
			
				<h1>Trip Advisor</h1>

				<p>{this.props.store.entries[0]}</p>

			</div>
		);
	}
};
