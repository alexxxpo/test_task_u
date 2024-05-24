import styles from './OutputWindew.module.css'
interface IOutputWindowProps {
    value: string | number;
    title?: string;
}

export function OutputWindow({value, title}: IOutputWindowProps) {
    return (
        <div className={styles.window}>
            <h3>{title}</h3>
            {value}
        </div>
    )
}