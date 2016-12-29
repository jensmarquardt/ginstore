// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Gins from './components/Gins'
import About from './components/About'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Gins },
		{ path: '/about', component: About }
	]
});

/* eslint-disable no-new */
new Vue({
	router,
	template: `
		<div id="app">
			<router-link class="mdl-navigation__link" to="/">Home</router-link>
			<router-link class="mdl-navigation__link" to="/about">About</router-link>
			<router-view></router-view>
		</div>
	`
}).$mount('#app')