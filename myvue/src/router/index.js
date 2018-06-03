import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      icon:'iconfont icon-shouye',
      show:true,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard', name: '首页', component: resolve => require(['@/components/Dashboard'],resolve)
        }
      ]
    },
    {
      path: '/conp',
      name: '组件',
      component: Home,
      icon:'iconfont icon-liebiao',
      children: [
        {
          path: 'icon',
          name: '图标',
          component: resolve => require(['@/components/Icon'],resolve)
        },
        {
          path: 'tabs',
          name: 'Tabs 切换',
          component: resolve => require(['@/components/Tabs'],resolve)
        },
        {
          path:'upload',
          name:'上传图片',
          component:resolve => require(['@/components/Upload'],resolve)
        },
        {
          path:'test',
          name:'测试',
          component:resolve => require(['@/components/Test'],resolve)
        }
      ]
    },
    {
      path:'/setting',
      name:'设置',
      component:Home,
      icon:'iconfont icon-shezhi',
      children:[
        {
          path: 'info',
          name: '修改密码',
          component: resolve => require(['@/components/Setting'],resolve)
        }
      ]
    }
  ]
})
