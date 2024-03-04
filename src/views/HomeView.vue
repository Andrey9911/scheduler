<script setup>
  import { RouterLink, RouterView } from '../../node_modules/vue-router/dist/vue-router'
  import record from '../components/record.vue';
  import {useCounterStore} from '../stores'
  import {provide, ref,reactive, watch, computed, onMounted } from 'from ../../node_modules/vue';
  import addNewPlan from '../components/addNewPlan.vue';
  import message from '../js/Message-Show';
  
  const counterStore = useCounterStore()
  let message_block = reactive(counterStore.message)
  let record_block = ref()
  let data_plans = ref(counterStore.getAll)
  let search = ref('');
  
  onload = () => {
    setTimeout(() => {message_block.value = {}},1000)
    counterStore.sendMess(message("Приложение находится в стадии разработки", 'not'));
    console.log(message_block.value);
  }

</script>

<template>
  <div :class="{error: message_block.isError, anim: message_block !== undefined }" class="message_block" v-show="message_block !== {}">{{ message_block.text }}</div>
  <div class="side">
    <div class="side__block">
      <div class="side__add add-action button-step">
        
        <RouterLink to="/add_new_plan" >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </RouterLink>
      </div>
      <div class="side__search search-sch">
        <input type="search" name="" id="sch-search" placeholder="search..." @input="findRecord()" v-model="search">
      </div>
    </div>
    
    <div class="records">
      <record :class="{'none': !rec.title.includes(search)}" v-if="data_plans.length !== 0"  v-for="rec in data_plans" v-bind:rec ='rec' ref="record_block"/>
      <div class="entry" v-else>Задач нет</div>
    </div>
    
    <div class="len">{{search == undefined }}</div>
  </div>
  <!-- <Task/> -->
  <div class="main__content">
    <RouterView />
  </div>
  
</template>

<style scoped lang="scss">
@import '../assets/main';
.record.none{
  display: none;
}
.side{
  width: fit-content;
  background-color: #fff;
  padding: 50px 10px;
  margin: 20px;
  border-radius: 10px;
  .side__block{display: flex;height: 30px;}
  .side__add{margin: 0 10px;}
}
.add-action{
  width: 30px;
  background-color: #0000003d;
  border-radius: 5px;
  padding: 5px 0;
  text-align: center;
  box-sizing: border-box;
  svg{color: #00000070;}

  &:hover{
    color: #e70b0b70;

  }
}
.message_block{
  position: absolute;
  top: 10px;

    background-color: #fff;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 5px 10px 10px 5px;
    border-left: #00bd7e 5px solid;
    color: #000;
    font-weight: 500;
    transition: all ease-out .5s;
    left: -100px;
    width: 1px;
    overflow: hidden;
    box-shadow: 0 0 1px #00bd7e;
    &.error{border-left: #9e1818 5px solid;background-color: #fbc4c4;}
}
.message_block.anim{
  left: 10px;
  width: fit-content;
}
.search-sch input{
  height: 100%;
  background-color: #0000003d;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.entry{
  color: #000;
  width: 100%;
  text-align: center;
  font-size: 2em;
  font-weight: 600;

}

</style>

