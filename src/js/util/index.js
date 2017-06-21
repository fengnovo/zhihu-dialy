
export function getd2(newD){
    newD = new Date(newD)
    function f(x){
        return x > 9 ? x : '0'+x
    }
    return newD.getFullYear()+''+f(newD.getMonth()+1)+''+f(newD.getDate())
}

export function getd1(da){ //20170520
    da = da+'';
    var y = da.slice(0,4);
    var m = da.slice(4,6);
    var d = da.slice(6,8);

    var preDa = new Date(y,m-1,d).getTime() - 86400000;

    console.log(getd2(preDa))
    return getd2(preDa)
    
}

export function getd3(newD){ //20170520
    newD = newD+'';
    var y = newD.slice(0,4)+'/';
    var m = newD.slice(4,6)+'/';
    var d = newD.slice(6,8);
    newD = new Date(y+m+d)
    function f(x){
        return x > 9 ? x : '0'+x
    }
    return f(newD.getMonth()+1)+'月'+f(newD.getDate())+'日 '+ ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'][newD.getDay()];  
    
}


export function imgUrl(url) {
    if(url && url.indexOf('zhimg.com')!=-1){
        return 'http://111.230.139.105:9999'+url.slice(url.indexOf('zhimg.com')+9)
    }else{
        return url
    }
}

export function changeTime(d) {
    var date = new Date(d*1000);
    function zeto(num) {
        return num > 9 ? num : ('0'+num);
    }
    return zeto(date.getMonth()+1)+'-'+zeto(date.getDay())+' '+zeto(date.getHours())+':'+zeto(date.getMinutes())
}

export const condeurl = 'https://cnodejs.org/api/v1'