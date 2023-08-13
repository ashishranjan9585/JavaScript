let count = 0 
const btn = document.querySelector('.btn')
count++
btn.addEventListener('click' , () => {
    count++;
    if(count%2 == 0){
        document.body.style.background = 'black'
    }
    else{
        document.body.style.background = 'white'
    }
})