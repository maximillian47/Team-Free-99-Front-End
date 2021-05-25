// Use a function to call the backend server.
document.getElementById("free99").addEventListener("submit", addCards);



function handleSubmit(e) {
    e.preventDefault();

    const userDestinationInput = document.getElementById("destination").value;
    const userLocationInput = document.getElementById("location").value;

    let url = `${userDestinationInput} ${userLocationInput}`;

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