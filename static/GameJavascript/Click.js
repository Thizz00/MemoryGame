function clickFunction() {
    var input = document.getElementById('inputuser').value;

    if (input.length!=0&&input.length>=7) {
        
        window.location.href = 'Choose.html';
    }
    else {  const input = document.getElementById("inputuser");
                input.value = "";
             input.placeholder = "Enter at least 7 characters";
        return false;
    }
}