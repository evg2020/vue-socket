<template>
  <div class="container emails-container mt-3 p-0">
    <div class="email-line">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 email-from">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <span class="email-from"><b>from :{{email.from[0].address}}</b></span>
          </div>
          <div class="col-lg-5 email-title">
            <span class="email-title"><b>title : {{email.subject}}</b> </span>
          </div>
          <div class="col-lg-3 email-time">
            <span class="email-time"> {{email.date}}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
 <script>
export default {
  name: 'EmailLine',
  data: () => {},
  props: {
    email: {
      type: Object,
      required: true,
    },
  },
};
</script>
 <style scoped>
.container {
  margin-top: 0px;
  max-width: 1000px;
}
.email-box {
  padding: 0 0;
  background: rgb(244, 250, 248);
}
.email-line {
  cursor: pointer;
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
</style>