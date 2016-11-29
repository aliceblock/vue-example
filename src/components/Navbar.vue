<template>
  <div id="navbar" class="ui secondary  menu">
    <router-link class="item" to="/"><i class="home icon"></i>HOME</router-link>
    <router-link class="item" to="/profile"><i class="user icon"></i>Profile</router-link>
    <router-link class="item" to="/following"><i class="at icon"></i>Following</router-link>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="ui item" @click="logout">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      // window.alert('Logging out...')
      window.$('.ui.modal').modal('show')
    }
  }
}
</script>

<style scoped>
  #navbar {
    background-color: white;
  }
</style>