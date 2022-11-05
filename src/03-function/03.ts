import {StudentType} from "../02-object-test/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02-object-test/02_02";


export function AddSkill(student: StudentType, skills: string){
    student.technologies.push(
        {id: new Date().getTime(),
            title: skills}
    )
}

export function SwetchActive(student: StudentType, active: boolean){
   student.isActive = active;
}

export const doesStudentLiveIn =(s: StudentType, cityName: string)=> {
return s.address.city.title === cityName
}
//------------------------------03_02----------------------------------
export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number){
    building.budget += budget

}
export function repairHouse(houseType: HouseType){
    return houseType.repaired = true
}
export function toFireStaff(staffCount: GovernmentBuildingsType, value: number){
    staffCount.staffCount -= value
}
export function toHireStaff(staffCount: GovernmentBuildingsType, value: number){
    staffCount.staffCount += value
}
export function CreateMessage(city: CityType){
return 'Hello ' + city.title + ' citizens. I wont you be happy all ' + city.citizensNumber + ' men'
}
