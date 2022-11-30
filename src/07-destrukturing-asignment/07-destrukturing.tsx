import React from 'react';
import {ages} from "../04-filter/04";
type LessonsType = {
    title:number
}
type ManType = {
    name:string
    age:number
    isStudent: boolean
    lessons: Array<LessonsType>
}
export let man = {
    name: 'illia',
    age:26,
    isStudent: true,
    lessons: [{title:1}, {title:2}]
}

// destructuring array


const Destructuring: React.FC<ManType> = ({name, age, ...man}) => {

    return (
        <div>
            {name}
            {age}
            {man.isStudent }
            {man.lessons[0].title }
        </div>
    );
};

export default Destructuring;
