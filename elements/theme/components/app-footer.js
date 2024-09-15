export const AppFooter = () => {
    return (
        <>
            <footer>
                <div className='wrapper footer-content'>
                    <p>
                        Copyright © 2021 - <a href='https://soymichel.dev'>soymichel.dev</a>
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <a
                                    href='https://www.facebook.com/mtraatabladaa94'
                                    target='_blank'
                                >
                                    <img
                                        src='/facebook.png'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.youtube.com/mtraatabladaa94'
                                    target='_blank'
                                >
                                    <img
                                        src='/youtube.png'
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.facebook.com/mtraatabladaa94'
                                    target='_blank'
                                >
                                    <img
                                        src='/github.png'
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <style jsx>{`
                .footer-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    min-height: 3.5rem;
                }
                ul {
                    display: flex;
                }
            `}</style>
        </>
    );
};