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
      <li>
        <label>LIKEの合計</label>
        {{ article.likes_count }}
      </li>
      <delete-article :id="article.id"/>
      <add-like :id="article.id" :is_like="article.is_like"/>
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