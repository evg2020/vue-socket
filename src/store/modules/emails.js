import axios from '@/plagins/axios'

// function serializeResponce(emails) {
//   return emails.reduce((acc, item) => {
//     acc[item._id] = item;
//     return acc;
//   }, {})
// }

const emails = {
  namespaced: true,
  state: {
    emailsList: [],
    carrentEmailId: '',
    lastEmail: {}
  },
  //geters:{}
  getters: {
    allEmailsList: ({
      emailsList
    }) => emailsList

  },
  //commit(){}
  mutations: {
    EMAILLIST(state, emails) {
      state.emailsList = emails
    },
    LASTADD(state, email) {
      state.lastEmail = email
    },
    EMAILADD(state, email) {
      state.emailsList.push(email)
    }

  },
  //dispatch(){}
  actions: {

    initEmailStore: {
      handler({
        dispatch
      }) {
        dispatch('fetchEmails')
      },
      root: true
    },

    async fetchEmails({ commit }) {
      const res = await axios.get('/')
      console.log('response--->', res.data);
      commit('EMAILLIST', res.data)
    },

    // webSocket({ commit }) {
    //   const ws = new WebSocket('ws://localhost:3000')

    //   function setStatus(value) {
    //     console.log('Status web socket..', value);
    //   }

      // function printMessage(value) {
      //   let email = JSON.parse(value)
      //   console.log(JSON.parse(value));
      //   commit('LASTADD', email)
      //   commit('EMAILADD', email)
      // }

      // //подпишемся
      // ws.onopen = () => setStatus('ONLINE')
      // ws.onclose = () => setStatus('DISCONNECTED')
      // ws.onmessage = response => printMessage(response.data)
    // }
  }
};

export default emails