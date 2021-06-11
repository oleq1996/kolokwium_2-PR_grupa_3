import React, {Component} from "react";

class OKhome extends Component {

        state = {
            value: 0
        };

    makeProgress = () => {
        this.setState({
            value: 100});
    };

    render() {
        return (
            <div className="container">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: 100% + "em"}} aria-valuenow={this.state.value} aria-valuemin="0"
    aria-valuemax="100"/>
                </div>
                <button onClick={this.makeProgress}>Make progress!</button>
            </div>
            )
    }
}

export default OKhome;