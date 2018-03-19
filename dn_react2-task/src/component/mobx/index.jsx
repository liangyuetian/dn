import { observable, autorun } from "mobx";

export default new class MobxData {
    @observable lists = [
        {
            "id": 1,
            "name": "Footbal",
            "stock": 22,
            "price": 49.99,
            "monetaryUnit": "$"
        },
        {
            "id": 2,
            "name": "Baseball",
            "stock": 2,
            "price": 9.99,
            "monetaryUnit": "$"
        },
        {
            "id": 3,
            "name": "Basketball",
            "stock": 0,
            "price": 29.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPod Touch",
            "stock": 50,
            "price": 99.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPhone5",
            "stock": 0,
            "price": 399.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "Nexus",
            "stock": 90,
            "price": 199.99,
            "monetaryUnit": "$"
        }
    ];
    @observable listsBak = [
        {
            "id": 1,
            "name": "Footbal",
            "stock": 22,
            "price": 49.99,
            "monetaryUnit": "$"
        },
        {
            "id": 2,
            "name": "Baseball",
            "stock": 2,
            "price": 9.99,
            "monetaryUnit": "$"
        },
        {
            "id": 3,
            "name": "Basketball",
            "stock": 0,
            "price": 29.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPod Touch",
            "stock": 50,
            "price": 99.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPhone5",
            "stock": 0,
            "price": 399.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "Nexus",
            "stock": 90,
            "price": 199.99,
            "monetaryUnit": "$"
        }
    ];
    @observable listsBak2 = [
        {
            "id": 1,
            "name": "Footbal",
            "stock": 22,
            "price": 49.99,
            "monetaryUnit": "$"
        },
        {
            "id": 2,
            "name": "Baseball",
            "stock": 2,
            "price": 9.99,
            "monetaryUnit": "$"
        },
        {
            "id": 3,
            "name": "Basketball",
            "stock": 0,
            "price": 29.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPod Touch",
            "stock": 50,
            "price": 99.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "iPhone5",
            "stock": 0,
            "price": 399.99,
            "monetaryUnit": "$"
        },
        {
            "id": 4,
            "name": "Nexus",
            "stock": 90,
            "price": 199.99,
            "monetaryUnit": "$"
        }
    ];
    @observable onlyCheckout = true;
    @observable searchValue = "";

    constructor() {
        // autorun(() => {
        //     _this.lists = _this.listsBak.filter((list, index) => {
        //         return list.name.indexOf(_this.searchValue) > -1
        //     });
        // });
        let _this = this;
        autorun(() => {
            if (!_this.searchValue && _this.onlyCheckout) {
                _this.lists = _this.listsBak.filter((list, index) => {
                    return list.stock
                });
            }
            else if (!_this.onlyCheckout && !_this.searchValue) {
                _this.lists = _this.listsBak;

            }
            else {
                _this.lists = _this.listsBak.filter((list, index) => {
                    return list.stock && list.name.indexOf(_this.searchValue) > -1
                });
            }
        });
    }
}