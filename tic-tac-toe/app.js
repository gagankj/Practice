const box=document.getElementsByClassName("inside-rows");
console.log(box);


let count=1;
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",func);
    
}

function func(){
    if(count%2==1){
        this.innerText="O";
        
        this.removeEventListener("click",func)
        console.log(this);
    }
    else{
        this.innerText="X";
        this.removeEventListener("click",func)

    }
    // box[i].stop
    count++;
    check();
}
const row=document.getElementsByClassName("rows")
const win=document.getElementsByClassName("win");
function check(){
    const one=document.getElementById("one");
    const two=document.getElementById("two");
    const three=document.getElementById("three");
    const four=document.getElementById("four");
    const five=document.getElementById("five");
    const six=document.getElementById("six");
    const seven=document.getElementById("seven");
    const eight=document.getElementById("eight");
    const nine=document.getElementById("nine");
    
    if((one.innerText=="O" && two.innerText=="O" && three.innerText== "O") ||(one.innerText=="X" && two.innerText=="X" && three.innerText== "X")){
        // console.log("win");
        
        if(one.innerText=="O"){

            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
        
        
    }
    
    else if((four.innerText=="O" && five.innerText=="O" && six.innerText== "O") ||(four.innerText=="X" && five.innerText=="X" && six.innerText== "X")){
        // console.log("win");
        // win.innerText="You Won";
        if(four.innerText=="O"){
            
            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
        
    }
    else if((seven.innerText=="O" && eight.innerText=="O" && nine.innerText== "O") ||(seven.innerText=="X" && eight.innerText=="X" && nine.innerText== "X")){
        // console.log("win");
        // win.innerText="You Won";
        if(seven.innerText=="O"){
            
            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
    box[i].removeEventListener("click",func);
    
}

}
else if((one.innerText=="O" && four.innerText=="O" && seven.innerText== "O") ||(one.innerText=="X" && four.innerText=="X" && seven.innerText== "X")){
    // console.log("win");
    // win.innerText="You Won";
    if(one.innerText=="O"){
        
        win[0].innerText="O - Won";
    }
    else{
        win[0].innerText="X - Won";

    }
    for(let i=0;i<box.length;i++){
        box[i].removeEventListener("click",func);
        
    }
    
}
else if((two.innerText=="O" && five.innerText=="O" && eight.innerText== "O") ||(two.innerText=="X" && five.innerText=="X" && eight.innerText== "X")){
    // console.log("win");
    // win.innerText="You Won";
    if(two.innerText=="O"){

            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
    }
    else if((three.innerText=="O" && six.innerText=="O" && nine.innerText== "O") ||(three.innerText=="X" && six.innerText=="X" && nine.innerText== "X")){
        // console.log("win");
        // win.innerText="You Won";
        if(three.innerText=="O"){
            
            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
    }
    else if((one.innerText=="O" && five.innerText=="O" && nine.innerText== "O") ||(one.innerText=="X" && five.innerText=="X" && nine.innerText== "X")){
        // console.log("win");
        // win.innerText="You Won";
        if(one.innerText=="O"){
            
            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
    }
    else if((three.innerText=="O" && five.innerText=="O" && seven.innerText== "O") ||(three.innerText=="X" && five.innerText=="X" && seven.innerText== "X")){
        // console.log("win");
        // win.innerText="You Won";
        if(three.innerText=="O"){
            
            win[0].innerText="O - Won";
        }
        else{
            win[0].innerText="X - Won";
            
        }
        for(let i=0;i<box.length;i++){
            box[i].removeEventListener("click",func);
            
        }
        
    }
    
}

// const win2=document.getElementsByClassName("win");
const reset=document.querySelector("button")
reset.addEventListener("click",function(){
    for (let i = 0; i < box.length; i++) {
        // const element = array[i];
        box[i].innerText=""
        
    }
    
    count=1;
    win[0].innerText=""
})
