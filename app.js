const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;


// apply cached theme on reload
const theme = localStorage.getItem("theme");

if (theme){
    body.classList.add(theme);
}

darkButton.onclick = () => {

    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");

};

lightButton.onclick = () => {

    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
};

