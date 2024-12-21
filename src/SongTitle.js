function SongTitle({ active, children }) {
  return (
    <h1 style={{ color: active ? "green" : "black" }}>{children}</h1>
  );
}

export default SongTitle;