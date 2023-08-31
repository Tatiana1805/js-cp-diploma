let seanceInfo = localStorage.getItem('seance-data');
let parseSeancesInfo = JSON.parse(seanceInfo);

fetch("https://jscp-diplom.netoserver.ru/", {
	method: "POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: `event=sale_add&timestamp=${parseSeancesInfo.seanceTimeStamp}&hallId=${parseSeancesInfo.hallId}&seanceId=${parseSeancesInfo.seanceId}&hallConfiguration=${parseSeancesInfo.hallConfig}`
});

function qrCode (){
const ticketTitle = document.querySelector('.ticket__title')
ticketTitle.innerHTML = parseSeancesInfo.filmName
const ticketChairs = document.querySelector('.ticket__chairs')
arr = parseSeancesInfo.selectedPlaces
let chairsArr = []
for (let i = 0; i < arr.length; i++){
    
    chairsArr.push(`${arr[i].row}/${arr[i].place}`)
}
ticketChairs.textContent = chairsArr
const ticketHall = document.querySelector('.ticket__hall')
ticketHall.innerHTML = parseSeancesInfo.hallName
const ticketStart = document.querySelector('.ticket__start')
ticketStart.innerHTML = parseSeancesInfo.seanceTime
let qrcode = 
`
    фильм : ${parseSeancesInfo.filmName},
    время: ${parseSeancesInfo.seanceTime},
    зал: ${parseSeancesInfo.hallName},
    ряд/место: ${ticketChairs.innerHTML},
`

const qr = QRCreator(qrcode,{image: 'SVG'})
document.querySelector('.ticket__info-qr').append(qr.result)

}

document.addEventListener('DOMContentLoaded', qrCode)