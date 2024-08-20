

/*resdirection to challanges.html starts */
function Home_Page_Button() {
    window.open("https://mrhoba9.github.io/country/challenges.html","_blank");
}
/*resdirection to challanges.html finishes */
let header = document.querySelector(".header");
let shield = document.querySelector(".shield");
document.getElementById('menu-icon').addEventListener('click', function() {
    header.classList.add("show");
    document.getElementById('menu-icon').classList.add('hidden');
    document.getElementById('close-icon').classList.remove('hidden');
    shield.style.zIndex = "-5";
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('menu-icon').classList.remove('hidden');
    document.getElementById('close-icon').classList.add('hidden');
    header.classList.remove("show");
    shield.style.zIndex = "40";
});
