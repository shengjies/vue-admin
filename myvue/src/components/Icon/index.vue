<template>
    <div class="icon">
      <h1>{{msg}}</h1>
      <ul>
        <li><i class="iconfont icon-shezhi"></i></li>
        <li><i class="iconfont icon-shouye"></i></li>
        <li><i class="iconfont icon-sousuo"></i></li>
        <li><i class="iconfont icon-menu-unfold"></i></li>
        <li><i class="iconfont icon-menu-fold"></i></li>
        <li><i class="iconfont icon-liebiao"></i></li>
        <li><i class="iconfont icon-shanchu"></i></li>
        <li><i class="iconfont icon-shuju"></i></li>
        <li><i class="iconfont icon-shuju1"></i></li>
        <li><i class="iconfont icon-shuju2"></i></li>
        <li><i class="iconfont icon-xianxing_yonghu-"></i></li>
      </ul>
    </div>
</template>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  .icon ul li{
    list-style: none;
  }

</style>

<script>
    export default{
        data () {
            return {msg: '这个是Icon模板页'}
        }
    }
</script>
