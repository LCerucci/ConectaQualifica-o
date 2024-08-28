import Card from './Card.js'

export function Carousel({ courses }) {
    return (
        <div>
            {courses.map((course) => (
                <Card key={course.id} {...course} />
            ))}
        </div>
    )
}