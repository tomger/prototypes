import { Data, Override, MotionValue, animate } from "framer"

const data = Data({
    opacity: 0,
    photo: 0,
})
setInterval(_ => {
    data.opacity = data.opacity === 1 ? 0 : 1
}, 800)

setTimeout(_ => {
    data.photo = 1
}, 7000)
export function Loader(): Override {
    return {
        animate: { opacity: data.opacity },
        transition: {
            ease: "easeIn",
            duration: data.opacity === 1 ? 0.7 : 0.8,
        },
    }
}

export function Photo(): Override {
    return {
        animate: { opacity: data.photo },
        transition: {
            ease: "linear",
            duration: 0.2,
        },
    }
}
