import React, { Component } from "react";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let val = e.target.value;
        this.setState({
            value: val
        });
        this.props.onChange && this.props.onChange(val);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..."
                    value={this.state.value}
                    onChange={this.onChange} />
            </div>
        )
    }
}