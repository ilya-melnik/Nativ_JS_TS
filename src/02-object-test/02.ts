export type StudentType = {
    id: number
    name: string,
    age: 32,
    isActive: boolean
    address: AddressType
    technologies: Array<technologiesType>
}
type AddressType = {
    StreetTitle:string,
    city: StudentCityType
}
type StudentCityType = {
    title: string,
    countryTitle: string
}
type technologiesType = {

    id:number;
    title: string;
}
export const student: StudentType = {
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







type UpStairsType = {
    kitchen: number,
    livRoom: number,
    badRoom: number
}
type DownStairsType = {
    kitchen: number,
    livRoom: number,
    badRoom: number
}
type MyHouseType = {
    address: string,
    color: string,
    ageBuild: number
    house: {
        upStairs: {
            rooms: Array<{ [key: string]: number }>
        },
        downStairs: {
            rooms: Array<{ [key: string]: number }>


        }
    }
}

const myHouse: MyHouseType = {
    address: '12587 Everett',
    color: 'cray',
    ageBuild: 22,
    house: {
        upStairs: {
            rooms: [
                {kitchen: 1},
                {livRoom: 6},
                {badRoom: 2}
            ]
        },
        downStairs: {
            rooms: [
                {kitchen: 5},
                {livRoom: 20},
                {badRoom: 6}
            ]
        }
    }
}




