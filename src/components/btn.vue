<template>
  <div class="btn-div">
    <button class="btn-h btn-right" @click="render">重置游戏</button>
    <router-link to="/">
      <button class="btn-h btn-left">返回主页</button>
    </router-link>
  </div>
</template>
<script>
  export default{
      props:['render']
  }
</script>
<style>
  .btn-div {
    width: 400px;
    margin: 0 auto;
  }
  .btn-h {
    background-color: #FEAE1B;
    border: 1px solid #FEAE1B;
    color: #fff;
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 6px;
  }

  .btn-h:hover {
    background-color: #fec04e;
    border-color: #fec04e;
  }
  .btn-left {
    width: 30%;
    float: left;
    margin-left: 20px;
  }
  .btn-right {
    width: 30%;
    float: right;
    margin-right: 20px;
  }
</style>
