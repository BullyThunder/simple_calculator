<template>
  <div  class="display display__padding">
    <input v-model="show_number_0" class="display__input" type="text">
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
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
let result = 0;
const show_number_0 =computed(()=>{
  return result
})

 function update_value() {
  result =  store.dispatch("Update_Number", number_0);
  return result;
}
update_value()
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
