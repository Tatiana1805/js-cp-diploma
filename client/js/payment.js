let seanceInfo = localStorage.getItem('seance-data');
let parseSeancesInfo = JSON.parse(seanceInfo);


let ticketTitle = document.querySelector('.ticket__title')
let ticketChairs = document.querySelector('.ticket__chairs');
let ticketHall = document.querySelector('.ticket__hall');
let ticketStart = document.querySelector('.ticket__start');
let ticketCost = document.querySelector('.ticket__cost');

let date = new Date(parseSeancesInfo.seanceTimeStamp * 1000);
let dateString = date.toLocaleString().slice(0, -3)

ticketTitle.innerHTML = parseSeancesInfo.filmName;
ticketHall.innerHTML = parseSeancesInfo.hallName.split('Зал').join('');
ticketStart.innerHTML = dateString;


let ticketChairsArr = [];
let cost = 0;
let arr = parseSeancesInfo.selectedPlaces;
for (let i = 0; i < arr.length; i++) {
	ticketChairsArr.push(`${arr[i].row}/${arr[i].place}`);
	if (arr[i].type === 'standart') {
		cost += +parseSeancesInfo.hallPriceStandart;
	} else {
		cost += +parseSeancesInfo.hallPriceVip;
	}
}
ticketChairs.textContent = ticketChairsArr.join(', ')
ticketCost.textContent = cost;