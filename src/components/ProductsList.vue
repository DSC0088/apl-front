<template>

    <div>

    <div class="spinner-border" role="status" v-if="loadstatus">
        <span class="sr-only">Loading...</span>
    </div>   

    <div class="alert alert-primary" role="alert" v-if="loadstatus==false && items.length==0">
        Нет данных    
    </div>   

    <table class="table table-striped" v-if="items.length>0">
    <thead class="">
        <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">category_name</th>
        <th scope="col">brand_name</th>
        <th scope="col">price</th>
        <th scope="col">rrp_price</th>
        <th scope="col">Отображаемая цена</th>
        <th scope="col">status</th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in items" v-bind:key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }} </td>
        <td>{{ item.category_name }} </td>
        <td>{{ item.brand_name }} </td>
        <td>{{ item.price }} </td>
        <td>{{ item.rrp_price }} </td>
        <td class="table-info">
            <span v-if="item.status==2">
                цена по запросу
            </span>
            <span v-else>
                <span v-if="item.brand_name=='Lenovo' || item.brand_name=='Dell'">{{item.rrp_price}}</span>
                <span v-else>{{item.price}}</span>
            </span>
        </td>
        <td>{{ item.status }} </td>
        <td>
            <router-link :to="{ path: '/product-view/'+ item.id}">View</router-link>
            <br>            
            <router-link :to="{ path: '/product-edit/'+ item.id}">Edit</router-link>            
        </td>
        </tr>        
    </tbody>
    </table>
    </div>

</template>

<script>
import ProductModel from "../productmodel";

export default {
    data(){
        return {            
            items: [],
            loadstatus: false
        }
    },
    methods: {
        getProducts(){
            var _this = this;
            this.loadstatus = true;

            ProductModel.getAll()
            .then(function(res) {
                _this.loadstatus = false;
                return res.json(); 
            }).then(
                data => this.items = data
            )        
        }
    },    
    mounted(){
        this.getProducts() 
    }
};
</script>