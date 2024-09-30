<template>
    <div class="calculator">
        <div class="calculator__buttons">
      <button class="calculator__btn" >C</button>
      <button class="calculator__btn" >DEL</button>
      <button class="calculator__btn" >/</button>
      <button class="calculator__btn" >*</button>
      <button class="calculator__btn" @click="click_to_number(1)">1</button>
      <button class="calculator__btn" @click="click_to_number(2)">2</button>
      <button class="calculator__btn" @click="click_to_number(3)">3</button>
      <button class="calculator__btn">-</button>
      <button class="calculator__btn" @click="click_to_number(4)">4</button>
      <button class="calculator__btn" @click="click_to_number(5)">5</button>
      <button class="calculator__btn" @click="click_to_number(6)">6</button>
      <button class="calculator__btn" @click ="click_add(is_Adding)">+</button>
      <button class="calculator__btn" @click="click_to_number(7)">7</button>
      <button class="calculator__btn" @click="click_to_number(8)">8</button>
      <button class="calculator__btn" @click="click_to_number(9)">9</button>
      <button class="calculator__btn" >.</button>
      <button class="calculator__btn" @click="click_to_number(0)">0</button>
      <button class="calculator__btn calculator__equals" @click = "equals(is_Equal)">=</button>
    </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {defineEmits, ref, watch} from 'vue';
const store = useStore();

const emit = defineEmits(['custom_number','result_add']);
const result =0;
const first_Number = ref(0);
const second_Number = ref(0);
const is_Adding = ref(false);
const is_Equal = ref(false);
const current_Number = ref(1);
const click_add = () =>{
  is_Adding.value = true;
}
const click_to_number = (key) =>{
  if(current_Number.value === 1 && is_Adding.value === false){
  first_Number.value = key;
  current_Number.value = ref(2);
  is_Adding.value = true;
  }
  else if(is_Adding.value == true && current_Number.value === 2){
  second_Number.value = key;
  }
  emit('custom_number',first_Number.value);
}


watch(first_Number.value,(new_first_Number)=>{
    console.log(new_first_Number);
  });
  watch(second_Number.value,(new_second_Number)=>{
    console.log(new_second_Number);
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
