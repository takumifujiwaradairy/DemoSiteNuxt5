<template>
  <div>
    <button @click="deleteArticle(id)">削除</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['id'],
  methods: {
    ...mapActions(['deleteArticle']),
  }
}
</script>

<style>

</style>