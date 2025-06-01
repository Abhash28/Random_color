function color(){
    const randamnumber=Math.floor(Math.random()*1677215)
    const randomcode='#'+randamnumber.toString(16)
    document.body.style.backgroundColor= randomcode
    document.getElementById('colorcode').innerHTML=randomcode  
}
//event call
 const getnumber=document.getElementById('btn')
 getnumber.addEventListener("click",color)

//inital call
 color()
