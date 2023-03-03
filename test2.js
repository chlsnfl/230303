for(let y = 2023; y<=2100; y++){
    let dt = new Date(y,0,1);
    if(dt.getDay()===0){
        console.log("1월 1일이 일요일인 해는 "+y+"입니다.")
    }
}