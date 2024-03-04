import { defineStore } from 'pinia';
// import { createFile } from "../db/serialized_file";

  export const useCounterStore = defineStore('counter', {
    state: () => (
        {
          message: {},
          data_plan:[
            // {
            //   id:1,
            //   pin: false,
            //   title: 'Дела на 12.08.23',
            //   des: 'Сегодня по плану рабоать над пет-проектом на vue совместно с обучением этого фреймворка',
            //   plan: {
            //     'Поход в магазин': false,
            //     'пракика на пет-проекте': false,
            //     'Изучение нового материала':false
            //   }
            // },
            // {
            //   id:2,
            //   pin: false,
            //   title: '12.12.23',
            //   des: 'чтото зделать',
            //   plan: {
            //     'fwfwefewf': false,
            //     'repvfo okdfvmsfvfsv': false
            //   }
            // },
            // {
            //   id:3,
            //   pin: false,
            //   title: 'sxcv ffwfef',
            //   des: 'frfvv vervverv vervevrev rverv',
            //   plan: {
            //     'fwfwefewf': false,
            //     'repvfo okdfvmsfvfsv': false
            //   }
            // },
            // {
            //   id:4,
            //   pin: false,
            //   title: 'ewerweruummnn f ',
            //   des: 'frfvv vervverv vervevrev rverv',
            //   plan: {
            //     'fwfwefewf': false,
            //     'repvfo okdfvmsfvfsv': false
            //   }
            // }
          ],
        }
      ),
    getters: {
      getAll(){return this.data_plan},
      getLen(){return this.data_plan.length},
      getMess(){return this.message}
      
    },
    actions: {
      add(rec,data) { 
        this.data_plan[rec.id - 1].plan[data] = false
        console.log(this.data_plan);
      },
      setPin(rec){
        let container;
        container = this.data_plan.find((el) => el.id == rec.id)
        this.data_plan[rec.id - 1] = this.data_plan[0]
        this.data_plan[0] = container
        setTimeout(() => {container = undefined})
        // this.data_plan.forEach((el,ind) => {
            
        // });
      },
      setObj(data)
      {
        this.data_plan.push(data)
      },
      del(rec)
      { 
        this.data_plan.splice((rec - 1),1)
        console.log(this.data_plan);
      },
      sendMess(mess){
        setTimeout(()=>{this.message = {}},1000);
        this.message.text = String(mess.text_mess);
        this.message.isError = Boolean(mess.error)
        console.log(this.message);
      }
    }
    },
  )

  export  function dataTask(id, pin, title, des, plan) {
        this.id = id
        this.pin = pin
        this.title = title
        this.des = des
        this.plan = plan
  } 