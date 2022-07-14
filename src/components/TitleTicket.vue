<template>

    <div class="container">
      <div class="row">
        <div class="col-md title-email-box pr-1 pl-1">
          <p class="title-text">Incoming emails</p>
        <hr>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: 'TitleTicket',
};
</script>

<style  scoped>
.container {
  margin-top: 0px;
  max-width: 1000px;
  margin-bottom: 40px;
}

.title-email-box {
  height: 30px;
  text-align: left;
}
.title-text {
  font-weight: 600;
  font-size: 26px;
}
</style>