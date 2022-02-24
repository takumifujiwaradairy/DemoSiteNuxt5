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
        await axios.post(`${url}/${id}/likes`)
      },
    },
    mutations: {
      addArticle: (state, article) => state.articles.push(article),
      setArticles: (state, articles) => state.articles = articles,
      removeArticle: (state, id) => {
        const index = state.articles.findIndex(article => article.id === id);
        state.articles.splice(index, 1);
      }
    }
  })
}

export default createStore;