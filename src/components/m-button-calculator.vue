<template>
    <div class="calculator">
        <div class="calculator__buttons">
      <button class="calculator__btn" >C</button>
      <button class="calculator__btn" >DEL</button>
      <button class="calculator__btn" >/</button>
      <button class="calculator__btn" >*</button>
      <button class="calculator__btn" @click="number_1">1</button>
      <button class="calculator__btn" @click="number_2">2</button>
      <button class="calculator__btn" @click="number_3">3</button>
      <button class="calculator__btn">-</button>
      <button class="calculator__btn" @click="number_4">4</button>
      <button class="calculator__btn" @click="number_5">5</button>
      <button class="calculator__btn" @click="number_6">6</button>
      <button class="calculator__btn">+</button>
      <button class="calculator__btn" @click="number_7">7</button>
      <button class="calculator__btn" @click="number_8">8</button>
      <button class="calculator__btn" @click="number_9">9</button>
      <button class="calculator__btn" >.</button>
      <button class="calculator__btn" @click="click_to_number_0">0</button>
      <button class="calculator__btn calculator__equals">=</button>
    </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';
const store = useStore();
const number_0 = computed(()=> store.getters.get_numbers('number_0'));
const number_1 = computed(()=> store.getters.get_numbers('number_1'));
const number_2 = computed(()=> store.getters.get_numbers('number_2'));
const number_3 = computed(()=> store.getters.get_numbers('number_3'));
const number_4 = computed(()=>  store.getters.get_numbers('number_4'));
const number_5 = computed(()=> store.getters.get_numbers('number_5'));
const number_6 = computed(()=> store.getters.get_numbers('number_6'));
const number_7 = computed(()=> store.getters.get_numbers('number_7'));
const number_8 = computed(()=> store.getters.get_numbers('number_8'));
const number_9 = computed(()=> store.getters.get_numbers('number_9'));

const click_to_number_0 = () =>(
  store.commit('set_number',"number_0"),
  store.dispatch('Update_Number', { key: 'number_0', value: 0 })
)


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
