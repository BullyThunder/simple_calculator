<template>
  <div  class="display display__padding">
    <input v-model="message" class="display__input" type="text">
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
const store = useStore();
const message = ref('')
const receiveMessage =(newMessage) =>{
  message.value  = newMessage;
}
defineExpose({ receiveMessage });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  min-width: 50px;
  height: 50px;
}

</style>
