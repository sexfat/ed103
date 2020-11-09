// import $ from "jquery";
// import TweenMax from "gsap"; 
import './sass/style.scss';
import Vue from "vue"
// import "./style.css"


$(document).ready(function(){
  $(".hide").click(function(){
    $(this).hide();
  });
});





$('.box').css('font-size','50px');
$('.box').css('width' , '500px');
console.log('jquery ok');

//

new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!  安裝成功真的嗎 '
    }
  });

  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  }) ;


  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });



 console.log('vue ok') 

// TweenMax.to('.box' , 1 , {
//     x:200
// })