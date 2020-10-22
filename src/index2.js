import TweenMax from "gsap"; //gsap套件引入
import './style.scss';


TweenMax.to('.box' , 1 , {
    x: 200,
    repeat : -1,
    yoyo : false
})

console.log('app2 tweenmax');