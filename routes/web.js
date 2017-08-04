module.exports = [
	{
		name: null,
		path: '/home',
		component: 'HomePage',
        auth: true
	},
    {
        name: 'landing',
        path: '/',
        component: 'LandingPage'
    },
    {
        name: 'login',
        path: '/login',
        component: 'LoginPage',
        guest: true
    },
    {
        name: 'register',
        path: '/register',
        component: 'RegisterPage',
        guest: true
    }
]