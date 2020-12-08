Vue.component('field', {
    props: ['a1'],
    template: '#field',
    methods: {
       blabla: function(){
          //Логика метода
          this.a1= 123;
       }
    }
  });
  let app = new Vue({
    el: '#wrapper',
    data: {
        //App
        showScrollToTop: false,
    },
