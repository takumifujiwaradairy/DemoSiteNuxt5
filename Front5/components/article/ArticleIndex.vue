<template>
  <div>
    <h1>一覧</h1>
    <ul v-for="article in getArticles" :key="article.id">
      <label>記事のID</label>
      <li>{{ article.id }}</li>
      <label>タイトル</label>
      <li>{{ article.title }}</li>
      <label>コンテント</label>
      <li>{{ article.body }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
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