<template>
  <div class="header">
    <div class="header__container">
    <Display ref="display"/>
    <Button_Calculator @custom_number="sendToDisplay"/>
    </div>
  </div>
</template>
<script setup>
import Button_Calculator from "@/components/m-button-calculator.vue";
import Display from "@/components/m-display.vue";
import {ref} from 'vue';
const display = ref(null);
const sendToDisplay = (message) =>{
  if(display.value){
  display.value.receiveMessage(message);
  }
}

</script>
<style lang="scss">
@import '@/assets/css/style.css';
</style>
<style>
.calculator{
  display: flex;
  justify-content: center;
}
</style>
