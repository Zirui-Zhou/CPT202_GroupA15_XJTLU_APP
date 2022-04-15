import { createStore } from 'vuex'

export default createStore({
  state: {
    token: [localStorage.getItem("token"), sessionStorage.getItem("token")]
        .filter((item)=>item)
        .pop(),
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
    serverUrl: "http://localhost:8081",
    staticUrl: "/static",
    articleTypeList: []
  },
  mutations: {
    SET_TEMP_TOKEN: (state, token) => {
      state.token = token
      sessionStorage.setItem("token", token)
    },
    SET_PERM_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_USER: (state) => {
      state.token = ""
      state.userInfo = null
      localStorage.removeItem("token")
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("userInfo")
    },
    SET_ARTICLE_TYPE_LIST: (state, type_list) => {
      state.articleTypeList = type_list
    }
  },
  getters: {
    // get
    getUserInfo: state => {
      return state.userInfo
    },

    getToken: state => {
      return state.token
    },

    getServerUrl: state => {
      return state.serverUrl
    },

    getStaticUrl: state => {
      return state.serverUrl + state.staticUrl
    },

    getArticleTypeList: state => {
      return state.articleTypeList
    }
  },
  actions: {
  },
  modules: {
  }
})
