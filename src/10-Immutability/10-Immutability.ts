import React from 'react';

export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export  type UserWithBooksType = UserType & {
    books: Array<string>
}
export type UserWithSkoreType = UserType & {
    skils: Array<number>
}
export type CompanyType = { id: number, title: string };
export type WithCompanisType = {
    companis: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, newCity: string) {
    return {...u, address: {...u.address, city: newCity}}
}

export function changeLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house: house}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    //1
// let copy =  {
//     ...u, books: [...u.books]
// }
// books.map(i=> copy.books.push(i))
//     return  copy
    // 2
    return {...u, books: [...u.books].concat(books)}


}

export function updateBooksToUser(u: UserWithLaptopType & UserWithBooksType, currentBook: string, newBook: string) {

    //1
    // let copy = {
    //     ...u,
    //     books: [...u.books]
    // }
    // let index = copy.books.indexOf(currentBook)
    // copy.books.splice(index,1,newBook)
    //
    // return copy

//2?
// return {...u, books: [...u.books].splice(u.books.indexOf(currentBook),1, newBook)} //Что не правильно с той записью ?
//3?
    return {...u, books: u.books.map(i => i === currentBook ? newBook : i)}

}

//????????????????????????????????????????????/
// export const updateSkilsScore = (u:UserWithLaptopType &  UserWithBooksType & UserWithSkoreType, oldSkill: number, newSkill:number) => ({...u, skils: u.skils.map(s=> s===oldSkill? newSkill:s)})

export const removeBooksToUser = (u: UserWithLaptopType & UserWithBooksType, oldBook: string,) => ({
    ...u,
    books: u.books.filter(b => b !== oldBook)
})
export const updateCompanyTitle = (u: WithCompanisType, idCompany: number, titleNewCompany: string) => ({
    ...u,
    companis: u.companis.map(c => c.id === idCompany ? {...c, title: titleNewCompany} : c)
})


export const updateCompanyTitle2 = (
    companies: { [key: string]: Array<CompanyType> }, userName: string,
    idCompany: number,
    titleNewCompany: string) => {

    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === idCompany ? {...c, title: titleNewCompany} : c)
    }

}

