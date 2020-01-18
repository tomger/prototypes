import { Override, Data } from "framer"

var data = Data({
    typing: false,
})

export function Container2(): Override {
    return {
        animate: {
            top: data.typing ? 20 : 296,
        },
        transition: { duration: 0.2 },
    }
}

export function Keyboard(): Override {
    return {
        animate: {
            top: data.typing ? 451 : 667,
        },
        transition: {
            delay: 0.1,
            duration: 0.17,
        },
    }
}

export function KeywordField(): Override {
    return {
        onTap: () => {
            data.typing = true
        },
        animate: {
            width: data.typing ? 270 : 346,
        },
        transition: {
            delay: 0.1,
            duration: 0.17,
        },
    }
}

export function KeywordFieldCursor(): Override {
    return {
        opacity: data.typing ? 1 : 0,
    }
}

export function SearchResults(): Override {
    return {
        opacity: data.typing ? 0 : 1,
    }
}

export function KeywordResults(): Override {
    return {
        opacity: data.typing ? 1 : 0,
    }
}

export function CancelButton(): Override {
    return {
        onTap: () => {
            data.typing = false
        },
        animate: {
            opacity: data.typing ? 1 : 0,
            left: data.typing ? 296 : 330,
        },

        transition: {
            delay: 0.1,
            duration: 0.15,
        },
    }
}
