<template>
  <div class="app">
        <div class="nav-container">
          <ul class="nav__left">
            <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
            <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
          </ul> 
          <router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart</router-link>
        </div>
    <router-view/>
  </div>
</template>

<script>
import toastr from 'toastr'

import {
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutationTypes';

export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created () {
    // Subscriptions for mutation
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount () {
      // Cart count
      return this.cartItems.length
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
}
</script>

<style>
.app {
  width: 100%;
}

.nav-container {
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  background: #000;
}

.nav-container a {
  color: #fff;
}

.nav__left{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav__left li {
  margin-right: 20px;
}
</style>
