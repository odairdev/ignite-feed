
import logo from '../../assets/img/Ignite_simbol.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )
}