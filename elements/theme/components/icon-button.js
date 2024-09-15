export const IconButton = ({
    url,
    alt,
    size
}) => {
    return (
        <>
            <img src={`${url}`} alt={`${alt}`} className={`${size}`} />
            <style jsx>{`
                img {
                    object-fit: cover;
                    transition: .3s opacity;
                }
                img:hover {
                    opacity: .7;
                }
                img.sm {
                    width: 16px;
                    height: 16px;
                }
                img.md {
                    width: 24px;
                    height: 24px;
                }
                img.lg {
                    width: 32px;
                    height: 32px;
                }
            `}</style>
        </>
    );
};