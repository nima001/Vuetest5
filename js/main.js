
Vue.directive('pin',function (el,val) {
    var pined = val.value;
    console.log("pined",pined);
    if(pined){
        el.style.position='fixed';
        el.style.top='200px';
    }else{
        el.style.position='static';
        el.style.top='100px';
    }
})

new Vue({
    el:'#app',
    data:{
        card1:{
            pin:false,
        },
        card2:{
            pin:false,
        },
    }
})