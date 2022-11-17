<template>
    <div>

        <table class="table w-50" v-if="product.id!=undefined">
        <tbody>
            <tr>
            <th class="table-secondary">id</th>
            <td>{{product.id}}</td>            
            </tr>

            <tr>
            <th class="table-secondary">name</th>
            <td>{{product.name}}</td>            
            </tr>

            <tr>
            <th class="table-secondary">category_name</th>
            <td>{{product.category_name}}</td>            
            </tr>

            <tr>
            <th class="table-secondary">brand_name</th>
            <td>{{product.brand_name}}</td>            
            </tr>

            <tr>
            <th class="table-secondary">price</th>
            <td>{{product.price}}</td>            
            </tr>
            

            <tr>
            <th class="table-secondary">rrp_price</th>
            <td>{{product.rrp_price}}</td>            
            </tr>

             <tr>
            <th class="table-secondary">Отображаемая цена</th>
            <td class="table-info">
                <span v-if="product.status==2">
                    цена по запросу
                </span>
                <span v-else>
                    <span v-if="product.brand_name=='Lenovo' || product.brand_name=='Dell'">{{product.rrp_price}}</span>
                    <span v-else>{{product.price}}</span>
                </span>            
            </td>            
            </tr>
            <tr>
            <th class="table-secondary">status</th>
            <td>{{product.status}}</td>            
            </tr>           
            
        </tbody>
        </table>
        
        

    </div>
</template>


<script>
import ProductModel from "../productmodel";

export default {
    data() {
        return {
            product: {} ,
            props: { loadstat: String },                  
        }
    },
    methods: {
        
        loadProduct() {            
            ProductModel.getByID(this.$route.params.id)
                .then(response => response.json())
                .then(data => this.product = data)
        }
    },
    mounted(){
        this.loadProduct() 
    },    
}
</script>

<style>

</style>