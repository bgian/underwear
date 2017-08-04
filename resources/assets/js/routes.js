import LandingPage from '../../views/base/Landing'
import HomePage from '../../views/user/Home'
import LoginPage from '../../views/auth/Login'
import RegisterPage from '../../views/auth/Register'
import Cookies from './cookies'
import user from './api/user'

const components = {
    HomePage,
	LandingPage,
	LoginPage, 
	RegisterPage
}

const routes = require('../../../routes/web')
const cookies = new Cookies()
const frontRoutes = []

for(let i = 0; i < routes.length; i++) {
	frontRoutes.push({
		name: routes[i].name,
		path:  routes[i].path,
		component: components[routes[i].component],
		meta: {
			requiresAuth: routes[i].auth ? true : false,
			requiresGuest: routes[i].guest ? true : false
		}
	})
}

const router = new VueRouter({
    mode: 'history',
    routes: frontRoutes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth) {
    	if(cookies.hasItem('token')) {
	        user.get().then(response => {
	        	next()
	        }).catch(errors => {
	        	next({path: '/login'})
	        })
	    }else{
	    	next({path: '/login'})
	    }
    }

    if(to.meta.requiresGuest) {
        if(!cookies.hasItem('token')) {
	        next()
	    }else{
	    	next({path: '/home'})
	    }
    }

    //run next if all else passes
    next()
})

export default router;