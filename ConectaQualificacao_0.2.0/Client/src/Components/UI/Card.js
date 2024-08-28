export function Card(props) {
    const course = props.course;
    return (
      <div className="card">
        <img src={course.image} alt={course.name} />
        <h1>{course.name}</h1>
        <dl>
          <dt>Faixa etária:</dt>
          <dd>{course.ageRange !== '' ? `${course.ageRange}` : 'Sem restrição de idade'}</dd>

          <dt>Gênero:</dt>
          <dd>{course.gender !== '' ? `${course.gender}` : 'Sem restrição de gênero'}</dd>

          <dt>Primeiro emprego: </dt>
          <dd>{course.firstJob === 1 ? 'Exclusivo para primeiro emprego.' : 'Não se aplica.'}</dd>

          <dt>Curso gratuito:</dt>
          <dd>{course.freeCourse === 1 ? 'Curso gratuito' : 'Curso Pago'}</dd>

          <Link to="/curso">Saiba Mais</Link>
        </dl>
      </div>
    );
  }

  //checar o modelo json para averiguar o display de informações
  