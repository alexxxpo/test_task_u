import './ceil.css'

interface ICeilProps {
    score: number;
    active?: boolean;
}

export const Ceil = ({ score, active }: ICeilProps) => {
    return (
        <div className={`ceil__container ${active ? 'active' : ''}`}>
            <span className="ceil">
                {score}
            </span>
        </div>
    )
}