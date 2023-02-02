import styles from "./Footer.module.css"
import { BsGoogle, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.socialMedia}>
        
            <a><BsFacebook/></a>
            <a><BsTwitter/></a>
            <a><BsInstagram/></a>
            <a><BsGoogle/></a>
            <a>|</a>
                
         
          
          
        </div>
        <h3> Projeto para o desenvolvimento de conhecimentos em React</h3>

        
        <p>Mini Blog &copy; 2023</p>
    </footer>
}

export default Footer