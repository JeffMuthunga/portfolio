let button = document.getElementById("element1");
function openurl() {
    alert('You are now leaving the page!!');
    window.open('https://github.com/Muthunga');   
}
button.addEventListener("click", () => {
    openurl()
});