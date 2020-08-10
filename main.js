//單一物件
TweenMax.to('.box_00', 2, {
    //屬性
    x: 400,
    y: 300,
    // ease:Elastic.easeOut, //補間動畫
    // width : '200px',
    // height : '200px',
    repeat: 1,
    yoyo: true

    //repeatDelay: 1
});

//多物件
// TweenMax.to(['.box_01', '.box_02'], 1, {
//     x: 400
// });

//from  方向相反
TweenMax.from('.from', 10, {
    x: 400,
    repeat: 2,
    ease: Elastic.easeOut //補間動畫

});

TweenMax.to('.circle', .8, {
    rotation: 360,
    repeat: 1, //連續
    ease: Power0.easeNone //旋轉等速度
});


//縮放
TweenMax.to('.scale', 4, {
    //縮放
    scale: 10,
    rotation: 360, // 旋轉
    ease: Elastic.easeOut, //補間動畫
    opacity: 1,
    repeat: 1,
    yoyo: true //收回
    // scaleX: 3
    // scaleY: 3
});


TweenMax.to('.rotation', 2, {
    rotationX: 360,
    transformOrigin: '10 bottom 150', // bottom center top right left
    transformPerspective: 1200,
    scale: 2
});


TweenMax.fromTo('.fromto', 3, {
    x: 100
}, {
    x: 300,
    ease: Elastic.easeOut, //補間動畫
});


//選單
function menu(){
    TweenMax.staggerTo('.menu li' , 1 , {
        x: 200
    }, .3) //
}




