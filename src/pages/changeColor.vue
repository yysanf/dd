<template>
  <div class="color-box">
    <div class="color-div">
      <ul class="color-wrap clearfix" v-bind:style="{width:ulW,height:ulW}">
        <li
          v-for="(puzzle,index) in puzzles"
          v-bind:class="{'color-li':true,'color-li-empty':!puzzle}"
          v-bind:style="{width:liW,height:liW}"
          @click="moveFn(index)"
        ></li>
      </ul>
      <btn v-bind:render="render"></btn>
    </div>
    <div class="color-tool">
      <step-tool v-bind:num="Num"
                 v-bind:maxmun="10"
                 v-bind:step="step"></step-tool>
    </div>
    <win v-show="show" v-bind:goon="goOn"></win>
  </div>
</template>
<script>
  import Vue from 'vue'
  import win from '../components/win.vue'
  import btn from '../components/btn.vue'
  import stepTool from '../components/stepTool.vue'
  export default {
    data() {
      return {
        puzzles: [],
        Num: 2,
        ulW: '',
        liW: '',
        show: false,
        step: 0
      }
    },
    methods: {
//            重置方块
      render() {
        this.show = false;
        this.step = 0;
        if (this.Num <= 5) {
          this.ulW = 400 + 'px';
        } else {
          this.ulW = 500 + 'px';
        }
        this.liW = parseInt(this.ulW) / this.Num + 'px';
        this.puzzles = [];
        for (let i = 0; i < this.Num * this.Num; i++) {
          this.puzzles.push(false);
        }
      },
//            点击方块
      moveFn(index) {
        let liNum = this.Num;
        let curNum = this.puzzles[index],
          leftNum = this.puzzles[index - 1],
          rightNum = this.puzzles[index + 1],
          topNum = this.puzzles[index - liNum],
          bottomNum = this.puzzles[index + liNum];
        if (0 != index % liNum) {
          Vue.set(this.puzzles, [index - 1], !leftNum);
        }
        if ((liNum - 1) != index % liNum) {
          Vue.set(this.puzzles, [index + 1], !rightNum);
        }
        if (index - liNum >= 0) {
          Vue.set(this.puzzles, [index - liNum], !topNum);
        }
        if (index + liNum < (liNum * liNum)) {
          Vue.set(this.puzzles, [index + liNum], !bottomNum);
        }
        Vue.set(this.puzzles, [index], !curNum);
        this.step++;
        this.passFn();
      },
//      是否通关
      passFn() {
        const isPass = this.puzzles.every((e, i) => e === true);
        if (isPass) {
          this.show = true;
        }
      },
//      下一关
      goOn() {
        this.Num++;
        this.render();
      }
    },
    mounted: function () {
      this.render();
    },
    components: {
      win,
      btn,
      stepTool
    }
  }
</script>
<style scoped>
  @import "../css/changeColor.css";

  .color-tool {
    float: right;
    padding-top: 200px;
  }
</style>
