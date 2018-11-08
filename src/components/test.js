export function getNowDate(){
    return new Date();
}


export function getNowWeek(){ 
    return getNowDate().getDay();
}


export const test =()=>{
   // console.log('hiS')
}

export const text ="今天我累了"
export default function getNowMonth(){ 
    return getNowDate().getMonth()+1;
}
