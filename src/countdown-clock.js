import React, { Component } from "react";
import "./countdown.css";

class Countdown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });

        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
            }
        }, 10);
    };

    stopCDWN = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };

    resetCDWN = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };

    adjustCDWN = input => {
        const { timerTime, timerOn } = this.state;
        if (!timerOn) {
            if (input === "incHours" && timerTime + 3600000 < 216000000) {
                this.setState({ timerTime: timerTime + 3600000 });
            } else if (input === "decHours" && timerTime - 3600000 >= 0) {
                this.setState({ timerTime: timerTime - 3600000 });
            } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
                this.setState({ timerTime: timerTime + 60000 });
            } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                this.setState({ timerTime: timerTime - 60000 });
            } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
                this.setState({ timerTime: timerTime + 1000 });
            } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
                this.setState({ timerTime: timerTime - 1000 });
            }
        }
    };

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

        return (
            <div className="row">
                <div className="Countdown col-8">
                    <div className="Countdown-header">Speaking Time</div>
                    <div className="Countdown-label">Hours : Minutes : Seconds</div>
                    <div className="Countdown-display">
                        <button onClick={() => this.adjustCDWN("incHours")}><img className="up-arrow" src="up_arrow.svg"/></button>
                        <button onClick={() => this.adjustCDWN("incMinutes")}>
                        <img className="up-arrow" src="up_arrow.svg"/>
          </button>
                        <button onClick={() => this.adjustCDWN("incSeconds")}>
                        <img className="up-arrow" src="up_arrow.svg"/>
          </button>

                        <div className="Countdown-time">
                            {hours} : {minutes} : {seconds}
                        </div>

                        <button onClick={() => this.adjustCDWN("decHours")}><img className="dwn-arrow" src="dwn_arrow.svg"/></button>
                        <button onClick={() => this.adjustCDWN("decMinutes")}>
                            <img className="dwn-arrow" src="dwn_arrow.svg"/>
          </button>
                        <button onClick={() => this.adjustCDWN("decSeconds")}>
                            <img className="dwn-arrow" src="dwn_arrow.svg"/>
          </button>
                    </div>

                    {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                        <button className="Button-start" onClick={this.startTimer}>
                            Start
          </button>
                    )}
                    {timerOn === true && timerTime >= 1000 && (
                        <button className="Button-stop" onClick={this.stopCDWN}>
                            Stop
          </button>
                    )}
                    {timerOn === false &&
                        (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                            <button className="Button-start" onClick={this.startTimer}>
                                Resume
            </button>
                        )}

                    {(timerOn === false || timerTime < 1000) &&
                        (timerStart !== timerTime && timerStart > 0) && (
                            <button className="Button-reset" onClick={this.resetCDWN}>
                                Reset
            </button>
                        )}
                </div>
            </div>
        );
    }
}

export default Countdown;