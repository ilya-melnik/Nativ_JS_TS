import {man} from "./07-destrukturing";

test('', ()=>{


    // const age = man.age
    //or
    const {age} = man

    expect(age).toBe(26)
})


test('check for to strict Equal', ()=>{

    const array = man.lessons


    expect(array).toStrictEqual([{title:1}, {title:2}])
})
