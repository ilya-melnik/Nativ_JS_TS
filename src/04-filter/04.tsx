import React from 'react';
import {CityType, GovernmentBuildingsType} from "../02-object-test/02_02";

export const ages = [10, 23, 55, 77, 88, 99, 8, 100, 98, 85]
export const courses = [
    {title: 'css', price: 100},
    {title: 'js', price: 160},
    {title: 'html', price: 130},
]
// test 2
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(newHouses => newHouses.address.street.title !== street)
}

//test 3
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, workers: number) => {
   return  buildings.filter(b => b.staffCount > workers)
}

export const Filter
    = () => {
    const predicate = (age: number) => {
        return age > 90
    }
    return (<div></div>
    );
};




