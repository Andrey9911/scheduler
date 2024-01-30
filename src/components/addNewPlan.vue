<template>
    <div class="add-new-plan plan">
        <div class="plan__name name">
            
            <input type="text" class="name__title title-Task" placeholder="title" v-model="new_data.new_title"/><br>
            <textarea class="Task__des des-task" v-model="new_data.new_des"></textarea>
        </div>
        <div class="task__plan plan-content">
            <div class="plan-content__add add-step"  @click="addNewStep"
                >
                +
            </div>
            <div class="plan-content__add-block" v-for="i of len">
                <input type="text" v-model="punkt">
                <div class="plan-content_save save" >+</div>
            </div>
            <div class="checkbox" >
				
            </div>
        </div>
        <div class="button" @click="submit">Save</div>
    </div>
</template>



<script setup>
import { nextTick } from 'vue';
import {dataTask} from '../stores';
import {useCounterStore} from '../stores';

let len = 1
let punkt
let new_data = {
    new_title: undefined,
    new_des: undefined,
    new_step: {}
};

function addNewStep()
{
    len++
    new_data.new_step[punkt] = false
    punkt = ''
}
function submit()
{
    let st = useCounterStore()

    new Promise()
    .then(() => {
        if(new_data.new_title != undefined && !new_data.new_step != undefined && !new_data.new_des != {}){
            let id = st.getLen
            let obj = new dataTask(id+1,false,new_data.new_title,new_data.new_des,new_data.new_step)
            st.setObj(obj)
            console.log(st.data_plan);
        // nextTick()
        // emit("sub",obj);
        } 
        return obj;
    })
    .then(obj => {
        st.saveData(obj);
    })
    
}


</script>
<style scoped lang="scss">
    .add-new-plan{
        margin: 0;
        padding: 10px;
        .plan__name{
            max-width: 80%;
        }
    }
    .button{
        background-color: #00bd7e;
        color: #fff;
        font-size: 1.5em;
        border-radius: 5px;
        width: fit-content;
        padding: 5px 10px;
        transition: ease-out .5s;

        &:hover{
            border-radius: 10px;
            transform: scale(1.5);
            // filter:blur(2px);
        }
    }
    .name{
        width: 500px;
        min-width: 200px;
        display: block;
        text-align: center; 
        .name__title{
            
            width: 100%;
            height: 50px;
            

        }
    }
    .title-Task{
        background-color: #00bd7e;
        border-radius: 10px;
        color: white;
        font-size: 2em;
        padding: 10px;

    }

    
</style>