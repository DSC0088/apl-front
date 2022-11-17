<template>
  <div id="app">

    <nav class="navbar navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Home</router-link>          
      <router-link to="/products" class="navbar-brand">Product List</router-link>         
      <router-link to="/product-add" class="navbar-brand">Create Product</router-link>    
      <router-link to="/product-by-brand" class="navbar-brand">Product By Brand</router-link>
    </nav>
    <br>

    <div class="container">

      <router-view />     
    </div>   
    
  </div>
</template>

<script>
export default {
  name: 'App', 

  data(){
    return {
      loadstat : 'sad'
    }
  } 

}
</script>


<style>

</style>