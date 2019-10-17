import React from "react";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";

const TransitionSubmit = props => {
	const { in: show, remove, card } = props;
	return <Transition
		timeout={1000}
		mountOnEnter
    unmountOnExit
    appear
		in={show}
		addEndListener={(node, done) => {
			TweenMax.to(node, 0.35, {
				y: 0,
				autoAlpha: show ? 1 : 0,
				onComplete: done,
				delay: !show ? 0 : card.init ? props.index * 0.15 : 0
			});
		}}
	>
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 card-container">
				<div className="card transition-card">
					<div className="card-body">
						<h4 className="card-title text-center">
							<button type="button" className="btn btn-primary btn-lg">
								Start Meeting <span className="badge badge-light">{state.cards.length}</span>
							</button>
						</h4>
					</div>
				</div>
			</div>
	</Transition>;
};

export default TransitionSubmit;