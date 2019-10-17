import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import TransitionCard from "./transition-card";
import Countdown from "./countdown-clock";
import TransitionList from "./transition-list";

class TransitionMeeting extends React.Component {

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

    componentDidMount() {

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
            </div>


            <Countdown />

        </div>;
    }

}

export default TransitionMeeting;
