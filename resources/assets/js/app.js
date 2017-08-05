// Import settings
import './bootstrap';
import './events';
import helpers from './helpers'
import store from './store'
import router from './routes'
import user from './api/user'
import {setUser} from './store/actions'

Vue.mixin(helpers)

// Import components
import UnderwearHeader from './components/Header'

// Setup the app
const front = new Vue({
    el: '#app',
    router,
    store,

    //Register global components
    components: {
    	UnderwearHeader
    },

    computed: {
        user() {
            return this.$store.state.user;
        }
    },

    mounted() {
        if(!this.isAuthed && this.cookies.hasItem('token')) {
            this.authorizeUser()
        }

        Events.$on('authorizeUser', this.authorizeUser)
    },

    methods: {
        authorizeUser() {
            user.get().then(response => {
                setUser(this.$store, response.user)
            }).catch(errors => {
                setUser(this.$store, false)
            })
        }
    }
});
