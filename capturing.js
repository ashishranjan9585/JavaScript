const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", (e) => {
    console.log("GrandParent");
}, { capture: false });
parent.addEventListener("click", (e) => {
    console.log("Parent");
}, { capture: false });
child.addEventListener("click", (e) => {
    console.log("Child");
}, { 
    capture: false 
});