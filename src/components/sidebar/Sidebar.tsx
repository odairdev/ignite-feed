import { PencilLine } from 'phosphor-react'

import sidebarImg from '../../assets/img/sidebar-img.svg'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.sidebarImg} src={sidebarImg} alt="sidebar image" />
      <div className={styles.profileInfo}>
        <div className={styles.avatar}>
          <img src='https://github.com/odairdev.png' alt="avatar" />
        </div>
        <p>Odair J. C. Junior</p>
        <span>Developer</span>
      </div>
      <div className={styles.profileAction}>
        <a href='#'><PencilLine size={20}/> Editar Perfil</a>
        
      </div>
    </aside>
  )
}