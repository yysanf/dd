<template>
  <div class="total-box">
    <div class="choose-box clearfix">
      <p>恭喜！闯关成功！</p>
      <div class="continue" @click="goon">继续游戏</div>
      <router-link to="/">
        <div class="goback">返回首页</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default{
      props:['goon']
  }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .total-box {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    width: 100%;
    height: 100%;
  }
  .choose-box {
    position: absolute;
    top: 35%;
    left:50%;
    margin-left: -150px;
    width: 300px;
    background-color: rgba(0,0,0,.8);
    padding-bottom: 25px;
    border-radius: 10px;
    box-shadow: #ccc 0 0 2px 2px;
  }
  .choose-box p {
    font-size: 20px;
    color: #a9014b;
    margin: 10px 0;
    text-align: center;
  }
  .choose-box .continue,
  .choose-box .goback{
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    text-align: center;
  }
  .choose-box .continue {
    float: left;
    margin-left: 30px;
    background-color: #adc708;
  }
  .choose-box .continue:hover {
    background-color: #829606
  }
  .choose-box .goback{
    float: right;
    margin-right: 30px;
    background-color: #ffb515;
  }
  .choose-box .goback:hover {
    background-color: #fc9200;
  }
  .clearfix:after {
    content: '';
    clear: both;
    height: 0;
    display: block;
    visibility: hidden;
  }
  .clearfix{
    *zoom: 1;
  }
</style>
