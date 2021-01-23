function compute()
{
    principal = document.getElementById("principal").value;

    
    if (principal <=0) {
        alert("Please enter a valid number. ");
        document.getElementById("principal").focus();
    }

    else {
    rate = document.getElementById("rate").value;
    
    var years = parseInt(document.getElementById("years").value);
    
    interest = principal*years*rate/100;
    
    var today = new Date();
    
    var year = parseInt(today.getFullYear());
    var future_year = year+years;

    
    document.getElementById("result").innerHTML =
    
    "If you deposit: <mark>" + principal + "</mark><br>\
    at an interest rate of: <mark>" + rate + "%</mark><br>\
    You will receive an amount of <mark>" + interest + "</mark><br>\
    in the year: <mark>" + future_year + "</mark><br>";

    }
    
}

function rangeLabel(){
    document.getElementById("rangeLabelResult").innerHTML = document.getElementById("rate").value + "%";
}
        