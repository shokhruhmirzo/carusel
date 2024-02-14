var elList = document.querySelector('.list')
var count = 0

function right(){
    count = count - 1
    elList.style.transform = `translateX(-${800 * count}px)`
}

function left(){
    count = count + 1
    if(count < 5){
        elList.style.transform = `translateX(-${800 * count}px)`
    }else{
        count = 4   
    }
}