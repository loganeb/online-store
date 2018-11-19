export const productGetters = {
    allProducts: (state, getters) => {
        return state.products;
    },

    productById: (state, getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter( product => product._id === id)[0];
        } else {
            return state.product;
        }
    },
};

export const manufacturerGetters = {
    allManufacturers: state => state.manufacturers,
};
