<template>
  <div class="container col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <div class="product-container">
      <div tabindex="0" class="img-container">
          <img 
            class="product-img" 
            :src="product.image" 
            alt=""
          />
      </div>
      <router-link :to="'/details/'+product._id" class="product-link">
        <div class="product__description">
          <div class="product__info">
            <small>{{ manufacturer.name }}</small>
            <h4>{{ product.name + ' - ' + product.name.length }}</h4>
          </div>
          <div class="product__price-cart">
            ${{ product.price }}
          </div>
        </div>
      </router-link>
      <div class="product__action">
        <product-button :product="product" ></product-button>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'

  export default {
      name: 'product-item',
      props: ['product', 'manufacturer'],
      components: {
          'product-button': ProductButton
      },
  }
</script>

<style>
  .product-container {
    max-width: 400px;
    min-width: 300px;
    min-height: 450px;
    margin: 10px;
    border: 3px solid rgba(0,0,0, 0.2);
    border-radius: 10px;
    padding: 10px;
  }

  .product-container:hover {
    border-color: rgba(0,100,0,1);
  }

  .product-img {
    width: 100%;
    max-width: 300px;
  }

  .product-img:hover {
    cursor: zoom-in;
  }

  .img-container {
    padding-top: 10px;
    height: 60%;
    background: #fff
  }

  .img-container:focus{
    transform: scale(1.5);
    z-index: 1;
  }

  .img-container:focus img{
    cursor:not-allowed;
  }
</style>
