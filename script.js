function order(){
    alert("Order ke liye WhatsApp par contact kare");
}
function searchProduct(){
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if(text.includes(input)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function customOrder(){
    alert("Custom order request bhej diya gaya!");
}