// Use a function to call the backend server.
document.getElementById("free99").addEventListener("submit", addInitialCards);

let baseUrl = `http://localhost:3000`;

//make a submit function that displays 20 pictures to the user. that sohul be displayed on the second page

//make a function that keep traks of the like and dislikes. all the like photos should be added to the firstReviewLikes collection

//make a function that puts 0-5 photos in the third page, and should be added to the secondReviewLikes collection

//make a function that displays the last image chosen

//this is where we call initial POST from our backend
async function addInitialCards(e) {

    //keep it from refreshing
    e.preventDefault()

    const userDestinationInput = document.getElementById("destination").value;
    const userLocationInput = document.getElementById("location").value;

    const response = await fetch(`${baseUrl}/firstReview`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            destination: userDestinationInput,
            location: userLocationInput
        })
    })
    await response.json()
    location.reload()
}



function handleSubmit(e) {
    e.preventDefault();

    const userDestinationInput = document.getElementById("destination").value;
    const userLocationInput = document.getElementById("location").value;



    //fetches backend api
    fetch(url)
        .then((response) => response.json())
        .then((pictures) => addPictures(pictures.results));
}

function addPictures(pictures) {

    const random = Math.floor(Math.random() * pictures.length);
    const photoURL = pictures[random].urls.thumb;

    const userDestinationInput = document.getElementById("destination").value;
    const userLocationInput = document.getElementById("location").value;

    document.createElement("div").classList.add("card");

    document.createElement("div").innerHTML = `
    <div class="card-body">
    <img class="card-img-top" src =${photoURL}>
        <h5 class="card-title">${userDestinationInput}</h5>
        <p class="card-text">${userLocationInput}</p>
    </div>`;
}

function resetForm() {
    document.getElementById("destination").value = "";
    document.getElementById("location").value = "";
    document.getElementById("photo").value = "";
}

function deleteCard(btn) {
    btn.parentElement.parentElement.remove();
}

function handleEdit(e) {

    const oldDestination = e.parentElement.children[0];
    const oldLocation = e.parentElement.children[1];

    const oldPhoto = e.parentElement.parentElement.children[0];

    const newDestination = prompt("New Destination", oldDestination.innerText);
    const newLocation = prompt("New Location", oldLocation.innerText);
    const newPhoto = promt("New Photo", oldPhoto.getAttribute("src"));

    if (newDestination !== "") {
        oldLocation.innerText = newDestination;
    }

    if (newLocation !== "") {
        oldLocation.innerText = newLocation;
    }

    if (newPhoto !== "") {
        oldPhoto.setAttribute("src", newPhoto);
    }

}