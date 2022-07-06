import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar"
import './home.css'

function Home() {

    const [produtos, setProdutos] = useState([])

    function GetProdutos() {
        axios.get('http://localhost:8081')
            .then((response) => {
                setProdutos(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        GetProdutos()
    }, [])


    return (
        <>
            <Navbar />
            {
                produtos.map(produto => (
                    <div key={produto.id}>
                            <div className="main">
                            <div className="card-produto">
                                <p>{produto.nome}</p>
                                <p>{produto.descricao}</p>
                                <p>{produto.preco}</p>
                                <button className="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Home
