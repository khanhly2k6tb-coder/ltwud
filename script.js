// Hiển thị thông báo khi người dùng nhấn nút khám phá

const exploreButton = document.querySelector(".button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("Chào mừng bạn đến với Việt Nam!");
    });
}


// Hiệu ứng khi người dùng cuộn trang

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});