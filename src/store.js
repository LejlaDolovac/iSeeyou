import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    haveSeen: [],
    celeberty: [],
    celeb: {}
  },

  mutations: {
    selectedCeleb(state, celeb) {
      state.celeb = celeb;
    },

    setCeleberty(state, celeberty) {
      state.celeberty = celeberty;
    },

    setSeen(state, haveSeen) {
      state.haveSeen = haveSeen;
    },
    
  },

  actions: {

    async createCeleberty(ctx, celeb) {
      try {
        await axios.post('http://localhost:3000/celeberty', celeb);
        ctx.dispatch('getCeleberty');
      } catch (err) {
        console.err('CreateCeleberty :', err.stack);
      }
    },

    async seenCeleb(ctx) {
      let celeb = await axios.post('http://localhost:3000/seenThisCeleb', this.state.celeb);
      ctx.dispatch('haveSeenCelebs');
    },

    async getCeleberty(ctx) {
      let celeberty = await axios.get('http://localhost:3000/celeberty');
      ctx.commit('setCeleberty', celeberty.data);
    },

    async haveSeenCelebs(ctx) {
      let haveSeen = await axios.get('http://localhost:3000/seenThisCeleb');
      ctx.commit('setSeen', haveSeen.data);
    },
    async deletedCeleb(ctx, payload) {
      await axios.delete(`http://localhost:3000/seenThisCeleb/${payload.id}`);
      await axios.delete(`http://localhost:3000/celeberty/${payload.id}`);
    }
  }
})
