import React from "react";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";

const TransitionCard = props => {
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
		<div className="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4 offset-md-0 col-lg-3 offset-lg-0 mb-3 card-container">
			<div className="card transition-card">
				<div className="card-body">
					<h4 className="card-title text-center">
						{card.name}
						<button
							type="button" className="close"
							onClick={remove.bind(null, card.id)}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</h4>
				</div>
			</div>
		</div>
	</Transition>;
};

export default TransitionCard;