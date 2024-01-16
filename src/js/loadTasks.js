// var fs = require('fs');

function load()
{
  var objs = [
      {id: 1,
        title: "Дела на 12.08.23",
        des: "Сегодня по плану рабоать над пет-проектом на vue совместно с обучением этого фреймворка",
        plan: {
          'Поход в магазин': true,
          'пракика на пет-проекте': false,
          'Изучение нового материала':false
        },
      },
      {id: 2,
        title: "Дела на 12.12.23",
        des: "Сегодня по плану hf,jnfm",
        plan: {
          'Поход в магазин': true,
          'Изучение нового материала':false
        },
      },
  ] 
  return objs
}

export default load;
