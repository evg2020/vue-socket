<template>
  <div class="container emails-container mt-3 p-0">
    <div class="email-box" v-for="(email, key) in list" :key='key'>
      <EmailLine :email ='email'/>
    </div>


    <div class="container btn-container">
      <button type="button" class="btn btn-secondary btn-more-email">
        more letters
      </button>
    </div>
  </div>
</template>
 <script>
 import EmailLine from './EmailLine.vue'

 export default {
  name:"EmailContainer",
  components:{
    EmailLine
  },
  data:()=>{

  },
  props:{
    list:{
      type:Object,
      default:()=>({})
    }
  }

 }
 </script>
 <style scoped>
.container {
  margin-top: 0px;
  max-width: 1000px;
}
.email-box {
  padding: 0 12px 0;
  /* background: rgb(244, 250, 248); */
}

li {
  list-style-type: none;
}
.email-from,
.email-title {
  text-align: left;
}
.email-time {
  text-align: right;
}
.btn-container{
  text-align: left;
}
</style>