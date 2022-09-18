<template>
  <div class="wrap">
    <div class="screen">
      <input class="operand" v-model="operand1"></input>
      <div class="operator">{{operator}}</div>
      <input class="operand" v-model="operand2"></input>
      <div class="operator">=</div>
      <div class="operand">{{result}}</div>
    </div>
    <div class="keyboard">
      <button class="button" @click="operator='+'">+</button>
      <button class="button" @click="operator='-'">-</button>
      <button class="button" @click="operator='*'">*</button>
      <button class="button" @click="operator='/'">/</button>
      <button class="button" @click="operator='X^n'">X<sup>n</sup></button>
      <button class="button" @click="operator='/(.)'">/ (без остатка)</button>
      <button class="button" @click="getResult">=</button>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      operand1: "",
      operand2: "",
      operator: "+",
      result: ""

    }
  },
  methods: {
    getResult() {
      switch (this.operator) {
        case "+":
          this.result = +this.operand1 + (+this.operand2)
          break;
        case "-":
          this.result = +this.operand1 - (+this.operand2)
          break;
        case "*":
          this.result = +this.operand1 * (+this.operand2)
          break;
        case "/":
          this.result = +this.operand1 / (+this.operand2)
          break;
        case "X^n":
          this.result = (+this.operand1) ** (+this.operand2)
          break;
        case "/(.)":
          this.result = parseInt((+this.operand1) / (+this.operand2))
          break;
        default:
          this.result = "err";
          break;
      }
    }
  }
}
</script>

<style lang="scss">
.wrap {
  width: 400px;
  height: 100px;
  margin: 25% auto;
}

.screen {
  display: flex;
  justify-content: center;

}

.operand {
  max-width: 90px;
  min-width: 30px;

}

.operator {
  max-width: 90px;
  min-width: 30px;
  text-align: center;
}

.operand:hover {
  box-shadow: 0px 0px 36px -3px rgba(16, 69, 171, 0.6);
}

.keyboard {
  display: flex;
  justify-content: center;
  width: 400px;
  margin: 30px 0;
}

.button {
  width: 90px;
  height: 40px;
  border: 1px solid rgba(16, 69, 171);
  margin: 0 10px;
  transition: transform 0.6s 0s linear;
}

.button:hover {
  width: 90px;
  height: 40px;
  border: 1px solid rgba(16, 69, 171);
  margin: 0 10px;
  transform: scale(1.15);
}
</style>
