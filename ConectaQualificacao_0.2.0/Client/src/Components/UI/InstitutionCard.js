export function InstitutionCard(props) {
    const institutionInfo = props;

    return (
        <div>
            <img src={institutionInfo.image} alt={institutionInfo.name} />
            <h1>{institutionInfo.name}</h1>
            <dl>
                <dt>Endereço:</dt>
                <dd>{institutionInfo.address}</dd>

                <dt>Email:</dt>
                <dd>{institutionInfo.email}</dd>

                <dt>Contato: </dt>
                <dd>{institutionInfo.contact}</dd>

                <dt>Link:</dt>
                <dd>{institutionInfo.Link}</dd>

                <Link to="/curso">Saiba Mais</Link>
            </dl>
        </div>
    )
}