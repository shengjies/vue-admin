<template>
  <el-row class="main">
    <el-col class="main-content">
      <aside class="content-menu" :class="{'content-menu-collapse':isCollapse}">
        <el-menu :default-active="$route.path"
                 :collapse="isCollapse"
                 :unique-opened="true"
                 background-color="#304156"
                 text-color="#bfcbd9"
                 active-text-color="#409EFF"
        >
          <template v-for="item in $router.options.routes">
            <el-submenu v-if="!item.show" :index="item.path">
              <template slot="title">
                <i :class="item.icon"></i>&nbsp;<span slot="title">{{item.name}}</span>
              </template>
              <template v-for="child in item.children">
                <router-link :to="item.path+'/'+child.path">
                  <el-menu-item :index="item.path+'/'+child.path">
                    <span slot="title">{{child.name}}</span>
                  </el-menu-item>
                </router-link>
              </template>
            </el-submenu>
            <template v-else-if="item.show && item.children && item.children.length">
              <router-link :to="item.path+item.children[0].path">
                <el-menu-item :index="item.path+item.children[0].path">
                  <i :class="item.icon"></i>&nbsp;<span slot="title">{{item.children[0].name}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </template>
        </el-menu>
      </aside>
      <section class="content-view" :class="{'content-view-collapse':isCollapse}">
        <header class="content-view-header">
          <div class="collapse-icon" :class="{'collapse-icon-trans':isCollapse}" @click="collapse">
            <i class="iconfont icon-menu-unfold"></i>
          </div>
          <div class="content-view-user">
            <i class="iconfont icon-xianxing_yonghu-"></i>
          </div>
        </header>
        <section class="content-view-main">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </section>
      </section>
    </el-col>
  </el-row>
</template>

<style>

</style>

<script>
  export default{
    data () {
      return {
        msg: '左边导航条',
        hd: '头部',
        co: "这是中间部分",
        isCollapse: false
      }
    },
    methods: {
      collapse() {
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>
