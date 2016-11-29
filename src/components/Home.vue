<template>
  <div>
    <div class="three wide column">Left Bar</div>
    <div class="six wide column">
      <Post v-for="post in posts" :post="post"></Post>
    </div>
    <div class="three wide column">Right Bar</div>
  </div>
</template>

<script>
import Post from './Post'
export default {
  components: {
    Post
  },
  data () {
    return {
      posts: [
        {content: 'A+B', author: 'C'},
        {content: 'I am a girl.', author: 'S O M E O N E'},
        {content: 'This is a cat.', author: 'Me', image: 'https://placekitten.com/400/150'}
      ]
    }
  },
  mounted () {
    // Try Loading some new post ...
    setTimeout(() => {
      this.posts.push({content: 'This is a cat 2.', author: 'Me', image: 'https://placekitten.com/350/200'})
    }, 3000)
  }
}
</script>

<style>
</style>