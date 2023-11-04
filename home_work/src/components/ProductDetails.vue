<template>
    <div>
        <h2>Products: </h2>
        <div v-for="product in products" :key="product.id">
            <h4>{{ product.name }}</h4>
            <p>{{ formattedPrice(product) }}</p>
            <p>{{ availabilityStatus(product) }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeWorkProductDetails',

    data() {
        return {
            products: [
                {
                    id: 0,
                    name: 'product1',
                    price: 56,
                    available: true
                },
                {
                    id: 1,
                    name: 'product2',
                    price: 34,
                    available: true
                },
                {
                    id: 2,
                    name: 'product3',
                    price: 108,
                    available: false
                },
                {
                    id: 3,
                    name: 'product4',
                    price: 12,
                    available: true
                },
            ]
        };
    },

    mounted() {

    },

    methods: {

    },
    computed: {
        formattedPrice() {
            return function (product) {
                return `$${product.price.toFixed(2)}`;
            }
        },
        availabilityStatus() {
            return function (product) {
                return product.available ? 'Available' : 'Out of stock';
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>