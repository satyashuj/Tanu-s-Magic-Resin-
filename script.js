document.addEventListener("DOMContentLoaded", function(){

    function order(){
        alert("Order ke liye WhatsApp par contact kare");
    }

    function searchProduct(){
        let input = document.getElementById("searchBox")?.value.toLowerCase();
        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(input) ? "block" : "none";
        });
    }

    function customOrder(){
        alert("Custom order request bhej diya gaya!");
    }

    /* LIKE SYSTEM */
    let count = localStorage.getItem("likes") || 0;

    let likeCountEl = document.getElementById("likeCount");
    let likeBtn = document.getElementById("likeBtn");

    if(likeCountEl){
        likeCountEl.innerText = count;
    }

    if(likeBtn){
        likeBtn.addEventListener("click", function(){

            if(localStorage.getItem("liked")){
                alert("You already liked ❤️");
                return;
            }

            count++;
            localStorage.setItem("likes", count);
            localStorage.setItem("liked", true);

            likeCountEl.innerText = count;
        });
    }

    /* GLOBAL ACCESS (important) */
    window.order = order;
    window.searchProduct = searchProduct;
    window.customOrder = customOrder;

});
