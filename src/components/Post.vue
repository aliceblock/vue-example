<template>
  <div class="post ui grid">
    <div class="sixteen wide column">
      <router-link :to="'/user/'+author"><h5>{{author}}</h5></router-link>
    </div>
    <div class="sixteen wide column">
      {{content}}
    </div>
    <div class="sixteen wide column">
      <img :src="image"v-if="image"/>
    <div class="sixteen wide column">
      <div class="ui section divider"></div>
    </div>
    <div class="ui labeled button" @click="like" tabindex="0">
      <div :class="['ui', {red: liked}, 'button']">
        <i class="heart icon"></i> Like
      </div>
      <a class="ui basic label">
        {{like_counter}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data () {
    return {
      image: '',
      content: '',
      author: '',
      like_counter: 123,
      liked: true
    }
  },
  mounted () {
    this.image = this.post.image
    this.content = this.post.content
    this.author = this.post.author
  },
  methods: {
    like () {
      this.liked = !this.liked
      if (this.liked) this.like_counter += 1
      else this.like_counter -= 1
      // Do Something
    }
  }
}
</script>

<style scoped>
  h5 {
    color: black;
  }
  h5:hover {
    color: dodgerblue;
    text-decoration: underline;
  }
  .post {
    padding: 10px;
    margin-top: -1px !important;
    background-color: white;
    border: 1px solid rgba(50, 50, 50, 0.11);
    /*min-height: 100px;*/
  }
</style>
