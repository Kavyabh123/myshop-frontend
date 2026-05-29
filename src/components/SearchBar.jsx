function SearchBar() {
  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <input
        type="text"
        placeholder="Search Electronics..."
        style={{
          width: "400px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
}

export default SearchBar;