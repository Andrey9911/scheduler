<script setup>
    // import { ref, computed, onUpdated, onMounted, nextTick  } from '../../node_modules/vue';
    import { ref, computed, onUpdated, onMounted, nextTick  } from 'vue';
    // import { useRoute } from '../../node_modules/vue-router/dist/vue-router';
    import { useRoute, useRouter } from 'vue-router';
    import {useCounterStore} from '../stores.js';
    import message from '../js/Message-Show';

    let checkbox = ref([]);
    let new_step
    let message_block = ref('');
    let checkbox_checked = ref(0);

    const router = useRoute();
    const useC = useCounterStore();

    onMounted(() => {
        console.log(checkbox);
    })

    function changeLenCheckbox()
    {
        checkbox_checked.value = checkbox.value.filter(el => el.checked);
    }

    let progress_value = computed(() => {
        console.log(checkbox_checked.value);
        return Math.round(checkbox_checked.value.length*100/checkbox.value.length);
    })
        
    


    const par = computed(() => {
        return useC.getAll.find(el => el.id == router.query.id);
    })

    function addNewPlanPunkt()
    {
        if(new_step == undefined || new_step === "")
        {
            useC.sendMess(message("Пустое поле!", 'error'));
            nextTick;
            return
        } 
        useC.add(par.value,new_step)
        
    }

</script>

<template>
    <div class="Task">
        <div class="Task__name">
            <h2 class="Task__title title-task">{{ par.title }}</h2>
            <p class="Task__des des-task">{{ par.des }}</p>
        </div>
        <div class="task__plan plan-content">
            <div class="plan-content__add-block" >
                <input type="text" v-model="new_step">
                <div class="plan-content_save .save" 
                    @click="addNewPlanPunkt">+</div>
            </div>
            <div class="plans" >
                <div class="checkbox" 
                    
                    v-for="(el,i) of par.plan">
                    <label v-bind:for="i" class="checkbox-label" >
                        <input  class="checkbox" 
                            ref="checkbox"
                            type="checkbox" 
                            v-bind:id="i" 
                            @change="changeLenCheckbox"
                            name="option[]" 
                            :checked="par.plan[i]"/>
                        <label v-bind:for="i"> {{i}} </label>
                    </label>
                </div>
            </div>
            
            <div class="task__progress progress">
                <span>{{ progress_value }}%</span>
                <progress max="100" :value="progress_value"></progress>
                
            </div>
        </div>
        
        
    </div>
</template>

<style  lang="scss">
@import '../assets/main.scss';

.plan-content{
        position: relative;
        max-width: 500px;
        background-color: #fff;
        border-radius: 10px;
        color: #000;
        padding: 10px 30px;
        margin: 30px 0;
        
        .plan-content__add-block{
            
            width: 90%;
            height: 30px;
            display: flex;
            .plan-content_save{
                @extend .button;
                background-color: var(--bgc-primary);
                width: 40px;
                border-radius: 0 5px 5px 0;
                padding: 0px;
            }
            .plan-content_save:hover{transform: translateX(3px);}
            input{
                height: 100%;
                background-color: #0000003d;
                border-radius: 5px 0 0 5px;
                border: none;
                padding: 5px 10px;
            }
        }
    }

    .Task{
        position: relative;
        width: 100%;
        margin: 0 10px;
        .Task__mess{
            position: absolute;
            right: -10px;
        }
    }
    h2.title-task{
        font-size: 3em;
        text-align: center;
    }
    .des-task{
        max-width: 500px;
        background-color: #fff;
        border-radius: 10px;
        color: #000;
        padding: 10px 30px;
        margin: 30px 0;
    }
    
    
    .add-step{
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: #0000003d;
        border-radius: 5px;
        padding: 0px 0;
        text-align: center;
        box-sizing: border-box;
        color: #00000070;
        font-size: 1.2em;
    }
    input.checkbox[type="checkbox"]{
     display: none;
}
input.checkbox[type="checkbox"] + label{
    cursor: pointer;
    display: inline-block;
    padding-left: 34px;
    position: relative;
    vertical-align: middle;
}

input.checkbox[type="checkbox"]:checked + label{
    backface-visibility: hidden;
    animation: checked 200ms ease 1;
    color: #00bd7e;
}
input.checkbox[type="checkbox"]:checked + label:before{
       opacity: 1;
}
input.checkbox[type="checkbox"] + label:before {
    content: '';
    position: absolute;
    width: 9px;
    height: 5px;
    top: 9px;
    left: 11px;
    border: 2px solid #00bd7e;
    opacity: 0;
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

input.checkbox[type="checkbox"] + label:after {
     content: '';
     position: absolute;
     width: 20px;
     height: 20px;
     top: 3px;
     left: 5px;
     border: 2px solid #00bd7e;
     border-radius: 5px;

}

input.checkbox[type="checkbox"] + label:hover:before {
    border-color:#00bd7e;
    opacity: .7;
}
input.checkbox[type="checkbox"]:checked + label:before {
    border-color: #00bd7e;
}
.progress {
    margin: 30px 0;
    progress{background-color: #80808000;}
 
    progress::-webkit-progress-bar {
    /* style rules */
    border-radius: 10px;
    background-color: #00000000;
    }
    progress::-webkit-progress-value {
    /* style rules */
    border-radius: 10px;
    }
    progress::-moz-progress-bar {
    /* style rules */
    border-radius: 10px;
    }
    span{text-align: center;color: #00bd7e;font-weight: bold;margin: 0 30px;}
    // border-radius: 10%;
}
.message_block{
    background-color: #fff;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 5px 10px 10px 5px;
    border-left: #00bd7e 5px solid;
    color: #000;
    font-weight: 500;

    &.error{border-left: #9e1818 5px solid;background-color: #fbc4c4;}
}


</style>