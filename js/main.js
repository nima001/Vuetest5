
Vue.directive('pin',function (el,val) {
    var pined = val.value;
    console.log("pined",pined);
    if(pined){
        el.style.position='fixed';
        el.style.top='10';
    }
})

new Vue({
    el:'#app',
    data:{
        card1:{
            pin:true,
        },
        card2:{
            pin:false,
        },
    }
})