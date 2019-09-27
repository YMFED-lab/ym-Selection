import Vue from 'vue'
import Router from 'vue-router'
// const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../views', true, /\.vue$/)
let data = req.keys().map(req)
let childrenRouter = []
let routerIndex = {
  path: '/',
  name: '/',
  component: (resolve) => {
    require(['../views/UI/index.vue'], resolve)
  }
}
childrenRouter.push(routerIndex)
for (let i in data) {
  let child = {}
  child.path = '/' + data[i].default.name
  child.name = data[i].default.name
  child.component = data[i].default
  childrenRouter.push(child)
}

// console.log(childrenRouter)
Vue.use(Router)

const router = new Router({
  routes: childrenRouter
})

export default router
