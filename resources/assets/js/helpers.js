import Cookies from './cookies'

export default {
    data() {
        return {
            cookies: new Cookies()
        }
    },

    computed: {
        user() {
            return this.$store.state.user;
        }
    },

	methods: {

        /**
         * Get the users first name
         * 
         * @param  {string} name the full name of the user
         * @return {boolean|string} false or the first name of the user
         */
        firstName(name) {
            if(name) {
                const nameArray = name.split(' ');
                return nameArray[0];
            }
            return false;
        },

        /**
         * Function to make initials out of the name
         * 
         * @param  {string} name
         * @return {string}
         */
        initials(name) {
            if(name) {
                const split = name.split(' ');
                const fName = split[0];
                const lName = split[split.length - 1];
                return (fName[0] + lName[0]).toUpperCase();
            }
        },

        logout() {
            this.cookies.removeItem('token', '/');
            window.location.href= "/";
        }

	}
}