function AuthButton({ text, fn }) {

    return (
        <button onClick={fn}>
            {text}
        </button>
    )
}

export default AuthButton