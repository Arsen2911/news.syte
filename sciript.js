
function openNav() {
    document.getElementById("mySidenav").style.width = "350px"; // Устанавливаем ширину панели
    document.getElementById("main").style.marginLeft = "350px"; // Сдвигаем основной контент
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; // Убираем ширину панели
    document.getElementById("main").style.marginLeft = "0"; // Возвращаем контент на место
}

document.addEventListener("click", function (event) {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("overlay");


    if (sidenav.style.width === "350px" && !sidenav.contains(event.target) && !event.target.closest("button")) {
        closeNav();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loadingBar = document.querySelector('.loading-bar');
    let width = 0;

    function increaseWidth() {
        if (width >= 100) {
            width = 0; // Reset the loading bar
        }
        width++;
        loadingBar.style.width = width + '%';
    }

    setInterval(increaseWidth, 50); 
});