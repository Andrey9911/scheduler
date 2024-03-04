<template>
    <div class="add-new-plan plan">
        <div class="plan__name name">
            <div class="h1">Здесь назови свой план</div>
            <input type="text" class="name__title title-Task" placeholder="title" v-model="new_data.new_title"/><br>
        </div>
        <div class="task__plan plan-content">
            <div class="h1">Здесь опиши свой план</div>
            <textarea class="Task__des des-task" v-model="new_data.new_des"></textarea>

            <div class="h1">Здесь опиши каждый пункт</div>
            <div class="plan-content__add  button-step"  @click="addNewStep">+</div>
            <input type="text" v-model="punkt">
            <div class="plan-content__add-block" v-for="i of len"></div>
            <div class="checkbox" >
				
            </div>
        </div>
        <div class="task__but-save button" @click="submit">Save</div>
    </div>
</template>



<script setup>
import message from '../js/Message-Show';
import {dataTask} from '../stores';
import {useCounterStore} from '../stores';
import { inject } from "vue";

let len = 1
let punkt = ''
let new_data = {
    new_title: undefined,
    new_des: undefined,
    new_step: {}
};


function addNewStep()
{
    len++
    new_data.new_step[punkt] = false;
    punkt = ''
    console.log(punkt);
}

const st = useCounterStore();
function submit()
{
    

    new Promise(res => {res()})
    .then(() => {
        if(new_data.new_title != undefined && !new_data.new_step != undefined && !new_data.new_des != {}){
            let id = st.getLen
            let obj = new dataTask(id+1,false,new_data.new_title,new_data.new_des,new_data.new_step)
            st.setObj(obj)
            console.log(st.data_plan);
            return obj;
        } 
        else{
            st.sendMess(message('пустые поля', 'error'));
            return
        }
        
    })
    .then(obj => {
        // st.saveData(obj);
    })
    
}


</script>
<style scoped lang="scss">
@import '../assets/main';


    .plan{
        width: 100%;
        margin: 0;
        padding: 10px;
        .h1{
            color: var(--color-def);
            font-weight: 600;
            font-size: 1.5em;
        }
        & .task__but-save{
            border-radius: 0 0 10px 10px;
            width: 100%;
            transition: ease-out .2s all;
            &:hover{
                transform: translateY(3px);
            }
        }
        
    }
    
    .name{
        background-color: #00bd7e;
        max-width: 100%;
        display: block;
        text-align: center; 
        border-radius: 10px 10px 0 0;
    }
    .task__plan{
        border-radius: 0;
        background-color: var(--bgc-def);
        width: 100%;
        padding: 10px 15px;
        .Task__des{
            border-top: .5px solid #00000033;
            border-bottom: .5px solid #00000036;
            margin-bottom: 30px;
        }
    }
    .title-Task{
        border: none;
        background-color: #00bd7e;
        border-radius: 10px;
        color: white;
        font-size: 2em;
        padding: 10px;
    }
    .des-task{
        border: none;
        min-width: 100%;
        height: 100px;
    }

    
</style>