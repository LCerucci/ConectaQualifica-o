import { Course } from "./Course.js";

export class Institution{
    constructor(id=null, name=null, educationLevel=null, contact=null, email=null, address=null, link=null){
        this.name = name;
        this.educationLevel = educationLevel;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.link = link;
        this.courses = [];
        this.id = id;      
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    getEducationLevel(){
        return this.educationLevel;
    }

    setEducationLevel(educationLevel){
        this.educationLevel = educationLevel;
    }

    getContact(){
        return this.contact;
    }

    setContact(contact){
        this.contact = contact;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getAddress(){
        return this.address;
    }

    setAddress(address){
        this.address = address;
    }

    getLink(){
        return this.link;   
    }

    setLink(link){
        this.link = link;
    }

    getCourses(){
        return this.courses;
    }

    addCourse(course){
        if(course instanceof Course)
            this.courses.push(course);
    }

    returnCourseById(id){
        for(let value of this.courses)
            if(value.getId() === id)
                return value;
        
        return null;
    }

    returnInstitutionJson(){
        return {
            id: this.id, 
            name:  this.name,
            educationLevel: this.educationLevel,
            contact: this.contact,
            email: this.email,
            adress: this.address,
            link: this.link,
            courses: this.courses
        };
    }
}