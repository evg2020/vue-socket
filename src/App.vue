<template>
  <div id="app">
    <TitleTicket />
    <ButtonHeader />
    <EmailContainer :list="allEmailsList" />
    <b-button variant="outline-secondary" class="btn-circle lg" size="lg"  title = "anather" @click ="clickButton('Form')">send</b-button>
  </div>
</template>

<script>
import TitleTicket from './components/TitleTicket.vue';
import ButtonHeader from './components/ButtonHeader.vue';
import EmailContainer from './components/EmailContainer.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({}),
  components: {
    TitleTicket,
    ButtonHeader,
    EmailContainer,
  },
  computed: {
    ...mapGetters('emails', ['allEmailsList']),
  },

  mounted() {
    this.webSocket();
  },

  methods: {
    ...mapActions('emails', ['webSocket']),

 clickButton: function (date) {
            // $socket is socket.io-client instance
            this.$socket.emit('emit_method', {data:date})
        }
  },

  sockets: {
    connect: function () {
      console.log('Vue connected');
    },
    'vueConnection': function (date) {
      console.log('server socket.emit("vueConnection"),', date);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
