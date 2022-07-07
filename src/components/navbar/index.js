import React from "react"
import './navbar.css'

export function Navbar() {
    return(
        <>
            <ul className="menu">
                <a href="/">Home</a>
                <a href="/adicionar-produto">Adicionar Produto</a>
                <a href="/contato">Contato</a>
            </ul>
        </>
    )
}

