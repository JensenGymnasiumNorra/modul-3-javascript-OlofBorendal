
function welcome() {
    const name = document.getElementById("nameInput").value;
    const favorite_food = document.getElementById("foodInput").value;

    if (name === ""|| favorite_food === ""){
         alert("Please enter name and favorite food");
    } else {
         alert("Welcome " + name + "!\n" + favorite_food  + " is great " );
    }

} 
