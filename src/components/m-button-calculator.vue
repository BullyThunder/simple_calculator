<template>
    <div class="calculator">
        <div class="calculator__buttons">
      <button class="calculator__btn" @click="reset">C</button>
      <button class="calculator__btn" >DEL</button>
      <button class="calculator__btn" @click="set_operation('/')">/</button>
      <button class="calculator__btn" @click="set_operation('*')">*</button>
      <button class="calculator__btn" @click="click_to_number(1)">1</button>
      <button class="calculator__btn" @click="click_to_number(2)">2</button>
      <button class="calculator__btn" @click="click_to_number(3)">3</button>
      <button class="calculator__btn" @click="set_operation('-')">-</button>
      <button class="calculator__btn" @click="click_to_number(4)">4</button>
      <button class="calculator__btn" @click="click_to_number(5)">5</button>
      <button class="calculator__btn" @click="click_to_number(6)">6</button>
      <button class="calculator__btn" @click ="set_operation('+')">+</button>
      <button class="calculator__btn" @click="click_to_number(7)">7</button>
      <button class="calculator__btn" @click="click_to_number(8)">8</button>
      <button class="calculator__btn" @click="click_to_number(9)">9</button>
      <button class="calculator__btn" @click="to_fraction">.</button>
      <button class="calculator__btn" @click="click_to_number(0)">0</button>
      <button class="calculator__btn calculator__equals" @click = "calculate">=</button>
    </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {defineEmits, ref, watch} from 'vue';
const store = useStore();

const emit = defineEmits(['custom_number']);
const result = ref(0);
const fraction = ref(0);
const first_Number = ref(0);
const second_Number = ref(0);
const first_fraction = ref(false);
const second_fraction = ref(false);
const is_next_operation = ref(false)
const operation = ref(null);
const state_of_operation = ref(false);
const to_fraction = () =>{
  if(!first_fraction.value && !first_Number.value.toString().includes('.')){
  first_Number.value += '.';
  emit('custom_number', first_Number.value);
  first_fraction.value = true;
  }
  else if(!second_fraction.value && !is_next_operation.value && ! second_Number.value.toString().includes('.')){
    second_Number.value +='.';
    emit('custom_number', second_Number.value);
    second_fraction.value = true;
    
  } 
  if(is_next_operation.value && ! second_Number.value.toString().includes('.')){
    second_Number.value += '.';
    emit('custom_number', second_Number.value);
  }
}
const click_to_number = (key) =>{
  if(!state_of_operation.value ){
    if(first_fraction.value){
      first_Number.value =  first_Number.value.toString() + key.toString();
    }
   else if(first_Number.value !== 0){
      first_Number.value = first_Number.value * 10 + key;
    }
    else {
      first_Number.value = key;
    }
    emit('custom_number', first_Number.value);
    console.log(first_Number.value);
  }
  
  else if(state_of_operation.value){
    if(second_fraction.value || is_next_operation.value){
      second_Number.value = second_Number.value.toString() + key.toString(); 
    }
   else if(second_Number.value !== 0){
      second_Number.value = second_Number.value * 10 + key;
    }
    else{
      second_Number.value= key;
    }
    emit('custom_number', second_Number.value);
    console.log(second_Number.value);
  }
}

const set_operation = (symb) =>{
  if(first_Number.value !== null){
   operation.value = symb;
   state_of_operation.value = true;
  }
}
const calculate = () => {
  first_Number.value = parseFloat( first_Number.value);
  second_Number.value = parseFloat(second_Number.value);
  if(first_Number.value !==null && second_Number.value !==null && state_of_operation.value === true){
  switch(operation.value){
    case '+':
   result.value = first_Number.value + second_Number.value;
    break;
    case '-':
    result.value = first_Number.value - second_Number.value;
    break;
    case '*':
    result.value= first_Number.value * second_Number.value;
    break;
    case '/':
    result.value =  first_Number.value / second_Number.value;
    break;  
    }
    emit('custom_number',result.value);
    state_of_operation.value = false;
    first_fraction.value = false;
    second_fraction.value = false;
    first_Number.value = result.value.toString();
    second_Number.value = '';
    is_next_operation.value=true;
  }
}
const reset = () =>{
  first_Number.value = null;
  second_Number.value = null;
  operation.value = null;
  result.value = null;
  first_fraction.value = false;
  second_fraction.value = false;
  state_of_operation.value = false;
  emit('custom_number',0);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
