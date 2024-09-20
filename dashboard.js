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
});

// Add Money Button
document.getElementById("add-money").addEventListener("click", function(event) {
    event.preventDefault();
    let box1 = document.getElementById("box-1");  // Add Money box
    box1.classList.remove("hidden");  // Show Add Money form
    let box2 = document.getElementById("box-2");  // Cash Out box
    box2.classList.add("hidden");  // Hide Cash Out form
});







document.getElementById("add-money-total").addEventListener("click",function(event){
    event.preventDefault();
    let amount = document.getElementById("total-amount-value").innerHTML;
    let totalAmount = Number(amount);

    let enterAmount=document.getElementById("enter-amount").value;
    let EnterPassword=document.getElementById("enter-password").value;
    if(EnterPassword==="ariyan@321"){
        let NewEnterAmount=Number(enterAmount)
        totalAmount+=NewEnterAmount
        document.getElementById("total-amount-value").innerHTML=totalAmount;
}
})


document.getElementById("cash-out-total").addEventListener("click",function(event){
    event.preventDefault();
    let amount = document.getElementById("total-amount-value").innerHTML;
    let totalAmount = Number(amount);

    let enterAmount=document.getElementById("enter-amount").value;
    let EnterPassword=document.getElementById("enter-password").value;
    if(EnterPassword==="ariyan@321"){
        let NewEnterAmount=Number(enterAmount)
        totalAmount-=NewEnterAmount
        document.getElementById("total-amount-value").innerHTML=totalAmount;
}
})

