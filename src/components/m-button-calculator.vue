<template>
    <div class="calculator">
        <div class="calculator__buttons">
      <button class="calculator__btn" >C</button>
      <button class="calculator__btn" >DEL</button>
      <button class="calculator__btn" >/</button>
      <button class="calculator__btn">*</button>
      <button class="calculator__btn" >1</button>
      <button class="calculator__btn" >2</button>
      <button class="calculator__btn" >3</button>
      <button class="calculator__btn">-</button>
      <button class="calculator__btn">4</button>
      <button class="calculator__btn">5</button>
      <button class="calculator__btn" >6</button>
      <button class="calculator__btn">+</button>
      <button class="calculator__btn" >7</button>
      <button class="calculator__btn" >8</button>
      <button class="calculator__btn" >9</button>
      <button class="calculator__btn" >.</button>
      <button class="calculator__btn" >0</button>
      <button class="calculator__btn calculator__equals">=</button>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const num_0 = ref(0);
const num_1 = ref(1);
const num_2 = ref(2);
const num_3 = ref(3);
const num_4 = ref(4);
const num_5 = ref(5);
const num_6 = ref(6);
const num_7 = ref(7);
const num_8 = ref(8);
const num_9 = ref(9);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
