<template>
  <div class="button-wrap">
    <div class="container">
      <b-button variant="outline-secondary" class="btn-circle lg" size="lg" title = "reload page"><i class="fa-solid fa-arrows-rotate fa-lg"></i></b-button>
      <b-button variant="outline-secondary" class="btn-circle lg" size="lg" title = "write the email"><i class="fa-solid fa-user-pen"></i></b-button>
      <b-button variant="outline-secondary" class="btn-circle lg" size="lg"  title = "anather"><i class="fa-solid fa-bars"></i></b-button>
<hr>



    </div>
  </div>
</template>

<script>


export default {

  name: 'ButtonHeader',
};
</script>

<style  scoped>
.container {
  margin-top: 0px;
  max-width: 1000px;
  text-align: left;

}


.btn-circle {
  width: 50px;
  height: 50px;
  line-height: 5px !important;
  text-align: center;
  padding: 5px;
  border-radius: 50% !important;
  margin-right: 15px;
}
</style>
