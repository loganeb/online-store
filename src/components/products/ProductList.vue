<template>
    <div>
        <div class="products container">
        <div class="row">
            <template v-for="product in products">
                <product-item :product="product" :manufacturer="getManufacturer(product.manufacturer)" :key="product._id" ></product-item>
            </template>
        </div>
        </div>
  </div>
</template>

<script>
    import ProductItem from './ProductItem.vue';

    export default {
        name: 'product-list',
        created() {
            if (this.products.length === 0) {
                this.$store.dispatch('allProducts');
                this.$store.dispatch('allManufacturers');
            }
        },
        computed: {
            products () {
                return this.$store.getters.allProducts;
            },
            manufacturers () {
                return this.$store.getters.allManufacturers;
            }
        },
        methods: {
            getManufacturer(id){
                return this.manufacturers.find( m => m._id === id);
            }
        },
        components: {
            'product-item': ProductItem,
        }
    }
</script>

