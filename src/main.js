import string from './css'
const bofang = {
    id: undefined,
    timt: 50,
    ul: {
        deom1: document.querySelector("#deom1 pre code"),
        deom2: document.querySelector("#deom2"),
        deom3: document.querySelector("#deom1"),

    },
    n: 1,
    init: () => {
        bofang.ul.deom1.innerHTML = string.substring(0, bofang.n)
        bofang.ul.deom2.innerHTML = string.substring(0, bofang.n)
        bofang.play1()
        bofang.onc()
    },
    bo: () => {
        bofang.n += 1
        if (bofang.n > string.length) {
            clearInterval(bofang.id)
            return
        }
        bofang.ul.deom1.innerHTML = string.substring(0, bofang.n)
        bofang.ul.deom2.innerHTML = string.substring(0, bofang.n)
        hljs.highlightAll();
        bofang.ul.deom3.scrollTop = 9999
    },
    play1: () => {
        bofang.id = setInterval(bofang.bo, bofang.time);
    },
    evens: {
        "#tsop": "rm",
        "#play": "play1",
        "#Slow": "m",
        "#speed": "z",
        "#fast": "k"
    },
    onc: () => {
        for (let key in bofang.evens) {
            if (bofang.evens.hasOwnProperty(key)) {
                let value = bofang.evens[key]
                document.querySelector(key).onclick = bofang[value]
            }
        }
    },
    rm: () => {
        window.clearInterval(bofang.id)
    },
    m: () => {
        bofang.rm()
        bofang.time = 200
        bofang.play1()
    },
    z: () => {
        bofang.rm()
        bofang.time = 100
        bofang.play1()
    },
    k: () => {
        bofang.rm()
        bofang.time = 0
        bofang.play1()
    }
}

bofang.init()

