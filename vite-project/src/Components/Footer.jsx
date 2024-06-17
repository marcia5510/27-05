import styles from './Footer.module.css'

function Footer(props) {
  return (
    <footer className={styles.footer}>
     <h1>Footer</h1> 
     <p>{props.anodeProducao}</p>  
    </footer>
    
  )
}

export default Footer