export default function Button({text, loading, onClick}) {
    return (
        <button onClick={onClick}>{loading ? "loading" : text}</button>
    )
}
