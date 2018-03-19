import React, { Component } from "react";

export default class List extends Component {
    constructor(props) {
        super(props);

    }
    componentWillReceiveProps(nextProps) {
        return true
    }
    render() {
        let lists = this.props.lists;
        return (
            <ul>
                {
                    (lists && lists.length > 0) && lists.map((list, index) => {
                        return (
                            <li key={`${list.name}${index}`}>
                                <span style={{ color: list.stock ? null : "red" }}>
                                    {list.name}
                                </span>
                                <span>
                                    <span>{list.monetaryUnit + list.price}</span>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}