import styles from './Perfil.module.css';

const Perfil = ({avatar, nome}) => {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar} alt={nome} />
            <div className={styles.name}>{nome}</div>
        </div>
    )
}

export default Perfil;