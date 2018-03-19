import React, { Component } from "react";
import { observer } from "mobx-react";
import MobxData from "./mobx";

@observer
export default class Only extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let val = e.target.checked;
        MobxData.onlyCheckout = val;
    }
    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={MobxData.onlyCheckout}
                    onChange={this.onChange} />
                <span>
                    Only show prouducts in stock
                </span>
            </div>
        )
    }
}