module.exports = [
	{
		name: null,
		path: '/home',
		component: 'user/Home',
        auth: true
	},
    {
        name: 'landing',
        path: '/',
        component: 'base/Landing'
    },
    {
        name: 'login',
        path: '/login',
        component: 'auth/Login',
        guest: true
    },
    {
        name: 'register',
        path: '/register',
        component: 'auth/Register',
        guest: true
    }
]