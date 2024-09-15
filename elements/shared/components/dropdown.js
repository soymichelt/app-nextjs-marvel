export const Dropdown = ({
    placeholder,
    value,
    onChange,
    data,
    renderItem,
    disabled,
}) => {
    return (
        <>
            <div>
                <select
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                >
                    <option value=''>{placeholder}</option>
                    {data && data.map(item => {
                        const {id, label} = renderItem(item)
                        return (
                            <option key={id} value={id}>
                                {label}
                            </option>
                        )
                    })}
                </select>
            </div>
            <style jsx>{`
                select {
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
                select:focus {
                    box-shadow: inset 0 1px 1px rgba(0,0,0,0.125), 0 0 8px #263238;
                }
                select > option {
                    font-size: 16px;
                    font-family: 'Proxima-Soft';
                }
                @media only screen and (min-width: 680px) {
                    select {
                        width: 180px;
                    }
                }
            `}</style>
        </>
    )
}