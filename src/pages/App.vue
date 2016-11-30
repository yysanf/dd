<template>
  <div class="continer">
    <h1>个人游戏中心</h1>
    <router-link to="/aaa">
      <div class="game-one">变色方块</div>
    </router-link>
    <router-link to="/bbb">
      <div class="game-two">拼图游戏</div>
    </router-link>
  </div>
</template>
<style>
  @import "../css/tranition.css";
  body {
    background-color: #ccc;
  }

  a {
    text-decoration: none;
  }
  h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
  }
  .continer {
    width: 500px;
    margin: 200px auto;
  }

  .game-one,
  .game-two {
    width: 200px;
    height: 100px;
    text-align: center;
    line-height: 90px;
    border-radius: 10px;
    color: #88ffff;
    font-size: 20px;
    font-weight: bold;
  }

  .game-one {
    float: left;
    background-color: #4b18ff;
    box-shadow: inset 0 -2px 6px 6px #4b18aa;
  }

  .game-two {
    float: right;
    background-color: #eb830e;
    box-shadow: inset 0 -2px 6px 6px #ff6616;
  }
</style>
