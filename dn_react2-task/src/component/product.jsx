import React, { Component } from "react";
import { observer } from 'mobx-react';
import Ajax from "./ajax";
import Search from "./search";
import Only from "./only";
import Lists from "./list";
import MobxData from "./mobx";
@observer
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listsBak: [],
        };
    }
    componentDidMount() {
        console.log(Ajax)
        let _this = this;
        Ajax.get("../mock-data/list.json").then((listsData) => {
            _this.setState({
                lists: listsData,
                listsBak: listsData
            });
        }, (err) => {
            alert("请求出错");
        });
    }
    render() {
        let st = this.state;
        return (
            <div>
                <Search />
                <Only />
                <Lists />
            </div>
        )
    }
}