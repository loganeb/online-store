import axios from 'axios';

const API_BASE = 'http://localhost:3000/api';

import {
    ALL_PRODUCTS,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    ALL_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
} from './mutationTypes';

export const productActions = {
    allProducts ({ commit }){
        commit(ALL_PRODUCTS)

        axios.get(`${API_BASE}/products`).then(response => {
            commit(ALL_PRODUCTS_SUCCESS, response.data);
            console.log(response.data);
        });
    },
    productById ({commit}, payload) {
        commit(PRODUCT_BY_ID)
        // Fetch product by ID from API
        axios.get(`${API_BASE}/products/${payload}`).then(response => {
          commit(PRODUCT_BY_ID_SUCCESS, response.data)
        })
      },
    addProduct ({commit}, payload) {
        commit(ADD_PRODUCT)
        // Create a new product via API
        axios.post(`${API_BASE}/products`, payload).then(response => {
          commit(ADD_PRODUCT_SUCCESS, response.data)
        })
    },
    updateProduct ({commit}, payload) {
        commit(UPDATE_PRODUCT)
        // Update product via API
        axios.put(`${API_BASE}/products/${payload._id}`, payload).then(response => {
          commit(UPDATE_PRODUCT_SUCCESS, response.data)
        })
    },
    removeProduct ({commit}, payload) {
        commit(REMOVE_PRODUCT)
        // Delete product via API
        axios.delete(`${API_BASE}/products/${payload}`, payload).then(response => {
            console.debug('response', response.data)
            commit(REMOVE_PRODUCT_SUCCESS, response.data)
        })
    }

};

export const manufacturerActions = {
    allManufacturers ({commit}) {
      commit(ALL_MANUFACTURERS)
      // Fetch all manufacturers from API
      axios.get(`${API_BASE}/manufacturers`).then(response => {
        commit(ALL_MANUFACTURERS_SUCCESS, response.data)
      })
    }
};