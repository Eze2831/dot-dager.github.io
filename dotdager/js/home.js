"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const media = document.getElementById("media");
    const aside = document.getElementById("aside");
    const showBars = document.querySelector(".show");
    const navBars = document.querySelector(".show_nav");
    const listItems = navBars.querySelectorAll("li");
    const gameFondo = document.querySelector("h1");

    // Show nav
    showBars.addEventListener("click", (event) => {
        event.stopPropagation();
        navBars.style.display = "block";
    });

    // Show social media
    media.addEventListener("click", (event) => {
        event.stopPropagation(); 
        aside.style.display = "block";
    });

    // Menu closed out
    document.addEventListener("click", (event) => {
        if (!showBars.contains(event.target) && !navBars.contains(event.target)) {
            navBars.style.display = "none";
        }
    });

    // aside closed inside
    document.addEventListener("click", (event) => {
        if (!aside.contains(event.target) && !media.contains(event.target)) {
            aside.style.display = "none";
        }
    });

    // Closed menu li
    listItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation();
            navBars.style.display = "none";
            console.log("Menú cerrado por clic en li");
        });
    });

    /* modal game*/
    gameFondo.addEventListener("dblclick", () => {
        Swal.fire({
            title: "Tree-cutting game",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `,
            confirmButtonText: "PLAY",
            confirmButtonColor: "#28a745",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            cancelButtonColor: "#d33"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "game/index.html";
            }
        });
    });
    
});