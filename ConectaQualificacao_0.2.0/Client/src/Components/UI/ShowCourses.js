import { Card } from "./Card";

export function ShowAllCourses(...props){
    const courses = props;
    return (
        <section>
            {
                courses.map((element) => {
                    <Card {...element}/>
                })
            }
        </section>
    );
}