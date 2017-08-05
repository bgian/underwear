<template>
	<div id="landing" class="level full center">
		<div class="container text-center">
			<div class="logo-circle">
				<logo-icon width="64px" height="64px"></logo-icon>
			</div>

			<h1>Welcome to localhost land</h1>
			<p>We thought you might have a few questions, keep these two resources in your pocket.</p>
			<p>
				<a class="btn btn-primary btn-lg" href="#" role="button">Documentation</a>
				<a class="btn btn-default btn-lg" href="#" role="button">Video tutorials</a>
			</p>
		</div>
	</div>
</template>

<script>
	import LogoIcon from '../../assets/js/icons/Logo'

	export default {

		components: {
			LogoIcon
		},

		mounted() {
			console.log('landing page loaded')
		}
	}
</script>
