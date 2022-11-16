import {StudentType} from "../02-object-test/02";
import {AddSkill, doesStudentLiveIn, SwetchActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            StreetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            },
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})


test.skip( "new teach skill should be added to student", ()=>{
    AddSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
})

test.skip( "student should be made active", ()=>{
    SwetchActive(student, true)
    expect(student.isActive).toBe(true)
})

test( "does student live in City ?", ()=>{
    let res = doesStudentLiveIn(student, 'minsk')
    let res1 = doesStudentLiveIn(student, 'Minsk')
    expect(res).toBe(false)
    expect(res1).toBe(true)
})
