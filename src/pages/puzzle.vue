<template>
  <div class="box">
    <div class="puzzle-box">
      <ul class="puzzle-wrap">
        <li
          v-for="(puzzle,index) in puzzles"
          v-bind:class="{'puzzle':true,'puzzle-empty':!puzzle}"
          v-bind:style="{backgroundPosition:puzzle.bgp,width:liW,height:liW}"
          @click="moveFn(index)"
        ></li>
      </ul>
      <btn v-bind:render="render"></btn>
    </div>
    <div class="puzzle-tool">
      <div class="too-img">
        <img src="../assets/new.jpg" alt="">
      </div>
      <step-tool v-bind:num="Num" v-bind:maxnum="10" v-bind:step="step"></step-tool>
    </div>
    <win v-show="show" v-bind:goon="goOn"></win>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Win from '../components/win.vue'
  import btn from '../components/btn.vue'
  import stepTool from '../components/stepTool.vue'
  export default {
    data() {
      return {
        puzzles: [],
        liW: '',
        Num: 3,
        show: false,
        step: 0
      }
    },
    methods: {
//            重置
      render() {
        this.step = 0;
        this.show = false;
        const liW = 500 / this.Num;
        this.liW = liW + "px";
        let puzzleArr = [],
          k = 1;
        for (let i = 0; i < this.Num; i++) {
          for (let j = 0; j < this.Num; j++) {
            const bgp = -j * liW + 'px ' + -i * liW + 'px';
            const liNum = k;
            puzzleArr.push({bgp, liNum});
            k++;
          }
        }
        puzzleArr.pop();
        puzzleArr = puzzleArr.sort(() => {
          return Math.random() - 0.5;
        });
        this.puzzles = puzzleArr;
        this.puzzles.push('');
      },
//            点击,方块移动
      moveFn(index) {
        let nNum = this.Num;
        let curNum = this.puzzles[index],
          leftNum = this.puzzles[index - 1],
          rightNum = this.puzzles[index + 1],
          topNum = this.puzzles[index - nNum],
          bottomNum = this.puzzles[index + nNum];
        if (leftNum === "" && index % nNum) {
          Vue.set(this.puzzles, [index - 1], curNum);
          Vue.set(this.puzzles, [index], "");
          this.step++;
        } else if (rightNum === "" && (nNum - 1) != index % nNum) {
          Vue.set(this.puzzles, [index + 1], curNum);
          Vue.set(this.puzzles, [index], "");
          this.step++;
        } else if (topNum === "") {
          Vue.set(this.puzzles, [index - nNum], curNum);
          Vue.set(this.puzzles, [index], "");
          this.step++;
        } else if (bottomNum === "") {
          Vue.set(this.puzzles, [index + nNum], curNum);
          Vue.set(this.puzzles, [index], "");
          this.step++;
        }
        this.passFn();
      },
//      判断是否通过
      passFn() {
        if (this.puzzles[this.puzzles.length - 1] === '') {
          const newPuzzle = this.puzzles.slice(0, this.puzzles.length - 1);
          const isPass = newPuzzle.every((e, i) => e.liNum === i + 1);
          if (isPass) {
            this.show = true;
          }
        }
      },
//      下一关
      goOn() {
        this.Num++;
        if (this.Num > 10) {
          this.Num = 3;
        }
        this.render();
      }
    },
    mounted: function () {
      this.render();
    },
    components: {
      Win,
      btn,
      stepTool
    }
  }
</script>

<style scoped>
  @import "../css/puzzle.css";
</style>
