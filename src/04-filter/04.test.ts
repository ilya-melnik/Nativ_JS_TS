import {ages, courses} from "./04";

test('should take old man older than 90', () => {


    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(3)
    expect(oldAges[0]).toBe(99)

})

test('should chose courses less then 150', () => {
    const filteredCourses = courses.filter(c => c.price < 150)

    expect(filteredCourses.length).toBe(2)
    expect(filteredCourses[1].price).toBe(130)
    expect(filteredCourses[0].title).toBe('css')
})

test('should take only isDone tasks', () => {
    const tasks = [
        {id: 1, title: 'html', isDone: true},
        {id: 2, title: 'css', isDone: true},
        {id: 3, title: 'react', isDone: false},
        {id: 4, title: 'js', isDone: true},
        {id: 5, title: 'ts', isDone: false},
    ]

    const isDoneTask = tasks.filter(t => t.isDone )

    expect(isDoneTask.length).toBe(3)
    expect(isDoneTask[1].title).toBe('css')
})
