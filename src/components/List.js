import React from "react";
import { observer } from "mobx-react"

const List = observer(
    class List extends React.Component {
		render() {
			return (
				<div className='container'>
				
					<h1>Trip Advisor</h1>

					<p>{this.props.entriesStore.entries[0]}</p>

				</div>
			);
		}
    }
);

export default List;