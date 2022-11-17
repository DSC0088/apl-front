<template>    
    <div>

        <h3 v-if="mode=='add'">Create Product</h3>
        <h3 v-if="mode=='edit'">Edit Product id={{id}}</h3>
        
        <form>
        <div class="form-group w-50">
            <label for="name">Brand Name</label>
            <input id="name" v-model="product.name" type="text" class="form-control">

            <label for="category_name">Cat Name</label>
            <input id="category_name" v-model="product.category_name" type="text" class="form-control">

            <label for="brand_name">Brand Name</label>
            <input id="brand_name" v-model="product.brand_name" type="text" class="form-control">

            <label for="price">Price</label>
            <input id="price" v-model="product.price" type="text" class="form-control">

            <label for="rrp_price">rrp_price</label>
            <input id="rrp_price" v-model="product.rrp_price" type="text" class="form-control">

            <label for="status">status</label>
            <input id="status" v-model="product.status" type="text" class="form-control">

        </div>        
        <button :disabled="0" type="button" class="btn btn-primary" @click="sbmt">Save Product</button>        
        </form>       
    
    </div>
</template>

<script>
import ProductModel from "../productmodel";

export default {
    data() {
        var mode;
        if (this.$route.path.includes('-add')) mode='add';
        if (this.$route.path.includes('-edit')) mode='edit';
        var id = mode=='edit' ?  this.$route.params.id: null;       

        return {            
            product: ProductModel.getEmpty(),
            mode: mode,
            id: id
        };
    },
    methods: {
        sbmt() {            
            var data = new FormData();
            data.append( "product_json", JSON.stringify( this.product ) ); 
            
            var _this = this;

            if (this.mode=='add') {
                ProductModel.create(data).then(function(res) {
                    return res.json(); 
                }).then(function(data){
                    console.log(data)
                    _this.$router.push('/product-edit/'+data.id) 
                })
            }
            
            if (this.mode=='edit') {
                ProductModel.update(this.id, data).then(function(res) {
                    return res.json(); 
                }).then(function(data){
                    console.log(data)                    
                })

            }
        }        
    },
    mounted(){
        if (this.mode=='edit') {
            ProductModel.getByID(this.$route.params.id)
                .then(response => response.json())
                .then(data => this.product = data)
        }
    }, 
};
</script>