const today = new Date();
const grday = new Date(today.getFullYear(),6,10);
if(today.getMonth()===6 && today.getDate()>10){
    console.log("이미 수료했어용.");
}
const oneDay = 24*60*60*1000; //유닉스타임은 끝에 1000 곱하기
const endDay = Math.ceil((grday.getTime()-today.getTime())/oneDay);
console.log("남은 시간은 "+endDay+"입니당");