import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import TransitionCard from "./transition-card";

class TransitionList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: "",
			cards: [],
			init: false
		};
		this.addNewPerson = this.addNewPerson.bind(this);
		this.removePerson = this.removePerson.bind(this);
		this.updateNameHandler = this.updateNameHandler.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		if (state.cards.length === 0 && !state.init) {
			return {
				cards: props.cards,
				init: true
			};
		}
		return null;
	}

	updateNameHandler(e) {
		this.setState({ value: e.target.value });
	}

	removePerson(id) {
		this.setState({
			cards: this.state.cards.filter(card => card.id !== id)
		});
	}

	addNewPerson(e) {
		e.preventDefault();
		if (this.state.value !== "") {
			this.setState({
				cards: [].concat(this.state.cards, {
					id: new Date().getTime(),
					name: this.state.value,
				}),
				value: ""
			});
		}
	}

	render() {
		console.log(this.state.cards);
		return <div className="container position-absolute">
			<div className="row">
				<div className="col-md-8 offset-md-2 col-sm-12 offset-sm-0 mt-5 mb-5">
					<img className="img-fluid" src="know_idea.svg" width="100%"></img>
				</div>

				<div className="col-12">
					<h3 className="text-center">Start Your Meeting</h3>
					<p className="lead">Welcome to Know Idea, the meeting assistance app which allows <em>no idea</em> to be left behind.</p>
					<p className="lead">Please sign in your meeting participants below. Thank you.</p>
					<hr />
				</div>
				{/* form */}
				<div className="col-10 offset-1 col-xs-10 offset-xs-1 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-lg-12 offset-lg-0 mt-3 mb-5">
					<form onSubmit={this.addNewPerson}>
						<div className="input-group">
							<input
								type="text"
								id="personName"
								name="personName"
								className="form-control"
								onChange={this.updateNameHandler}
								value={this.state.value}
							/>
							<div className="input-group-append">
								<button className="btn gsap-btn" type="submit">Add Person</button>
							</div>
						</div>
					</form>
				</div>

			</div>


			<TransitionGroup className="row">
				{this.state.cards.map((card, index) =>
					<TransitionCard
						key={card.id}
						index={index}
						card={card}
						remove={this.removePerson}
					/>
				)}
			</TransitionGroup>


			<div className="row">
				<div className="col-12 mt-3 mb-3">
					<div className="card-body">
						<h4 className="card-title text-center">
							<Link className="btn submit-btn btn-lg" to="/meeting"> Start Meeting <span className="badge badge-light">{this.state.cards.length}</span></Link>
						</h4>
					</div>
				</div>
			</div>



		</div>;
	}

}

export default TransitionList;
