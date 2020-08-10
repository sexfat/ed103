
//單一物件
TweenMax.to('.box_00', 2, {
    //屬性
    x: 400,
    y: 300,
    ease:Elastic.easeOut, //補間動畫
    // width : '200px',
    // height : '200px',
    repeat : 2,
    //repeatDelay: 1
});

//多物件
// TweenMax.to(['.box_01', '.box_02'], 1, {
//     x: 400
// });

//from  方向相反
TweenMax.from('.from' , 10 , {
   x: 400,
   repeat : 2,
   ease:Elastic.easeOut //補間動畫

});

TweenMax.to('.circle' , .8 , {
   rotation: 360,
   repeat: -1, //連續
   ease : Power0.easeNone //旋轉等速度
})


