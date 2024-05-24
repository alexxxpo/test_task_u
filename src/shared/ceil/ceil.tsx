import styles from './ceil.module.css'

interface ICeilProps {
    score: number;
    active?: boolean;
}

export const Ceil = ({ score, active }: ICeilProps) => {
    return (
        <div className={`${styles.container} ${active ? styles.active : ''}`}>
            <span className={styles.ceil}>
                {score}
            </span>
        </div>
    )
}