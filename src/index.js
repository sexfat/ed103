import $ from "jquery";
import TweenMax from "gsap"; 
import './style.scss';
import './style2.scss';
// import "./style.css"


$('.box').css('color','black');
console.log('webpack ok');



TweenMax.to('.box' , 1 , {
    x:200
})