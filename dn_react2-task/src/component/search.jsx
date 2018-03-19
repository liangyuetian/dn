import React, { Component } from "react";
import { observer } from "mobx-react";
import MobxData from "./mobx";

@observer
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let val = e.target.value;
        MobxData.searchValue = val;
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..."
                    value={MobxData.searchValue}
                    onChange={this.onChange} />
            </div>
        )
    }
}