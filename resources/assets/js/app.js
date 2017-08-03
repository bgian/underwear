// Import settings
import './bootstrap';
import './events';
import helpers from './helpers'
import store from './store'
import router from './routes'

Vue.mixin(helpers)

// Import components


// Setup the app
const front = new Vue({
    el: '#app',
    router,
    store,

    //Register global components
    components: {
    	
    },

    computed: {
        user() {
            return this.$store.state.user;
        }
    }
});
