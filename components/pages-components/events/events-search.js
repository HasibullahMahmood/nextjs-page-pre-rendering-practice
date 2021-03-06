import { Component, createRef } from 'react';

import Button from '../../common/button/button';
import styles from './events-search.module.css';

class EventsSearch extends Component {
	constructor(props) {
		super(props);
		this.yearInputRef = createRef();
		this.monthInputRef = createRef();
	}

	submitHandler = (event) => {
		event.preventDefault();

		const year = this.yearInputRef.current.value;
		const month = this.monthInputRef.current.value;
		this.props.onSearch(year, month);
	};

	render() {
		return (
			<form className={styles.form} onSubmit={this.submitHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="year">Year</label>
						<select id="year" ref={this.yearInputRef}>
							<option value="2021">2021</option>
							<option value="2022">2022</option>
						</select>
					</div>
					<div className={styles.control}>
						<label htmlFor="month">Month</label>
						<select id="month" ref={this.monthInputRef}>
							<option value="1">January</option>
							<option value="2">February</option>
							<option value="3">March</option>
							<option value="4">April</option>
							<option value="5">May</option>
							<option value="6">June</option>
							<option value="7">July</option>
							<option value="8">August</option>
							<option value="9">September</option>
							<option value="10">October</option>
							<option value="11">November</option>
							<option value="12">December</option>
						</select>
					</div>
				</div>
				<Button>Apply Filter</Button>
			</form>
		);
	}
}

export default EventsSearch;
