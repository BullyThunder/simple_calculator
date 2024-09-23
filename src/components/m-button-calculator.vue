<template>
    <div class="calculator">
        <div class="calculator__buttons">
      <button class="calculator__btn" >C</button>
      <button class="calculator__btn" >DEL</button>
      <button class="calculator__btn" >/</button>
      <button class="calculator__btn" >*</button>
      <button class="calculator__btn" @click="click_to_number('number_1')">1</button>
      <button class="calculator__btn" @click="click_to_number('number_2')">2</button>
      <button class="calculator__btn" @click="click_to_number('number_3')">3</button>
      <button class="calculator__btn">-</button>
      <button class="calculator__btn" @click="click_to_number('number_4')">4</button>
      <button class="calculator__btn" @click="click_to_number('number_5')">5</button>
      <button class="calculator__btn" @click="click_to_number('number_6')">6</button>
      <button class="calculator__btn">+</button>
      <button class="calculator__btn" @click="click_to_number('number_7')">7</button>
      <button class="calculator__btn" @click="click_to_number('number_8')">8</button>
      <button class="calculator__btn" @click="click_to_number('number_9')">9</button>
      <button class="calculator__btn" >.</button>
      <button class="calculator__btn" @click="click_to_number('number_0')">0</button>
      <button class="calculator__btn calculator__equals">=</button>
    </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed, reactive, ref} from 'vue';
const store = useStore();

const arr_number = ref(['number_0', 'number_1','number_2','number_3','number_4','number_5',
'number_6','number_7','number_8','number_9',]);

const click_to_number = (key) =>(
  store.dispatch('Update_Number', { key: key, value: store.getters.get_numbers(key) })
)


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
