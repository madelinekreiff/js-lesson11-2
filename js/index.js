const randomFolks = document.querySelector(".random-peeps");
const numUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("select");

// API to pull 5 random users information
const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data["results"];

    displayUsers(userResults);
};

// Function to display the user's country, name and avatar image on the web page
const displayUsers = function (userResults) {
    randomFolks.innerHTML = ""; // so the list isn't duplicated
    for (user of userResults) {
        let country = user.location.country; // or user["location"]["country"];
        let name = user.name.first; // or user["name"]["first"]
        let imageUrl = user.picture.medium; // or user["picture"]["medium"]
    
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageUrl} alt="User avatar">
            `;
        randomFolks.append(userDiv);
    }
};

numUsers.classList.remove("hide");

// A change event listener to select how many random users to display
selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;

    getData(numUsers);
});

// Creates initial display of users
getData(1);
