<template>
	<nav class="navbar navbar-underwear">
		<div class="container">
		    <div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link class="navbar-brand" :to="{path: '/'}">
					<logo-icon></logo-icon>
				</router-link>
		    </div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="http://GitHub.com/JosephSmith127/underwear">GitHub</a></li>
				</ul>

				<ul class="nav navbar-nav navbar-right" v-if="!user">
					<li><router-link :to="{path: '/login'}">Login</router-link></li>
					<li><router-link :to="{path: '/register'}">Register</router-link></li>
				</ul>

				<ul class="nav navbar-nav navbar-right" v-if="user">
					<li><a href="#" @click.prevent="logout">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>

	import LogoIcon from '../icons/Logo'

	export default {

		components: {
			LogoIcon
		},

		computed: {
			user() {
				return this.$store.state.user
			}
		}


	}


</script>