<template>
  <div>
    <h1>用户模块</h1>
    <router-link to="/user/userdetail">userdetail</router-link>
    <router-view/>
    <router-view name="usertask"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'user'
    }
  },
  mounted: function () {
    this.$router.push('/user/userdetail')
  },
  methods: {
    goto: function (url) {
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
