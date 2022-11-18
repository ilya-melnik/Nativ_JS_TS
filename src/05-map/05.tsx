import React from 'react';

export type ManType = {
    name: string,
    age: number

}
const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css', 'html', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    })

const devs = [
    {
        stack: ['css', 'html', 'js', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'react'],
        firstName: 'Alexandr', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]



const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),

]

const devs3 = people.map(dimychTransformator)
const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))


// const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to IT-Incubator!`)
export const createGreetingMessages = (people: Array<ManType>) => {
return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcom to IT-Incubator!`)
}




export const Map
    = () => {
    const familyName = ['illya', 'Natasha', 'Vova']
    const familyName2 = [{id:1, name:'illya'},{id:2, name:'Vova'},{id:3, name:'Alex'},]

    const familyListLi = familyName.map(name => <li>{name}</li>)
    const familyNameLi2 = familyName2.map(n => <li key={n.id}>{n.name}</li>)
    return (
        <div>
            <ul>
                {familyListLi}
                {familyNameLi2}
            </ul>
        </div>
    );
};

