export default function SearchBar() {
    return (
        <form className="search-bar">
            <input type="text" placeholder="Busca por localização" />
            <button type="submit">Buscar</button>
        </form>
    );
}