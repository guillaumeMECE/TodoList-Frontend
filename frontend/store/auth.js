/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import { sync } from 'vuex-router-sync';
import store from './vuex/store'; // vuex store instance
import router from './router'; // vue-router instance

const unsync = sync(store, router); // done. Returns an unsync callback fn

export const strict = false;

/**
 * Mutation declaration
 */
const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';

/**
 * Store attributes
 */
export const state = () => ({
    isConnected: false,
});

/**
 * Actions (server calls & mutations)
 */
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        console.log('nuxtServerInit');
        // if auth token used by external API, fetch here e.g. req.session.authToken
        // then it can be accessed with store on all API calls
        if (req.session && req.session.authUser) {
            commit(SET_CONNECTION_STATE, true);
        } else {
            commit(SET_CONNECTION_STATE, false);
        }
    },

    async REGISTER_USER({ state, commit, getters }, body) {
        try {
            const token = await this.$axios.$post('/api/register', body);
            // console.log('isConnected', findisConnected());
            // if (token) {
            commit(SET_CONNECTION_STATE, true);
            // }
            console.log('token', token);
            console.log('isConnected', state.isConnected);
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    },
};

/**
 * Modify State
 */
export const mutations = {
    [SET_CONNECTION_STATE](state, payload) {
        console.log('WORK MUTATION');
        
        state.isConnected = payload;
        console.log('state.isConnected', state.isConnected);
    },
};

/**
 * Get state value from other .vue
 */
export const getters = {
    getIsConnected: (state) => state.isConnected,
};

unsync(); // Unsyncs store from router
