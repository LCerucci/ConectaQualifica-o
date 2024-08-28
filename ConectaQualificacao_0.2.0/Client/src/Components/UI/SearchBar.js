export function SearchBar() {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const path = '/path/to/image.png';

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="search" placeholder="Pesquisar" />

                <button type="submit">
                    <img src={path} className="search-bar-icon" />
                </button>
            </form>
        </div>
    );
}