class ProductModel {

    getAll() {
        return fetch('https://apl-test/api/products')
    }

    getByID(product_id){
        return fetch('https://apl-test/api/product/' + product_id)
    }

    maxminBrand(product_brand){        
        return fetch('https://apl-test/api/product/brand/' + product_brand)
    }

    getEmpty(){
        return  {
            id: null,
            name: "",
            category_name: "",
            brand_name: "",
            price: "",
            rrp_price: "",
            status: "",
        };
    }

    create(data){
        return fetch('https://apl-test/api/product/create', {method: "POST", body: data});
    }

    update(id, data){
        return fetch('https://apl-test/api/product/update/' + id, {method: "POST", body: data});
    }
  
}

export default new ProductModel();