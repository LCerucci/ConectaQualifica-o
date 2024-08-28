import { Carousel } from "../UI/Carousel"

function HomeContent(){
    return (
        <section>
            <p>Cursos Gratuitos Espaço 4.0: </p>
            <Carousel {...courses}/>

            <p>Cursos Superiores: </p>
            <Carousel {...courses}/>

            <p>Cursos Técnicos: </p>
            <Carousel {...courses}/>

            <p>Instituições: </p>
            <Carousel {...institutions}/>
        </section>
    )
}