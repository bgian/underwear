<template>
	<form @submit.prevent="register">
		<input v-model="auth.name" id="name" type="text" placeholder="Your name" />
		<input v-model="auth.email" id="email" type="email" placeholder="Your email" />
		<input v-model="auth.password" id="password" type="password" placeholder="Your password"/>
		<input type="submit" value="regitser" />
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

			register() {
				auth.register(this.auth).then(response => {
					console.log(response)
				}).catch(errors => {
					console.log(errors)
				})
			}

		}

	}
</script>