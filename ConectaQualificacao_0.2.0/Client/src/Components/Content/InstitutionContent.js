import { Carousel } from "../UI/Carousel";

export function InstitutionContent(props){
    const institution = props;
    return (
        <section>
            <img src={path}/>
            <h2>Informações da Instituição:</h2>       
            <dl>
                <dt>Email:</dt>
                <dd>{institution.email}</dd>
                <dt>contact:</dt>
                <dd>{institution.contact}</dd>
                <dt>Nível de ensino:</dt>
                <dd>{institution.educationLevel}</dd>
                <dt>Adress:</dt>
                <dd>{institution.address}</dd>
                <dt>Link:</dt>
                <dd><a href={institution.link} target="_blank" rel="noopener noreferrer"/></dd>
            </dl>
            <h3>Sobre a {institution.name}: </h3>
            <p>
                {institution.description}
            </p>
            <h3>Cursos desta instituição:</h3>
            <Carousel {...institution.courses}/>
            
        </section>
    )
}