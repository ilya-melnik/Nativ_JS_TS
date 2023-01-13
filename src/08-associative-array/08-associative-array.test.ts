import {UserType} from "./08-associative-array";


let users: UserType
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dima'},
        '1543': {id: 1543, name: 'Nina'},
        '54443': {id: 54443, name: 'Ilya'},
        '1': {id: 1, name: 'Sasha'},
    }
})

test('should be update corresponding user', () => {
    users['101'].name = 'Ilya';

    expect(users['101'].name).toBe('Ilya')
})

test('should be toEqual obj ', () => {
    users['101'].name = 'Slava';

    expect(users['101']).toEqual({id: 101, name: 'Slava'})
})

test('should be deleted obj ', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})
