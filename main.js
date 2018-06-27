(function () {
  'use strict'

  var vm = new Vue({
    el: '#app',

    data: {
      schedules:[{
        time: '8:00',
        isDone: null
      },{
        time: '9:00',
        isDone: null
      },{
        time: '10:00',
        isDone: null
      },{
        time: '11:00',
        isDone: null
      },{
        time: '12:00',
        isDone: null
      },{
        time: '13:00',
        isDone: null
      },{
        time: '14:00',
        isDone: null
      },{
        time: '15:00',
        isDone: null
      },{
        time: '16:00',
        isDone: null
      },{
        time: '17:00',
        isDone: null
      },{
        time: '18:00',
        isDone: null
      },{
        time: '19:00',
        isDone: null
      },{
        time: '20:00',
        isDone: null
      },{
        time: '21:00',
        isDone: null
      }
      ]
    },

    // ローカルストレージにデータを保存
    // watch: {
    //   todos: {
    //     handler: function(){
    //       localStorage.setItem('todos', JSON.stringify(this.todos));
    //     },
    //   deep: true
    //   }
    // },

    // ローカルストレージからデータをロード
    // mounted: function(){
    //   this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    // },

    methods: {
      trueItem: function (index){
        this.schedules[index].isDone = true;
        },
      falseItem: function (index){
        this.schedules[index].isDone = false;
      }
    },

    computed: {
      remaining: function () {
        return this.todos.filter(function(todo){
          return !todo.isDone;
        });
      },
      workstime: function() {
        return this.schedules.filter(function(schedule){
          return schedule.isDone;
        });
      }
    }



  });
})();
