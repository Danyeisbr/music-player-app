function Button({dataId, children}) {
    return (
        <button className={dataId}>
            {children}
        </button>
    )
}

export default Button;