let myBtn = document.querySelector(".top-to-scroll");

const scrollToTop = () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    })
};

myBtn.addEventListener("click", scrollToTop);