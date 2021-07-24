export default function Button({ children, className, loading, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {loading ? "Loading" : children}
    </button>
  );
}
