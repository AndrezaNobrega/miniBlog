import styles from './Home.module.css'


//hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

//components


const Home = () => {
    const [query, setQuery] = useState("")
    const [posts] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <h1 className={styles.home}>Posts mais recentes</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input type="text" placeholder='Busque por tags' onChange={(e => setQuery(e.target.value))}></input>
                <button className='btn btn-dark'>Pesquisar</button>
            </form>
            <div>                
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts</p>
                        <Link to="/posts/create" className='btn'>
                            Criar primeiro post da rede
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home