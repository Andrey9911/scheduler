<script setup>
    
    import { useRouter, useRoute, RouterLink, RouterView} from '../../node_modules/vue-router/dist/vue-router'
    // import { useRouter, useRoute, RouterLink, RouterView} from 'vue-router'
    import Task from '../components/Task.vue'
    // import { onMounted, ref, inject, onBeforeUpdate, nextTick } from 'vue'
    import { onMounted, ref, inject, onBeforeUpdate, nextTick } from '../../node_modules/vue'
    import {useCounterStore} from '../stores.js'
    let isPin = ref(false)
    onMounted(() => {
        isPin = ref(false) 
    }) 
    let showDeleteBut = ref(false)
    const counterStore = useCounterStore()
    const props = defineProps(['rec'])
    
    
    let router = useRouter();
    
    function chooseRoute(){
        console.log();
        router.push({
            path: '/scheduler/'+props.rec.id+'',
            query: {id: props.rec.id},
        })  
    }
    function pin(){
        isPin = true
        
        if(!props.rec.pin){
            props.rec.pin = true
            counterStore.setPin(props.rec)
        }
        else 
        {
            props.rec.pin = false
            counterStore.unsetPin(props.rec)
        }
        console.log(counterStore.data_plan);
    }
    function del()
    {
       counterStore.del(props.rec.id) 
    }


</script>

<template>
        <div class="record" 
            @click="chooseRoute" 
            @mouseenter="showDeleteBut = true" 
            @mouseleave="showDeleteBut = false">
            
            <div class="record__tilte title">{{rec.title}}</div>
            <div class="record__func">
                <div v-show="showDeleteBut"
                     class="record__but delete-but"
                     @click="del">del</div>
                <div class="record__pin pin" @click="pin" :class="[{isActive:props.rec.pin}]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" v-bind:class="[{Pin: isPin}, 'bi', 'bi-pin-angle-fill']" viewBox="0 0 16 16">
                        <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
                    </svg>
                </div>
            </div>
            
        </div>
</template>

<style scoped lang="scss">
@import '../assets/main';
    .record
    {
        transition: all ease .3s;
        position: relative;
        display: flex;
        box-shadow: 0 0 1px 1px #00bd7e;
        min-width: 250px;
        box-sizing: border-box;
        border-radius: 7px;
        background-color: #fff;
        color: black;
        margin: 10px 0;
        padding: 10px 15px;
        transition: all ease .5s;
        .record__pin{margin: 0 10px;}
        &:hover{background-color: #00bd7e50;}
        .record__but{
            width: 30px;
            height: 30px;
            box-sizing: border-box;
        }
    }
    .delete-but{
        background-color: #fff;
        border-radius: 7px;
        border: 2px solid #ae2121;
        transition: all ease .2s;
        padding: 1px 2px;
    }
    .delete-but:hover{background-color: #ffaaaa;}
    .pin{
        &.isActiveTrue{color: #00bd7e;}
        &:hover{color: #006e49;cursor: pointer;}
    }
    .isActive{
        color: #006e49;
    }
    .record__func{display: flex;width: 20%;justify-content: space-between;align-items: center;position: absolute;top: 10px;right: 30px;}
</style>