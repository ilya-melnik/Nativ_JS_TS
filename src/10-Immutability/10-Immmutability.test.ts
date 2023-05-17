import {
    addNewBooksToUser,
    changeLaptop, CompanyType,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBooksToUser, updateBooksToUser, updateCompanyTitle, updateCompanyTitle2,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkoreType, WithCompanisType
} from "./10-Immutability";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        },
    }
    const awesomeuser = makeHairstyle(user, 2)


    expect(awesomeuser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeuser.address).toBe(user.address)

})
test.skip('change address', () => {
    let user2: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const movedUser = moveUser(user2, 'Kiev')


    expect(user2).not.toBe(movedUser)
    expect(user2.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user2.laptop).toBe(movedUser.laptop)
})
test.skip('upgrade loptop to macbook', () => {
    let user3: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user3, 99)


    expect(user3).not.toBe(userCopy)
    expect(user3.books).toBe(userCopy.books)
    expect(user3.laptop).toBe(userCopy.laptop)
    expect(user3.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})
test.skip('add new books', () => {
    let user3: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user3, ['ts', 'rest api'])

    expect(user3).not.toBe(userCopy)
    expect(user3.laptop).toBe(userCopy.laptop)
    expect(user3.address).toBe(userCopy.address)
    expect(user3.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    // expect(userCopy.books[5]).toBe('rest api')

})
test.skip('update js to ts', () => {
    let user3: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBooksToUser(user3, 'js', 'ts')

    expect(user3).not.toBe(userCopy)
    expect(user3.laptop).toBe(userCopy.laptop)
    expect(user3.address).toBe(userCopy.address)
    expect(user3.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')


})
//????????????????????????????
// test('update skill of score', () => {
//     let user3: UserWithLaptopType &  UserWithBooksType & UserWithSkoreType= {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk',
//             house: 12
//         },
//         laptop:{
//             title: 'Lenovo'
//         },
//         books: ['css','html', 'js', 'react'],
//         skils: [10,50,70,100]
//     }
//
//     const userCopy = updateSkilsScore(user3,  70, 100)
//
//     expect(user3).not.toBe(userCopy)
//     expect(user3.laptop).toBe(userCopy.laptop)
//     expect(user3.address).toBe(userCopy.address)
//     expect(user3.books).toBe(userCopy.books)
//     expect(user3.skils[2]).toBe(100)
//     // expect(userCopy.books[2]).toBe('ts')
//
//
// })
test.skip('remove js', () => {
    let user3: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBooksToUser(user3, 'js')

    expect(user3).not.toBe(userCopy)
    expect(user3.laptop).toBe(userCopy.laptop)
    expect(user3.address).toBe(userCopy.address)
    expect(user3.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')


})
test.skip('update name of company', () => {
    let user3: UserWithLaptopType & WithCompanisType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        companis: [
            {
                id: 1,
                title: 'Эпам'
            },
            {
                id: 2,
                title: 'IT-incubator'
            },
        ]
    }

    const userCopy = updateCompanyTitle(user3, 1, 'EPAM') as UserWithLaptopType & WithCompanisType

    expect(user3).not.toBe(userCopy)
    expect(user3.address).toBe(userCopy.address)
    expect(user3.companis).not.toBe(userCopy.companis)
    expect(userCopy.companis[0].title).toBe('EPAM')
    expect(userCopy.companis[0]).not.toBe(user3.companis[0])


})

test('update company', () => {
    const companis = {
        'Dimych': [
            {id: 1, title: 'Эпам'},
            {id: 2, title: 'IT-incubator'}],
        'Artem': [{id: 2, title: 'IT-incubator'}]
    }

    const copy = updateCompanyTitle2(companis, 'Dimych', 1, 'EPAM')


    expect(copy['Dimych']).not.toBe(companis['Dimych'])
    expect(copy['Artem']).toBe(companis['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})
