function CourseContent({course}){
    return (
        <section>
            <img src={path}/>
            <h2>Informações do curso:</h2>  
            <p>
                {course.name}
            </p>
            <p>
                {course.description}
            </p>
            <h3>Especificações: </h3>
            <dl>
                <dt>Area:</dt>
                <dd>{course.field}</dd>
                <dt>Nível:</dt>
                <dd>{course.degree}</dd>
                <dt>Disponível:</dt>
                <dd>{course.tuitionFee !== ''? "Pago": "Gratuito"}</dd>
            </dl>
            <InstitutionCard />
        </section>
    );
}