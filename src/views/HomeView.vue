<script setup>
import { ref, onMounted } from '../../node_modules/vue'
// let declension = ref(parseInt(new Date().toISOString().split('T')[1].match(/\b\d+/)[0]) + 3)

onMounted(()=>{})

const day = {
  part: '',
  declension: '',
  finding: function(){
    let h = parseInt(new Date().toISOString().split('T')[1].match(/\b\d+/)[0]) + 3;
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
  <main>
    <div class="greeting">{{ day.declension}} {{ day.part }} </div>
  </main>
</template>

<style lang="scss">

.greeting{
  color: rgb(34 119 38);
    font-size: 5em;
    font-weight: 700;
    margin: 50% auto;
    width: fit-content;

}

</style>
