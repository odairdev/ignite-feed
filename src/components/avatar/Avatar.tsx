
import styles from './Avatar.module.css'

interface AvatarProps {
  avatarURL: string;
  border?: boolean;
}

export function Avatar({avatarURL, border = true}: AvatarProps) {
  return (
    <img src={avatarURL} className={border ? styles.avatar : styles.avatarClean} alt="avatar" />
  )
}