let seanceData = localStorage.getItem('seance-data');
let parsedSeances = JSON.parse(seanceData);


let stepWrapper = document.querySelector('.conf-step__wrapper');
let infoTitle = document.querySelector('.buying__info-title');
infoTitle.innerText = `${parsedSeances.filmName}`;
let seanceStart = document.querySelector('.buying__info-start');
seanceStart.innerText = `Начало сеанса:  ${parsedSeances.seanceTime}`;
let hallName = document.querySelector('.buying__info-hall');
hallName.innerText = `${parsedSeances.hallName} `;
let acceptinButton = document.querySelector('.acceptin-button');
let priceStandart = document.querySelector('.price-standart');
priceStandart.innerText = `${parsedSeances.hallPriceStandart}`;
let priceVip = document.querySelector('.price-vip');
priceVip.innerText = `${parsedSeances.hallPriceVip}`;

createRequest('POST', 'https://jscp-diplom.netoserver.ru/', `event=get_hallConfig&timestamp=${parsedSeances.seanceTimeStamp}&hallId=${parsedSeances.hallId}&seanceId=${parsedSeances.seanceId}`, 
function () {
    stepWrapper.innerHTML = parsedSeances.hallConfig;
    let chairs = document.querySelectorAll('.conf-step__chair');
    let arrChairs = document.querySelectorAll('.conf-step__row .conf-step__chair_selected');


    if (arrChairs.length > 0) {
        acceptinButton.removeAttribute('disabled');
    } else {
        acceptinButton.setAttribute('disabled', 'disabled');
    }


    chairs.forEach((el) => {
        el.addEventListener('click', function (event) {
            if (event.target.classList.contains('conf-step__chair_taken')) {
                return;
            }
            event.target.classList.toggle('conf-step__chair_selected');
            arrChairs = document.querySelectorAll('.conf-step__row .conf-step__chair_selected');
            if (arrChairs.length > 0) {
                acceptinButton.removeAttribute('disabled');
            } else {
                acceptinButton.setAttribute('disabled', 'disabled');
            }

        });
    })


    acceptinButton.addEventListener('click', function () {
        let arrChair = [];
        arrChairs.forEach((selected) => {
            let row = selected.closest('.conf-step__row');
            let rowIndex = Array.from(row.parentNode.children).indexOf(row) + 1;
            let placeIndex = Array.from(row.children).indexOf(selected) + 1;
            let typePlace;
            if (selected.classList.contains('conf-step__chair_standart')) {
                typePlace = 'standart';
            } else if (selected.classList.contains('conf-step__chair_vip')) {
                typePlace = 'vip';
            }
            arrChair.push({ row: rowIndex, place: placeIndex, type: typePlace });

        });

        parsedSeances.hallConfig = stepWrapper.innerHTML;
        parsedSeances.selectedPlaces = arrChair;
        localStorage.clear();
        localStorage.setItem('seance-data', JSON.stringify(parsedSeances));
        window.location.href = "payment.html";
    });

});