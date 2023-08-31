let seanceInfo = localStorage.getItem('seance-data');
let parseSeancesInfo = JSON.parse(seanceInfo);
console.log(parseSeancesInfo)


let ticketTitle = document.querySelector('.ticket__title')
let ticketChairs = document.querySelector('.ticket__chairs');
let ticketHall = document.querySelector('.ticket__hall');
let ticketStart = document.querySelector('.ticket__start');
let ticketCost = document.querySelector('.ticket__cost');

let date = new Date(parseSeancesInfo.seanceTimeStamp * 1000);
let dateString = date.toLocaleString().slice(0,-3)

ticketTitle.innerHTML = parseSeancesInfo.filmName;
ticketHall.innerHTML = parseSeancesInfo.hallName.split('Зал').join('');
ticketStart.innerHTML = dateString;


let ticketChairsArr = [];
let cost = 0;
let arr = parseSeancesInfo.selectedPlaces;
for(let i = 0; i < arr.length; i++){
    ticketChairsArr.push(`${arr[i].row}/${arr[i].place}`);
    if(arr[i].type === 'standart'){
        cost += +parseSeancesInfo.hallPriceStandart;    
    } else {
        cost += +parseSeancesInfo.hallPriceVip;
    }
}
ticketChairs.textContent = ticketChairsArr.join(', ')
ticketCost.textContent = cost;




// let localButton = parseSeancesInfo.hallConfig.replace(/selected/g, 'taken');
// parseSeancesInfo.hallConfig = localButton
// parseSeancesInfo.ticketChairsArr = ticketChairsArr

// console.log(localButton)
// document.querySelector('.acceptin-button').addEventListener('click', (e) =>{
//     let updateRequest = `event=sale_add&timestamp=${parseSeancesInfo.timestamp}&hallId=${parseSeancesInfo.hallId}&seanceId=${parseSeancesInfo.seanceId}&hallConfiguration=${localButton}`
//     getRequest(updateRequest, function(){
//         window.location.href = 'ticket.html'
//     })
// })
const button = document.querySelector('.acceptin-button')
button.addEventListener('click', (e) => {
        e.preventDefault()
fetch("https://jscp-diplom.netoserver.ru/", {
	method: "POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: `event=sale_add&timestamp=${parseSeancesInfo.seanceTimeStamp}&hallId=${parseSeancesInfo.hallId}&seanceId=${parseSeancesInfo.seanceId}&hallConfiguration=${parseSeancesInfo.hallConfig}`
});
})
// console.log(button)
// console.log(updateRequest)
