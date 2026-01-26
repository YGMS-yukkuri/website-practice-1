const header = document.querySelector("header");
const headerBtn = document.querySelector("header a:nth-child(4)");
const headerHumb = document.querySelectorAll(".humb div")
const humb = document.querySelector(".humb")
const headerContainer = document.querySelector(".HeaderContainer")

const formName = document.querySelector("#name")
const formEmail = document.querySelector("#mail")
const formMessage = document.querySelector("#message")
const formButton = document.querySelector("#formBtn")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const aboutus = document.querySelector(".aboutus")
const expert = document.querySelector(".expert")
const news = document.querySelector(".news")
const ShowModalBtn = document.getElementById("SmodalBtn")
const CloseModalBtn = document.getElementById("CmodalBtn")
const Dialog = document.querySelector("dialog")

let isShowHumb = false;
let isLeave = false;

const changeHeader = () => {
    if (isShowHumb) return;

    if (window.scrollY !== 0) {
        header.classList.add("leave");
        headerBtn.classList.add("leave");
        headerHumb.forEach(elem => {
            elem.classList.add("leave")
        })
        isLeave = true;
    } else {
        header.classList.remove("leave");
        headerBtn.classList.remove("leave");
        headerHumb.forEach(elem => {
            elem.classList.remove("leave")
        })
        isLeave = false;
    };
}

const classMatch = (elem, judge) => {
    if (judge === "ok") {
        elem.classList.remove("red")
    } else {
        elem.classList.add("red")
    }
}

const formCheck = () => {
    let result = [];
    if (formName.value) {
        result.push("ok")
        classMatch(formName, "ok")
    } else {
        result.push("ng")
        classMatch(formName, "ng")
    }

    if (emailRegex.test(formEmail.value)) {
        result.push("ok")
        classMatch(formEmail, "ok")
    } else {
        result.push("ng")
        classMatch(formEmail, "ng")
    }

    if (formMessage.value) {
        result.push("ok")
        classMatch(formMessage, "ok")
    } else {
        result.push("ng")
        classMatch(formMessage, "ng")
    }

    return result
}

const formSend = () => {
    console.log("OK");
    formButton.textContent = "送信完了！"
    formButton.classList.add("send")
    setTimeout(() => {
        formButton.classList.remove("send")
        formButton.textContent = ("送信する")
        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";
    }, [5000])
}

const movetoTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

const movetoAbout = () => {
    const CliY = aboutus.getBoundingClientRect().top
    const ScY = window.scrollY
    const Y = CliY + ScY
    window.scrollTo({
        top: Y,
        left: 0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll", () => {
    changeHeader();
});

humb.addEventListener("click", () => {
    if (isShowHumb) {
        headerContainer.classList.remove("showhumb")
        isShowHumb = false;
        if (!isLeave) {
            header.classList.remove("leave");
            headerBtn.classList.remove("leave");
            headerHumb.forEach(elem => {
                elem.classList.remove("leave")
            })
        }
        changeHeader()
    } else {
        headerContainer.classList.add("showhumb")
        isShowHumb = true;
        if (!isLeave) {
            header.classList.add("leave");
            headerBtn.classList.add("leave");
            headerHumb.forEach(elem => {
                elem.classList.add("leave")
            })
        }
    }
})

changeHeader();



formButton.addEventListener("click", () => {
    temp = formCheck()
    console.log(temp)
    let error = [];
    let count = 0
    temp.forEach((element, idx) => {
        if (element === "ng") {
            error.push(idx)
        }
        else {
            count++
        }
    });
    if (count === 3) {
        formSend()
    }

    console.log(error);
})

ShowModalBtn.addEventListener("click", () => {
    Dialog.showModal()
})

CloseModalBtn.addEventListener("click", () => {
    Dialog.close()
})