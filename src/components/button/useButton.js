import { useState } from "react"

export default function useButton() {
    const [load, setLoad] = useState(false)
    return {setLoad, load}
}
