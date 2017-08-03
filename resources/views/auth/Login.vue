<template>
	<form @submit.prevent="login">
		<input v-model="auth.email" id="email" type="email" placeholder="Your email" />
		<input v-model="auth.password" id="password" type="password" placeholder="Your password"/>
		<input type="submit" />
	</form>
</template>

<script>
	import auth from '../../assets/js/api/auth'

	export default {

		data() {
			return {
				auth: {}
			}
		},

		methods: {

			login() {
				auth.login(this.auth).then(response => {
					console.log(response)
				}).catch(errors => {
					console.log(errors)
				})
			}

		}

	}
</script>