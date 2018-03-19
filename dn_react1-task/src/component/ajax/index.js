class Ajax {
    constructor() {
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.watchXhr = this.watchXhr.bind(this);
        this.cancel = this.cancel.bind(this);
        this.sendXhr = this.sendXhr.bind(this);
        this.overtime = 200;
        this.xhr = new XMLHttpRequest();

    }
    get(url) {
        return this.sendXhr({
            method: "GET",
            url: url
        })
    }
    post(url, data = {}, option = {}) {
        // option = {
        //     headers: {}
        // };
        return this.sendXhr({
            method: "POST",
            url: url,
            data: data,
            option: option
        })
    }
    watchXhr(resolve, reject) {
        let _this = this;
        _this.xhr.onreadystatechange = (e) => {

            if (_this.xhr.readyState === 4 && _this.xhr.status === 200) {
                // let data = JSON.parse(_this.xhr.responseText);
                // resolve && resolve(data, _this.xhr);
                let listData = [
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
                    },
                ];
                resolve && resolve(listData, _this.xhr);
                window.clearTimeout(timer);
            }
        };
        let timer = window.setTimeout(() => {
            reject && reject(_this.xhr);
        }, _this.overtime);
    }
    sendXhr(option = { method: "GET" }) {
        let _this = this;
        return new Promise((resolve, reject) => {
            _this.xhr.open(option.method, option.url, true);
            if (option.method === "POST") {
                if (option.headers) {
                    for (let header in option.headers) {
                        _this.xhr.setRequestHeader(header, option.headers[header])
                    }
                }
            }
            _this.xhr.send(option.data);
            _this.watchXhr(resolve, reject);
        })
    }
    cancel() {
        this.xhr.abort();
    }
}
export default new Ajax