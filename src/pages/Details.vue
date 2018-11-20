<template>

    <div>
        <product-details :product='product' :isAdding="true"></product-details>
    </div>

</template>

<script>
    import ProductDetails from '../components/products/ProductDetails';

    export default {
        created(){
            if(!this.product.name) {
                this.$store.dispatch('productById', this.$route.params['id']);
            }
        },
        components: {
            'product-details': ProductDetails,
        },
        data() {
            return{
                product: this.$store.getters.productById(this.$route.params['id']),
            }
        }
    }
</script>