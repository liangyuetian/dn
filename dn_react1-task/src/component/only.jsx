import React, { Component } from "react";

export default class Only extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: false
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let val = e.target.checked;
        this.setState({
            checkout: val
        });
        this.props.onChange && this.props.onChange(val);
    }
    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={this.state.checkout}
                    onChange={this.onChange} />
                <span>
                    Only show prouducts in stock
                </span>
            </div>
        )
    }
}