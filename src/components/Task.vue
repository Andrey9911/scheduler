<script setup>
    import { ref, computed, onUpdated, onMounted, nextTick  } from 'vue';
    import { useRoute } from 'vue-router';
    import {useCounterStore} from '../stores.js';
    let active_add_block = ref(false);
    let checkboxArray = ref();
    let checkbox;
    let progress_value = ref();
    let checkbox_len = 100
        onMounted(() => {
            console.log(checkbox.length);
            checkboxArray = ref(checkbox)
            // checkbox_len = checkbox.length;

        })
        onUpdated(() => {
            // checkbox_len = checkbox.length
        })
       async function changeLenCheckbox()
       {
            console.log(checkboxArray.value.filter(el => el.checked).length);
            progress_value.value = Math.round(checkboxArray.value.filter(el => el.checked).length*100/checkbox.length)
            console.log(progress_value.value);
        }
        
    
    
    const router = useRoute();
    const useC = useCounterStore();

    const par = computed(() => {
        return useC.data_plan.find(el => el.id == router.query.id);
    })
    const progress = computed(() => {
          
        
    })

</script>

<template>
    <div class="Task">
        <div class="Task__name">
            <h2 class="Task__title title-task">{{ par.title }}</h2>
            <p class="Task__des des-task">{{ par.des }}</p>
        </div>
        <div class="task__plan plan-content">
            <div class="plan-content__add add-step" 
                @click="active_add_block = active_add_block ? false : true">+</div>
            <div class="plan-content__add-block" 
                v-if="active_add_block">
                <input type="text" v-model="new_step">
                <div class="plan-content_save save" 
                    @click="par.plan.new_step = false">+</div>
            </div>
            <div class="checkbox" 
                
                v-for="(el,i) of par.plan">
				<label v-bind:for="i" class="checkbox-label" >
					<input  class="checkbox" 
                        ref="checkbox"
                        type="checkbox" 
                        v-bind:id="i" 
                        @change="changeLenCheckbox"
                        name="option[]" />
					<label v-bind:for="i"> {{i}} </label>
         	    </label>
            </div>
        </div>
        <div class="task__progress progress">
            <progress :max="checkbox_len" :value="progress_value"></progress>
            <span>{{ progress_value }}%</span>
        </div>
        
    </div>
</template>

<style scoped lang="scss">

    .Task{
        width: 50%;
        margin: 0 10px;
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
    .plan-content{
        position: relative;
        max-width: 500px;
        background-color: #fff;
        border-radius: 10px;
        color: #000;
        padding: 10px 30px;
        margin: 30px 0;
        .plan-content__add{
            position: absolute;
            top: 10px;
            right: 10px;
        }
        .plan-content__add-block{
            width: 50%;
            height: 30px;
            display: flex;
            justify-content: space-between;
            .save{
                cursor: pointer;
                width: 30px;
                background-color: #0000003d;
                border-radius: 5px;
                padding: 0px 0;
                text-align: center;
                box-sizing: border-box;
                color: #00000070;
                font-size: 1.2em;
            }
            input{
                height: 100%;
                background-color: #0000003d;
                border-radius: 5px;
                border: none;
                padding: 5px 10px;
            }
        }
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
    progress{background-color: #00bd7e00;}
 
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
    span{color: #00bd7e;font-weight: bold;margin: 0 10px;}
    // border-radius: 10%;
}


</style>