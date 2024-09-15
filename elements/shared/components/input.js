export const Input = ({
    placeholder,
    value,
    onChange,
    disabled,
}) => {
    return (
        <>
            <div>
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
            <style jsx>{`
                input {
                    height: 44px;
                    padding: .7rem;
                    background-color: #fff;
                    outline: none;
                    border: 2px solid #263238;
                    width: 100%;
                    box-sizing: border-box;
                    font-family: 'Proxima-Soft';
                    font-size: 16px;
                    font-weight: 500;
                    transition: .5s;
                }
                input:focus {
                    box-shadow: inset 0 1px 1px rgba(0,0,0,0.125), 0 0 8px #263238;
                }
                @media only screen and (min-width: 680px) {
                    input {
                        width: 180px;
                    }
                }
            `}</style>
        </>
    )
}