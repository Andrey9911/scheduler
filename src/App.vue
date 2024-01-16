<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import record from './components/record.vue';
  import {useCounterStore} from './stores.js'
  import Task from './components/Task.vue';
  import {provide, ref, watch, computed } from 'vue';
  import addNewPlan from './components/addNewPlan.vue';
  
  const counterStore = useCounterStore()
  
  let data_plans = ref(counterStore.getAll)
  
    
  
  
    // data_plans = counterStore.data_plan
    // watch(() => {data_plans}, () => {counterStore.data_plan.push(data_plans.slice())})
    // counterStore.data_plan = data_plans.slice()
    
    // console.log(data_plans);

</script>

<template>
  <div class="side">
    <div class="side__block">
      <div class="side__add add-action">
        
        <RouterLink to="/add_new_plan" >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </RouterLink>
      </div>
      <div class="side__search search-sch">
        <input type="search" name="" id="sch-search" placeholder="search...">
      </div>
    </div>
    
    <div class="records">
      <record v-if="counterStore.arrayPin.length > 0" v-for="rec of counterStore.arrayPin"/>
      <record v-for="rec in data_plans" v-bind:rec ='rec'/>
    </div>
    
    <div class="len">{{ counterStore.data_plan.length }}</div>
  </div>
  <!-- <Task/> -->
  <RouterView />
</template>

<style scoped lang="scss">
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

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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
</style>
