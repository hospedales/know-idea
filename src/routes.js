import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import TransitionList from "./transition-list.js";
// components
import { Home, Meeting, Contact } from "./components";



class Routes extends Component {

	render() {
		return <div className="container">
			<div className="row">
				<div className="col-12">
					<h3 className="text-center">&nbsp;</h3>
				</div>
			</div>

			<BrowserRouter basename="/five">
				<div className="row text-center">

					{/* MENU */}
					<nav className="col-12">
						<Link className="btn btn-lg gsap-btn mr-2" to="/">Home</Link>
						<Link className="btn btn-lg gsap-btn mr-2" to="/meeting">Meeting</Link>
					</nav>

					{/* CONTENT */}
					<div className="col-12">
						<Route path="/" exact>
							{({ match }) => <Home show={match !== null} />}
						</Route>

						<Route path="/meeting" render={(cards) => <Home cards={cards} />}>
							{({ match }) => <Meeting show={match !== null} />}
						</Route>

					</div>

				</div>
			</BrowserRouter>

		</div>;
	}

}

export default Routes;
