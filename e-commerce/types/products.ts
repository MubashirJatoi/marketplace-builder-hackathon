export interface Product {
    _id  : string;
    productName : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description : string;
    category : string;
    status : string;
    inventory : number;
    colors : string[];
    slug : {
        _type : "slug";
        current : string;
    };
}

