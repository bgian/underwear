<template>
	<div class="container push">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<form @submit.prevent="login">
	  				<div class="form-group">
	    				<label for="exampleInputEmail1">Email address</label>
	    				<input v-model="auth.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
	  				</div>
	  				<div class="form-group">
	    				<label for="exampleInputPassword1">Password</label>
	    				<input v-model="auth.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	  				</div>
	  				<button type="submit" class="btn btn-default">Login</button>
				</form>
			</div>
		</div>
	</div>
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
					this.cookies.setItem('token', response.token, false, '/')
					Events.$emit('authorizeUser')
					this.$router.push({path: '/home'})
				}).catch(errors => {
					console.log(errors)
				})
			}

		}

	}
</script>