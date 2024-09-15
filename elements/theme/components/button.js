export const Button = ({
    className,
    children,
    onClick,
    disabled
}) => {
    return (
        <>
            <button className={`${className} ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
                {children}
            </button>
            <style jsx>{`
                button {
                    box-sizing: border-box;
                    min-width: 64px;
                    padding: .8rem 1rem;
                    color: #fff;
                    background: linear-gradient(to right, #c62828, #e53935);
                    border: none;
                    border-bottom: 4px solid #b71c1c;
                    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
                    border-radius: 4px;
                    outline: 0;
                    -webkit-appearence: none;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                    transition: .3s;
                }
                .disabled {
                    background: #e57373;
                }
                button:hover {
                    opacity: .8;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};