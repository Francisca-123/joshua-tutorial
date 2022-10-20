function calcute(){
    a = parseInt(document.getElementById("first").value)
    b = parseInt(document.getElementById("sec").value)
    operation = document.getElementById("operation").value
    document.getElementById("err").innerHTML = " "

    if (operation == "add"){
        add(a,b)
    }

    else if (operation == "sub"){
        sub(a,b)
    }

    else if (operation == "divide"){
        divide(a,b)
    }

    else if(operation == "multi"){
        multiply(a,b)
    }
    else {
        document.getElementById("err").innerHTML = "Error. Please chose an Operand "
    }
}

function add(a,b){
    
    result = a + b 
    document.getElementById("ans").value = result
}

function sub(a,b){
    
    result = a - b 
    document.getElementById("ans").value = result
}

function divide(a,b){
    
    result = a / b 
    document.getElementById("ans").value = result
}

function multiply(a,b){
    
    result = a * b 
    document.getElementById("ans").value = result
}

