<!-- eslint-disable vue/component-tags-order -->
<template>
  <div id="loading">
    <img
      class="img"
      src="../assets/images/weer.gif"
      alt="loading..."
      width="200"
    >
  </div>
</template>

<style>
    #loading {
      position: absolute;
      z-index: 1000;
      background-color: white;
      height: 100vh;
      width: 100vw;
      text-align: center;
      line-height: 100vh;
    }
    .img {
      position: relative;
      margin: auto;
      margin-top: 20%;
    }
    </style>
<script>
export default {
  name: 'LoadingScreen'
}
</script>
