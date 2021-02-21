function Calculator(){
    //sum represet that place where our result of the calculation should show.
    this.sum = document.getElementById("result")
    //inputBill is input where user should write how much was him bill.
    this.inputBill = document.getElementById("inputBill").value;
    //selector take parcent whitch select by user.
    this.select = document.getElementById("select").value;
    this.number_of_people = document.getElementById("people").value

  
    this.comput = function() { 
        let new_inputBill = parseFloat(this.inputBill);
        let new_select = parseFloat(this.select);
        let new_number_of_people = parseFloat(this.number_of_people);
        let total;
        
        if( isNaN(new_inputBill) || isNaN(new_select) ){
            alert("Please enter values");
        }else if(new_number_of_people > 0){
            total = (new_inputBill * new_select) / 100;
            total /= new_number_of_people;
            this.sum.innerHTML = "Tip Amount " + total.toFixed(2) + "<sup>$</sup> <b>For Each</b>"; 
        }else{
            total = (new_inputBill * new_select) / 100;
            this.sum.innerHTML = "Tip Amount " + total.toFixed() + "<sup>$</sup>";
        }     
    }

 
}



function doing(){
    let create_Calculator = new Calculator();
    create_Calculator.comput()
}


