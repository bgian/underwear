import LandingPage from '../../views/base/Landing'
import LoginPage from '../../views/auth/Login'
import RegisterPage from '../../views/auth/Register'
import HomePage from '../../views/user/Home'

const components = {
	LandingPage,
	LoginPage, 
	RegisterPage,
	HomePage
}

const routes = require('../../../routes/web')
const frontRoutes = []

for(let i = 0; i < routes.length; i++) {
	frontRoutes.push({
		name: routes[i].name,
		path:  routes[i].path,
		component: components[routes[i].component]
	})
}

const router = new VueRouter({
    mode: 'history',
    routes: frontRoutes
});

export default router;