interface Props {
    className?: string;
    label: string;
    onClick: () => void;
}

export const Button = ({className, label, onClick}: Props) => {
    return (
        <button className={className} onClick={onClick}>라벨: {label}</button>
    );
}