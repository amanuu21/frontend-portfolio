function SearchBar({ search, setSearch }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px"
      }}
    >
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "white",
          fontSize: "16px",
          outline: "none"
        }}
      />
    </div>
  )
}

export default SearchBar