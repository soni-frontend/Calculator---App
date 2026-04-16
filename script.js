function press(num){
    document.getElementById("display").value+=num;
}

function calculate(){
    let result=
    document.getElementById("display").value;
    document.getElementById("display").value=eval(result);
}

function clearDisplay(){
    document.getElementById("display").value="";
}