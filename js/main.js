
Vue.directive('pin',function (el,val) {
    var pined = val.value;
    var position = val.modifiers;//修饰符
    var arg = val.arg;//参数


    console.log("pined",pined);
    if(pined){
        for(var key in position){
            if(position[key]){
               el.style[key] ='100px';
            }
        }
        if(arg === 'true'){
            el.style.backgroundColor='yellow';
        }
        el.style.position='fixed';
    }else{
        el.style.backgroundColor='darkgray';
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