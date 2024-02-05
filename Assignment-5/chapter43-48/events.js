// event in js 

//  ---------------------- Q1 ----------------------

function displayAlert(){
    alert("Hello Sir How are you?");
}

// ---------------------- Q2 ----------------------

function purchase(){
    alert("Thanks for purchasing a phone from us");
}

// ---------------------- Q3 ----------------------

function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// ---------------------- Q4 ----------------------

function changeImage() {
    document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdcZhnv6JL072NiJRGw4OjxenD5O-B-Wx1Q&usqp=CAU";
}

function restoreImage() {
    document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdcZhnv6JL072NiJRGw4OjxenD5O-B-Wx1Q&usqp=CAU";
}

// ---------------------- Q5 ----------------------

const counterValueElement = document.getElementById("counter-value");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
let counterValue = 0;

function increaseCounter(){
    counterValue++;
    counterValueElement.innerHTML = counterValue;
}

function decreaseCounter(){
    if(counterValue > 0){
        counterValue--;
        counterValueElement.innerHTML = counterValue;
    }
}

