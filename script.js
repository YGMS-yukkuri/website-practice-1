const header = document.querySelector("header");
const headerBtn = document.querySelector("header button");
const formName = document.querySelector("#name")
const formEmail = document.querySelector("#mail")
const formMessage = document.querySelector("#message")
const formButton = document.querySelector("#formBtn")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const changeHeader = () => {
    if (window.scrollY !== 0) {
        header.classList.add("leave");
        headerBtn.classList.add("leave");
    } else {
        header.classList.remove("leave");
        headerBtn.classList.remove("leave");
    };
}

const classMatch = (elem,judge) => {
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
        classMatch(formName,"ok")
    } else {
        result.push("ng")
        classMatch(formName,"ng")
    }

    if (emailRegex.test(formEmail.value)) {
        result.push("ok")
        classMatch(formEmail,"ok")
    } else {
        result.push("ng")
        classMatch(formEmail,"ng")
    }

    if (formMessage.value) {
        result.push("ok")
        classMatch(formMessage,"ok")
    } else {
        result.push("ng")
        classMatch(formMessage,"ng")
    }

    return result
}

const formSend = () => {
    console.log("OK");
    
}

window.addEventListener("scroll", () => {
    changeHeader();
});


changeHeader();



formButton.addEventListener("click", () => {
    temp = formCheck()
    console.log(temp)
    let error = [];
    let count
    temp.forEach((element,idx) => {
        if (element === "ng") {
            error.push(idx)
        }
        else {
            count++
        }
    });

    console.log(error);

    if (count === 3) {
        formSend()
    }
    
})