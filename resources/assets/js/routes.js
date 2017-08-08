import Cookies from './cookies'
import user from './api/user'

const routes = require('../../../routes/web')
const cookies = new Cookies()
const frontRoutes = []

routes.forEach(route => {
	frontRoutes.push({
		name: route.name,
		path:  route.path,
		component: require(`../../views/${route.component}`).default,
		meta: {
			requiresAuth: route.auth ? true : false,
			requiresGuest: route.guest ? true : false
		}
	})
})

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
	    	user.get().then(response => {
	        	next({name: 'homepage'})
	        }).catch(errors => {
	        	next()
	        })
	    }
    }

    //run next if all else passes
    next()
})

export default router;