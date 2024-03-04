<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink, useRoute } from "./../node_modules/vue-router/dist/vue-router";
// let declension = ref(parseInt(new Date().toISOString().split('T')[1].match(/\b\d+/)[0]) + 3)
let h = parseInt(new Date().toISOString().split('T')[1].match(/\b\d+/)[0]) + 3;
onMounted(()=>{})

console.log(useRoute().path);

const day = {
  part: '',
  declension: '',
  finding: function(){
    
    if(h >= 12 && h <= 20)
    {
      this.declension = "Добрый"
      this.part = 'день'
    } 
    else if(h >= 3 && h < 12)
    {
      this.declension = "Доброе"
      this.part = 'утро'
    } 
    else
    {
      this.declension = "Доброй"
      this.part = 'ночи'
    } 
  }
}
day.finding()
</script>

<template>
  <main class="main" v-if="useRoute().path == '/'">
    
      <RouterLink to="/main">
        <button class="main__but button">Задачи</button>
      </RouterLink>
    
      <div class="main__greeting">{{ day.declension}} {{ day.part }} </div>
      <div class="main__content"></div>
    
      <widget>
        <div class="done-task">
          {{ st }}
        </div>
      </widget>
    
  </main>
</template>

<style lang="scss">

.main__greeting{
  color: rgb(34 119 38);
    font-size: 5em;
    font-weight: 700;
    margin: 50% auto;
    width: fit-content;

}

</style>

