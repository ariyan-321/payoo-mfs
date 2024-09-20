document.getElementById("log-out").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default action
    window.location.href = "index.html";});


// Cash Out Button
document.getElementById("cash-out").addEventListener("click", function(event) {
    event.preventDefault();
    let box2 = document.getElementById("box-2");  // Cash Out box
    box2.classList.remove("hidden");  // Show Cash Out form
    let box1 = document.getElementById("box-1");  // Add Money box
    box1.classList.add("hidden");  // Hide Add Money form
    let box3=document.getElementById("box-3")
    box3.classList.add("hidden")
});

// Add Money Button
document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();
    let box1 = document.getElementById("box-1");  // Add Money box
    box1.classList.remove("hidden");  // Show Add Money form
    let box2 = document.getElementById("box-2");  // Cash Out box
    box2.classList.add("hidden");  // Hide Cash Out form
    let box3=document.getElementById("box-3")
    box3.classList.add("hidden")
});




document.getElementById("transaction").addEventListener("click", function(event) {
    event.preventDefault();
    
    let box3 = document.getElementById("box-3");  // Transaction box
    box3.classList.remove("hidden");  // Show Transaction form
    
    let box2 = document.getElementById("box-2");  // Cash Out box
    box2.classList.add("hidden");  // Hide Cash Out form
    
    let box1 = document.getElementById("box-1");  // Add Money box
    box1.classList.add("hidden");  // Hide Add Money form
});








document.getElementById("add-money-total").addEventListener("click", function(event) {
    event.preventDefault();
    let amount = document.getElementById("total-amount-value").innerText;
    let totalAmount = Number(amount);

    let enterAmount = document.getElementById("enter-amount").value;
    let EnterPassword = document.getElementById("enter-password").value;

    if (EnterPassword === "ariyan@321") {
        let NewEnterAmount = Number(enterAmount);
        totalAmount += NewEnterAmount;
        document.getElementById("total-amount-value").innerHTML = totalAmount;

        // Corrected: Create a new <p> element using document.createElement, not trans.createElement
        let p = document.createElement("p");  
        p.innerText = `Added ${NewEnterAmount} taka, total balance ${totalAmount}`;  // Set the text content
        p.style.marginTop="10px"
        p.style.backgroundColor="green";
        p.style.color="white";
        p.style.borderRadius="10px"
        p.style.padding="2px 10px"
        let trans = document.getElementById("box-3");  // Get the transaction box
        trans.appendChild(p);  // Append the new <p> to the transaction box
    } else {
        alert("Your password is wrong");
    }
});



document.getElementById("cash-out-total").addEventListener("click",function(event){
    event.preventDefault();
    let amount = document.getElementById("total-amount-value").innerText;
    let totalAmount = Number(amount);

    let enterAmount=document.getElementById("enter-amount").value;
    let EnterPassword=document.getElementById("enter-password").value;
    if(EnterPassword==="ariyan@321"){
        let NewEnterAmount=Number(enterAmount)
        totalAmount-=NewEnterAmount
        document.getElementById("total-amount-value").innerHTML=totalAmount;


        let p = document.createElement("p");  
        p.innerText = `cash out ${NewEnterAmount} taka, total balance ${totalAmount}`;  // Set the text content
        p.style.marginTop="10px"
        p.style.backgroundColor="red";
        p.style.color="white";
        p.style.borderRadius="10px"
        p.style.padding="2px 10px"
        let trans = document.getElementById("box-3");  // Get the transaction box
        trans.appendChild(p); 
}
    else{
    alert("your password is wrong")
}
})

