
const salesArr = [
    {month:1, sales:90},
    {month:2, sales:87},
    {month:3, sales:140},
    {month:4, sales:120},
    {month:5, sales:130},
    {month:6, sales:150},
    {month:7, sales:180},
    {month:8, sales:240},
    {month:9, sales:200},
    {month:10, sales:180},
    {month:11, sales:140},
    {month:12, sales:190}
]
let max = 0
let period = 0
for (let i = 0; i < salesArr.length ; i++) {
    if(salesArr[i].sales>max) {
        max = salesArr[i].sales
        period = i
    }
}

console.log(`MAX: ${max}만원입니다.`)
console.log(`MAX: ${period+1}월이 매출이 가장 좋습니다.`)