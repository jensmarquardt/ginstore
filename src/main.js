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
			<nav class="navbar navbar-inverse navbar-static-top">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<router-link class="navbar-brand" to="/">Ginstore</router-link>
					</div>
					<div id="navbar" class="collapse navbar-collapse">
						<ul class="nav navbar-nav">
							<li>
								<router-link to="/">Home</router-link>
							</li>
							<li>
								<router-link to="/about">About</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<router-view></router-view>
		</div>
	`
}).$mount('#app')