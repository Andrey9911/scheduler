import { defineStore } from 'pinia'

  export const useCounterStore = defineStore('counter', {
    state: () => (
        {
          data_plan:[
            {
              id:1,
              pin: false,
              title: 'Дела на 12.08.23',
              des: 'Сегодня по плану рабоать над пет-проектом на vue совместно с обучением этого фреймворка',
              plan: {
                'Поход в магазин': true,
                'пракика на пет-проекте': false,
                'Изучение нового материала':false
              }
            },
            {
              id:2,
              pin: false,
              title: '12.12.23',
              des: 'чтото зделать',
              plan: {
                'fwfwefewf': true,
                'repvfo okdfvmsfvfsv': false
              }
            },
            {
              id:3,
              pin: false,
              title: 'sxcv ffwfef',
              des: 'frfvv vervverv vervevrev rverv',
              plan: {
                'fwfwefewf': true,
                'repvfo okdfvmsfvfsv': false
              }
            },
            {
              id:4,
              pin: false,
              title: 'ewerweruummnn f ',
              des: 'frfvv vervverv vervevrev rverv',
              plan: {
                'fwfwefewf': true,
                'repvfo okdfvmsfvfsv': false
              }
            }
          ],
          arrayPin:[]
        }
      ),
    getters: {
      getAll(){return this.data_plan},
      getLen(){return this.data_plan.length}
    },
    actions: {
      add(data) {
        this.data_plan.plan.data = false
        console.log(datathis.data_plan);
      },
      setPin(rec){
          let pinobj = rec
          pinobj.id = 1

          this.data_plan.slice(this.data_plan.find((item) => rec.id == item.id))
          this.arrayPin.push(pinobj)

      },
      setObj(data)
      {
        this.data_plan.push(data)
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