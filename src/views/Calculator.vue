<template>
  <div class="header">
    <div class="header__container">
    <Display/>
    <Button_Calculator/>
    </div>
  </div>
</template>
<script setup>
import Button_Calculator from "@/components/m-button-calculator.vue";
import Display from "@/components/m-display.vue";


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
