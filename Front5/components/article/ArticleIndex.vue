<template>
  <div>
    <h1>一覧</h1>
    <ul v-for="article in getArticles" :key="article.id">
      <li>
        <label>記事のID</label>
        {{ article.id }}
      </li> 
      <li>
        <label>タイトル</label>
        {{ article.title }}
      </li>
      <li>
        <label>コンテント</label>
        {{ article.body }}
      </li>
    </ul>
  </div>
</template>

<script>
import DeleteArticle from './DeleteArticle.vue';
import { mapActions, mapGetters } from 'vuex';
import AddLike from './AddLike.vue';
export default {
  components: {
    DeleteArticle,
    AddLike
  },
  computed: {
    ...mapGetters(['getArticles'])
  },
  methods: {
    ...mapActions(['fetchArticles']),
  },
  created () {
    this.fetchArticles()
  }
}
</script>

<style>

</style>