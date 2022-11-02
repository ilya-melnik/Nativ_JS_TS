

export function sum (a:number, b:number){
    return a + b
}
export function mult (a:number, b:number){
    return a * b
}
export function splitIntoWord(sentense: string){
    return sentense.split(" ")
        .filter(w => w !== "-")
        .map(w => w.replace("!", ""));
}
//-----------------------------------------------------------------------------------------------------------

// export type Touppercasetype = {
//     value: string;
// }
// export function Touppercase(props: Touppercasetype){
//     return <h1>{props.value.toUpperCase().replace('A', 'a')}</h1
// }

export function sum1 (a:number, b: number){
    return  a + b
}


let res;

export function replace (sentence: string){

    return res = sentence.replace(/\s/g, "-")
    alert(res)
}

