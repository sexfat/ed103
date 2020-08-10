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
function menu() {
    TweenMax.staggerTo('.menu li', 1, {
        x: 200
    }, .3) //
}

// TimelineMax 時間軸動畫



//按鈕物件
var playbtn = document.getElementById('play');
var pausebtn = document.getElementById('pause');
var reversebtn = document.getElementById('reverse');

//動畫
var tl = new TimelineMax({
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
    //    onComplete : wram  //callback function
});
// callback function
function wram() {
    alert('完成');
}

// TweenMax.to('.tl1' , 1 , {x: 300})
// TweenMax.to('.tl2' , 1 , {y: 100})
// TweenMax.to('.tl3' , 1 , {x: 100 , y :400})

tl.to('.tl1', .5, {
    x: 300,
    // repeat: 1
}).to('.tl2', .5, {
    y: 100
}).to('.tl3', .5, {
    x: 100,
    y: 400
});


// 執行函式
playbtn.onclick = function () {
    tl.play();
}
pausebtn.onclick = function () {
    tl.pause();
}
reversebtn.onclick = function () {
    tl.reverse();
}

// scroll magic 基本設定
// 1 step
var controller = new ScrollMagic.Controller();

// 2step1
var tlscroll =  new TimelineMax();
tlscroll.to('.scoll01', 1, {x: 300}).to('.scoll01' , 1 , {y: 60}).to('.scoll01' ,4 , {
    rotationX: 360,
    transformOrigin: '10 bottom 150', // bottom center top right left
    transformPerspective: 1200,
})

// 3step
var scense01 = new ScrollMagic.Scene({
    triggerElement: '#trigger01',
    triggerHook: 0.5,
    reverse : true, // 動畫返回 true/不返回false
    offset : 0,  // 改變start觸發點
    duration : 300 //距離

}).setTween(tlscroll).addIndicators().addTo(controller);