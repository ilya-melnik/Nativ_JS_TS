import {GovernmentBuildingsType, HouseType} from "../02-object-test/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
return buildings.map(b => b.address.street.title)
}


export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) =>{
    return houses.map(h => h.address.street.title)
}


export const createsMessages = (messages: Array<HouseType>)=>{
    return messages.map(m =>`Hello guys from ` +  m.address.street.title)
}


