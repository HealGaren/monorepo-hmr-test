interface Props {
    className: string;
    label: string;
}

export const Button = ({className, label}: Props) => {
    return (
        <button className={className}>{label}</button>
    );
}