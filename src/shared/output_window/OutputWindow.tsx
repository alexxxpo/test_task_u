import styles from './OutputWindow.module.css'
interface IOutputWindowProps {
    value: string | number;
    title?: string;
}

export function OutputWindow({value, title}: IOutputWindowProps) {
    return (
        <div className={styles.window}>
            <h2>{title}</h2>
            <span className={styles.value}>{value}</span>
        </div>
    )
}