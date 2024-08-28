function Body({ Content, targetPage }) {
    return (
    <main>
        <h1>{targetPage}</h1>
        {Content}
    </main>
    );
}