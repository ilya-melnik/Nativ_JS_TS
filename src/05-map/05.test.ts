import {createGreetingMessages, ManType} from "./05";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})


test('should be say Hi for every student', () => {

    const messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-Incubator!")
    expect(messages[1]).toBe('Hello Alexandr. Welcom to IT-Incubator!')
    expect(messages[2]).toBe('Hello Dmitry. Welcom to IT-Incubator!')

})
