import Vuex from "vuex";
import axios from "axios";

const url = '/api/articles'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      articles: [
      ]
    }),
    getters: {
      getArticles: (state) => {
        return state.articles
      }
    },
    actions: {
      async postArticle({ commit }, article){
        await axios.post(url, article).then(response => {
          commit('addArticle', response.data)
        })
      },
      async fetchArticles({ commit }){
        await axios.get(url).then(response => {
          commit('setArticles', response.data)
        })
      },
      async deleteArticle({ commit }, id){
        await axios.delete(`${url}/${id}`).then(() => {
          commit('removeArticle', id)
        })
      },
      async addLike({ commit }, id){
        await axios.post(`${url}/${id}/likes`).then(response => {
          commit('addLike', { id: id , count: response.data })
        })
      },
      async disLike({ commit }, id){
        await axios.delete(`${url}/${id}/likes`).then(response => {
          commit('deleteLike', { id: id , count: response.data })
        })
      },
    },
    mutations: {
      addArticle: (state, article) => state.articles.push(article),
      setArticles: (state, articles) => state.articles = articles,
      removeArticle: (state, id) => {
        const index = state.articles.findIndex(article => article.id === id);
        state.articles.splice(index, 1);
      },
      addLike: (state, { id, count }) => {
        const index = state.articles.findIndex(article => article.id === id);
        const article = state.articles[index];
        article.likes_count = count;
        article.is_like = true;
        state.articles.splice(index, 1, article);
      },
      deleteLike: (state, { id, count }) => {
        const index = state.articles.findIndex(article => article.id === id);
        const article = state.articles[index];
        article.likes_count = count;
        article.is_like = false;
        state.articles.splice(index, 1, article);
      }
    }
  })
}

export default createStore;