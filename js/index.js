const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const userResults = data["results"];
    
    displayUsers(userResults);
};

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
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

getData();