<template>
  <div class="tools">
    <div class="tool-now">当前关卡：{{num}}x{{num}}</div>
    <div class="tool-all">最后关卡：{{maxnum}}x{{maxnum}}</div>
    <div class="tool-step">step： <span>{{step}}</span> move</div>
  </div>
</template>
<script>
  export default{
    props: ['num', 'maxnum', 'step']
  }
</script>
<style>
  .tools {
    width: 250px;
    margin: 10px auto 10px;
  }

  .tools .tool-now,
  .tools .tool-all,
  .tools .tool-step {
    width: 200px;
    font-size: 20px;
    color: #fff;
    line-height: 40px;
    border-right: 8px;
    text-align: center;
    margin: 10px auto;
    background-color: #7c07ff;
    box-show: 1px 1px 1px 2px #d2e4ff;
  }

  .tools .tool-all {
    background-color: #ffa214;
  }

  .tools .tool-step {
    background-color: #0aff8a;
  }

  .tool-step span {
    font-size: 20px;
    font-weight: 800;
    color: #ff6812;
  }
</style>
