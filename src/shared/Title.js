import React from 'react'
import { useEffect } from 'react'

export default function Title({ title }) {
    useEffect(() => {
        document.title = `${title} | Lemon`
    }, [title])

    return (
        <></>
    )
}
