<template>
    <div>
        <h4>Product By Brand</h4>       

        
            <form>
            <div class="form-group w-25">
                <label for="inp1">Brand Name</label>
                <input v-model="product_brand" id="inp1"  type="text" class="form-control">
            </div>        
            <button type="button" class="btn btn-primary" @click="SearchProduct">Search Product</button>        
            </form>

            <br>       



        <div class="card mb-3" v-if="items.max.id!=undefined">
        <div class="row no-gutters">            
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">С максимальной ценой</h5>
                <p class="card-text">{{items.max.name}}</p>
                <p class="card-text">price: {{items.max.price}}</p>
                <p class="card-text"><small class="text-muted">id: {{items.max.id}}</small></p>
            </div>
            </div>
        </div>
        </div>


        <div class="card mb-3" v-if="items.min.id!=undefined">
        <div class="row no-gutters">            
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">С минимальной ценой</h5>
                <p class="card-text">{{items.min.name}}</p>
                <p class="card-text">price: {{items.min.price}}</p>
                <p class="card-text"><small class="text-muted">id: {{items.min.id}}</small></p>
            </div>
            </div>
        </div>
        </div> 
        
        
    </div>
</template>


<script>
import ProductModel from "../productmodel";
export default {
    data() {
        return {            
            product_brand: '',    
            items: {'max':{}, 'min':{}}
        }
    },
    methods: {
        SearchProduct() { 
                ProductModel.maxminBrand(this.product_brand)
                .then(response => response.json())
                .then(data => this.items = data)
        }
    }
}
</script>

<style>

</style>