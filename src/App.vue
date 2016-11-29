<template>
  <div>
    <NavBar></NavBar>
    <AppBody></AppBody>

    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">
        LOGOUT
      </div>
      <div class="image content">
        <div class="ui medium image">
          <img src="http://placekitten.com/300/300">
        </div>
        <div class="description">
          <div class="ui header">Logging out from out site...</div>
          <p>Please come again later on.</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancel
        </div>
        <div class="ui positive button">
          OK
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from './components/Navbar'
import AppBody from './components/Appbody'

export default {
  components: {
    NavBar,
    AppBody
  }
}
</script>

<style>
body {
  background-color: #f5f8fa;
}
</style>