<script>
export default {
  name: "AuthenticationAlert",
  data() {
    return {
      title: "",
      message: "",
    }
  },
  mounted() {
      this.title = document.getElementById("alertBody").getAttribute("title");
      this.message = document.getElementById("alertBody").getAttribute("message");
  }
}
</script>

<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert" id="alertBody" style="color: white;">
        <span class="alert-icon">
            <i aria-hidden class="fa-solid fa-triangle-exclamation"></i>
        </span>
        <!--<span class="alert-text Pretendard-Medium"><strong>Warning!</strong> This is a warning alert—check it out!</span>-->
        <span class="alert-text Pretendard-Medium">&nbsp;&nbsp;<strong>{{ title }}</strong> {{ message }}</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<style scoped>
.alert {
    margin-top: 20px;
    margin-bottom: 0;
}
</style>