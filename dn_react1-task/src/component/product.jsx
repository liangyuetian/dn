import React, { Component } from "react";
import Ajax from "./ajax";
import Search from "./search";
import Only from "./only";
import Lists from "./list";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listsBak: [],
            onlyStock: false,
        };

        this.search = this.search.bind(this);
        this.watchOnlyCheckout = this.watchOnlyCheckout.bind(this);
        this.screen = this.screen.bind(this);
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
    watchOnlyCheckout(val) {
        this.state.onlyStock = val;
        this.screen();
    }
    search(val) {
        this.state.search = val;
        this.screen();
    }
    screen() {
        let listsFilter;
        if (this.state.onlyStock && !this.state.search) { // 如果被勾选
            listsFilter = this.state.listsBak.filter((list, index) => {
                return list.stock
            });
        }
        else if (this.state.onlyStock) {
            listsFilter = this.state.listsBak.filter((list, index) => {
                return list.name.indexOf(this.state.search) > -1 && list.stock
            });
        }
        else if (!this.state.onlyStock) { // 如果没有被勾选
            listsFilter = this.state.listsBak.filter((list, index) => {
                return list.name.indexOf(this.state.search) > -1
            });
        }
        this.setState({
            lists: listsFilter
        });
    }
    render() {
        let st = this.state;
        return (
            <div>
                <Search onChange={this.search} />
                <Only onChange={this.watchOnlyCheckout} />
                <Lists lists={st.lists} />
            </div>
        )
    }
}