// // halls {...} - содержит список всез Залов (массив с объектами)
// // films {...} - содержит список всех Фильмов (массив с объектами)
// // seances {...} - содержит список всех Сеансов (массив с объектами) Чтобы обратиться к массиву 
// // с данными необходимо использовать ключ result (Например halls.result)

// let bodyRequest = "event=update";
// function navDate(){
//   createRequest("event=update", "INDEX", createRequest);
// }

// let Request = "event=update";
// //актуальная дата
// document.addEventListener('DOMContentLoaded', () => {
//     let dayNumber = document.querySelectorAll('.page-nav__day-number')
//     let dayWeek = document.querySelectorAll('.page-nav__day-week')
//     let navDay = document.querySelectorAll('.page-nav__day')


//    let dayList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
//     for (let i = 0; i < dayNumber.length; i++){
//       let day = new Date ()
//         let dayNow = new Date(day.getTime() + (i * 86400000));
//         dayNumber[i].innerHTML = `${dayNow.getDate()}`
//         dayWeek[i].innerHTML = `${dayList[dayNow.getDay()]}`
//         let e = dayNumber[i].parentNode
//         if ((dayWeek[i].innerHTML ==='Вс') || (dayWeek[i].innerHTML ==='Сб')) {
//             e.classList.add('page-nav__day_weekend')
//         } else {
//             e.classList.remove('page-nav__day_weekend')
//         }
//     }
//     function week(date){
//       let dayList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
//       dayList[date.getDay()]
//     }

//   })


//   createRequest(Request, (response) => {
// 	let arr = {}
//   arr.seances = response.seances.result;
//   arr.films = response.films.result;
//   arr.halls = response.halls.result; 
//     arr.halls = arr.halls.filter((hall) => hall.hall_open == 1);
  
//   let main = document.querySelector('main')
//   main.innerHTML = '';

//   for (let film of arr.films){
// 	let hallSeanc = '';
//   halls.forEach( hall => {
// 	let seance = arr.seances.filter((seance) => (seance.seance_filmid == film.film_id) && (seance.seance_hallid == hall.hall_id))
// 	if (seance.length > 0){
// 		hallSeanc += `<div class="movie-seances__hall">
// 			<h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
// 			<ul class="movie-seances__list">
// 				${arr.seances.map(seance => `
// 			<li class="movie-seances__time-block">
// 			<a class="movie-seances__time" href="hall.html" data-film-name ="${film.film_name}" 
// 			data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}" 
// 			data-hall-name="${hall.hall_name}" data-hall-id="${hall.hall_id}" data-seance-id="${seance.seance_id}" 
// 			data-hall-price-standart="${hall.hall_price_standart}"
// 			data-hall-price-vip="${hall.hall_price_vip}">${seance.seance_time}</a>
// 			</li>
// 				`)}
// 			</ul>          
// 			</div>`
// 	}
//   })
//   if (hallSeanc) {
//         main.innerHTML += `<section class="movie">
//            <div class="movie__info">
//              <div class="movie__poster">
//                <img class="movie__poster-image" alt='${film.film_name}' src="${film.film_poster}">
//              </div>
//              <div class="movie__description">
//                <h2 class="movie__title">${film.film_name}</h2>
//                <p class="movie__synopsis">${film.film_description}</p>
//                <p class="movie__data">
//                  <span class="movie__data-duration">${film.film_duration}</span>
//                  <span class="movie__data-origin">${film.film_origin}</span>
//                </p>
//              </div>
//            </div>  
//            ${hallSeanc}
//          </section>`
//   }
// }

// let timeSeanc = document.querySelectorAll('.movie-seances__time')
// function dateSeance() {
// 	timeSeanc.forEach((time) => {
// 		let seanceStart = +time.dataset.seanceStart;
// 		let selectedDay = document.querySelector('.page-nav__day_chosen')
// 		let selectedIndex = Array.from(navDay).indexOf(selectedDay)
// 		let date = new Date()
// 		date.setDate(date.getDate() + selectedIndex)
// 		date.setHours(0, 0, 0)
// 		let seanceTime = Math.floor(date.getTime() / 1000) + seanceStart * 60;
// 		time.dataset.seanceTimeStamp = seanceTime;
// 		let today = new Date();
// 		let currentTime = Math.round(today.getTime() / 1000);
// 		if (currentTime > seanceTime){
// 			time.classList.add('acceptin-button-disabled')
// 		} else {
// 			time.classList.remove('acceptin-button-disabled')
// 		}
// 	})
// }


// navDay.forEach((elDay) => {
// 	elDay.addEventListener('click', function (e) {
// 		e.preventDeafult()
// 		let selectedDay = document.querySelector('.page-nav__day_chosen')
// 		if (selectedDay){
// 			selectedDay.classList.remove('page-nav__day_chosen')
// 		}
// 		elDay.classList.add('page-nav__day_chosen');
// 		dateSeance()
// 	})
// })
// dateSeance()
// timeSeanc.forEach((time) => {
// 	time.addEventListener('click', function (e) {
// 		let hallId = e.target.dataset.hallId;
// 		let selectedHall =  halls.find((hall) => hall.hall_id === hallId)
// 		let selectedSeance = {
// 			...e.target.dataset,
// 			hallConfig: selectedHall.hall_config
// 		}
// 		let js = JSON.stringify(selectedSeance);
// 		localStorage.setItem('seance-data', js)
// 	})
// })
// })

// console.log(createRequest)





document.addEventListener("DOMContentLoaded", () => {
	let dayWeek = document.querySelectorAll('.page-nav__day-week');
	let dayNumber = document.querySelectorAll('.page-nav__day-number');
	let navDays = document.querySelectorAll('.page-nav__day');
  
	dayNumber.forEach(function (el, index) {
	  let day = new Date();
	  day.setDate(day.getDate() + index);
	  el.textContent = day.getDate();
	  dayWeek[index].textContent = weekDays(day);
	  let navDay = el.parentNode;
	  if (dayWeek[index].textContent === 'Сб' || dayWeek[index].textContent === 'Вс') {
		navDay.classList.add('page-nav__day_weekend');
	  } else {
		navDay.classList.remove('page-nav__day_weekend');
	  }
	});
  
	function weekDays(date) {
	  let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
	  return daysOfWeek[date.getDay()];
	}
  
	createRequest('POST', 'https://jscp-diplom.netoserver.ru/', 'event=update', function (response) {
	  let films = response.films.result;
	  let halls = response.halls.result.filter((openhalls) => openhalls.hall_open !== 0);
	  let arrSeances = response.seances.result;
  
	  let main = document.querySelector('main');
	  main.innerHTML = '';
  
	  for (let film of films) {
		let hallSeances = '';
		halls.forEach(function (hall) {
		  let seances = arrSeances.filter((seance) => (seance.seance_filmid == film.film_id) && (seance.seance_hallid == hall.hall_id));
		  //  console.log(seances);
  
		  if (seances.length > 0) {
  
			hallSeances += `<div class="movie-seances__hall">
			 <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
			 <ul class="movie-seances__list">
			   ${seances.map(seance => `
				 <li class="movie-seances__time-block">
				   <a class="movie-seances__time" href="hall.html" data-film-name ="${film.film_name}" 
				   data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}" 
				   data-hall-name="${hall.hall_name}" data-hall-id="${hall.hall_id}" data-seance-id="${seance.seance_id}" 
				   data-hall-price-standart="${hall.hall_price_standart}"
				   data-hall-price-vip="${hall.hall_price_vip}">${seance.seance_time}</a>
				 </li>
			   `)}
			 </ul>          
		   </div>`
		  }
  
		});
  
		if (hallSeances) {
		  main.innerHTML += `<section class="movie">
			 <div class="movie__info">
			   <div class="movie__poster">
				 <img class="movie__poster-image" alt='${film.film_name}' src="${film.film_poster}">
			   </div>
			   <div class="movie__description">
				 <h2 class="movie__title">${film.film_name}</h2>
				 <p class="movie__synopsis">${film.film_description}</p>
				 <p class="movie__data">
				   <span class="movie__data-duration">${film.film_duration}</span>
				   <span class="movie__data-origin">${film.film_origin}</span>
				 </p>
			   </div>
			 </div>  
			 ${hallSeances}
		   </section>`
		}
	  }
  
	  let seanceTime = document.querySelectorAll('.movie-seances__time');
  
	  function dateSeance() {
  
		seanceTime.forEach((time) => {
		  let seanceStart = +time.dataset.seanceStart;
		  let selectedDay = document.querySelector('.page-nav__day_chosen');
		  let selectedDayInd = Array.from(navDays).indexOf(selectedDay);
		  let selectedDate = new Date();
		  selectedDate.setDate(selectedDate.getDate() + selectedDayInd);
		  selectedDate.setHours(0, 0, 0);
		  let seanceTime = Math.floor(selectedDate.getTime() / 1000) + seanceStart * 60;
		  time.dataset.seanceTimeStamp = seanceTime;
		  let todayTime = new Date();
		  let currentTime = Math.round(todayTime.getTime() / 1000);
		  if (currentTime > seanceTime) {
			time.classList.add("acceptin-button-disabled");
		  } else {
  
			time.classList.remove("acceptin-button-disabled");
		  }
		});
	  }
  
	  for (let navDay of navDays) {
		navDay.addEventListener('click', function (e) {
		  e.preventDefault();
		  let selectedDay = document.querySelector('.page-nav__day_chosen');
		  if (selectedDay) {
			selectedDay.classList.remove('page-nav__day_chosen');
		  }
		  navDay.classList.add('page-nav__day_chosen');
		  dateSeance();
		})
	  }
  
	  dateSeance();
  
	  seanceTime.forEach((time) => {
		time.addEventListener('click', function (event) {
		  let hallId = event.target.dataset.hallId;
		  let selectedHall = halls.find((hall) => hall.hall_id == hallId);
		  let selectedSeance = {
			...event.target.dataset,
			hallConfig: selectedHall.hall_config
		  };
		  let jsonSeance = JSON.stringify(selectedSeance);
		  localStorage.setItem('seance-data', jsonSeance);
		});
	  });
	});
  });





// let Request = "event=update";

// document.addEventListener("DOMContentLoaded", () => {    
//   let dayNumb = document.querySelectorAll(".page-nav__day-number");   // Получаем все элементы с классом "page-nav__day-number" и сохраняем их в переменную dayNumb
//   let dayWeek = document.querySelectorAll(".page-nav__day-week");       // Получаем все элементы с классом "page-nav__day-week" и сохраняем их в переменную dayWeek
//   let dayWeekCatalog = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];         // Создаем массив dayWeekCatalog, содержащий сокращенные названия дней недели
//   let today = new Date();                                               // Создаем объект today, представляющий текущую дату без времени
//   today.setHours(0, 0, 0);
//   for (let i = 0; i < dayNumb.length; i++) {                             // В цикле проходим по всем элементам dayNumb
//     let day = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));       // Вычисляем дату, добавляя к текущей дате количество миллисекунд, соответствующее количеству дней от начала текущей даты
//     let markTime = Math.trunc(day/1000);                                 
//     dayNumb[i].innerHTML = `${day.getDate()},`;
//     dayWeek[i].innerHTML = `${dayWeekCatalog[day.getDay()]}`;
//     let dayLink = dayNumb[i].parentNode
//     dayLink.dataset.markTime = markTime;                                        // Добавляем атрибут data-markTime со значением временной метки для элемента dayLink
//     if ((dayWeek[i].innerHTML == 'Вс') || (dayWeek[i].innerHTML == 'Сб')) {    // Если день недели является выходным (Вс или Сб), добавляем класс "page-nav__day_weekend" для элемента dayLink, в противном случае удаляем этот класс
//       dayLink.classList.add('page-nav__day_weekend');
//     } else {
//       dayLink.classList.remove('page-nav__day_weekend');
//     };
//   };

//   createRequest(Request, (response) => {                                           
//     let subject = {};                                                              //Создание объекта для хранения данных
    
//     subject.seances = response.seances.result;                                       // Заполняем объект данными из response
//     subject.films = response.films.result;
//     subject.halls = response.halls.result;
//     subject.halls = subject.halls.filter(hall => hall.hall_open == 1);                  // Фильтруем залы, оставляем только открытые
    
//     let main = document.querySelector("main");

//     subject.films.forEach((film) => {
//       let seancesHTML = '';
//       let filmId = film.film_id;
      
//       subject.halls.forEach((hall) => {
//         let seances = subject.seances.filter(seance => ((seance.seance_hallid == hall.hall_id) && (seance.seance_filmid == filmId)));        // Фильтрация сеансов для текущего фильма и зала
//         if (seances.length > 0) {                                                                                                             // Если есть сеансы, создаем HTML-код для них
//           seancesHTML += `
//             <div class="movie-seances__hall">
//               <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
//               <ul class="movie-seances__list">`
//           seances.forEach(seance => seancesHTML += `<li class="movie-seances__time-block"><a class="movie-seances__time"   href="hall.html" data-film-name="${film.film_name}" data-film-id="${film.film_id}" data-hall-id="${hall.hall_id}" data-hall-name="${hall.hall_name}" data-price-vip="${hall.hall_price_vip}" data-price-standart="${hall.hall_price_standart}" data-seance-id="${seance.seance_id}" 
//               data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}">${seance.seance_time}</a></li>`);
//           seancesHTML += `
//             </ul>
//             </div>`
//         };
//       });

//       if (seancesHTML) {
//         main.innerHTML += `
//           <section class="movie">
//             <div class="movie__info">
//               <div class="movie__poster">
//                 <img class="movie__poster-image" alt="${film.film_name} постер" src="${film.film_poster}">
//               </div>
//               <div class="movie__description">
//                 <h2 class="movie__title">${film.film_name}</h2>
//                 <p class="movie__synopsis">${film.film_description}</p>
//                 <p class="movie__data">
//                   <span class="movie__data-duration">${film.film_duration} мин.</span>
//                   <span class="movie__data-origin">${film.film_origin}</span>
//                 </p>
//               </div>
//             </div>
//             ${seancesHTML}
//           </section>`
//       };
//     });

//     let daydayLinks = Array.from(document.querySelectorAll(".page-nav__day"));
// 		let movieSeances = Array.from(document.querySelectorAll(".movie-seances__time"));
    
//     daydayLinks.forEach(daydayLink => daydayLink.addEventListener('click', (event) => {                        // Добавляем обработчик события click для каждого элемента
//       event.preventDefault();
      
//       document.querySelector(".page-nav__day_chosen").classList.remove("page-nav__day_chosen");                // Удаляем класс "page-nav__day_chosen" у выбранного элемента
// 			daydayLink.classList.add("page-nav__day_chosen");                                                        // Добавляем класс "page-nav__day_chosen" к выбранному элементу daydayLink
      
//       let markTimeDay = Number(event.target.dataset.markTime);                                                 // Получаем значение markTimeDay из атрибута data-markTime выбранного элемента
//       if (isNaN(markTimeDay)) {                                                                                // Если markTimeDay не является числом, получаем значение markTimeDay из атрибута data-markTime ближайшего родительского элемента с классом "page-nav__day"
//         markTimeDay = Number(event.target.closest('.page-nav__day').dataset.markTime);
//       };

//       movieSeances.forEach(movieSeance => {                                 // Для каждого элемента movieSeance вычисляем значения markTimeSeanceDay, markTimeSeance и markTimeNow
//         let markTimeSeanceDay = Number(movieSeance.dataset.seanceStart) * 60;
//         let markTimeSeance = markTimeDay + markTimeSeanceDay;
//         let markTimeNow = Math.trunc(+new Date() / 1000);
//         movieSeance.dataset.seanceTimeStamp = markTimeSeance;                                                   // 05.07.2023  Исправлена ошибка (seanceTimeStamp в строке movieSeance.dataset.seanceTimeStamp = markTimeSeance);
      
//         if ((markTimeSeance - markTimeNow) > 0) {                                                               // Проверяем условие (markTimeSeance - markTimeNow) > 0 с помощью оператора if
//           movieSeance.classList.remove('acceptin-button-disabled');
//         } else {
//           movieSeance.classList.add('acceptin-button-disabled');
//         };
//       });
//     }));
    
//     daydayLinks[0].click();                                                                                      // Вызываем событие click для первого элемента daydayLinks
    
//     movieSeances.forEach(movieSeance => movieSeance.addEventListener('click', (event) => {                       // Добавляем обработчик события click для каждого элемента movieSeance
//       let selectSeanse = event.target.dataset;
//       selectSeanse.hallConfig = subject.halls.find(hall => hall.hall_id == selectSeanse.hallId).hall_config;
//         sessionStorage.setItem('selectSeanse', JSON.stringify(selectSeanse));
//     }));
//   });
// });





//   let btn = document.querySelectorAll('.page-nav__day');
//   btn.forEach(el => {
//     el.addEventListener('click', () =>{
//       btn.forEach(e => {
//         e.classList.remove('page-nav__day_chosen')
//       })
//       el.classList.add('page-nav__day_chosen')
//     })
//   })

//   let bodyRequest = 'event=update';
//   createRequest(bodyRequest, (response) => {
//     let index= {};
//     index.seances = response.seances.result;
//     index.films = response.films.result;
//     index.halls = response.halls.result; 
//     index.halls = index.halls.filter((hall) => hall.hall_open == 1);
//     console.log(index);
//   // })



// // film
//     const mainSection = document.querySelector("main");
//     const arrFilms = index.films
//     const arrHall = index.halls
//     const arrSeances = index.seances
//     mainSection.innerHTML = "";
  
//     arrFilms.forEach((elementFilm) => {
//       const textHtml = `
//            <section class="movie">
//              <div class="movie__info">
//                <div class="movie__poster">
//                  <img class="movie__poster-image" alt="${elementFilm.film_name} постер" src="${elementFilm.film_poster}">
//                </div>
//                <div class="movie__description">
//                  <h2 class="movie__title">${elementFilm.film_name}</h2>
//                  <p class="movie__synopsis">${elementFilm.film_description}</p>
//                  <p class="movie__data">
//                    <span class="movie__data-duration">${elementFilm.film_duration} минут</span>
//                    <span class="movie__data-origin">${elementFilm.film_origin}</span>
//                  </p>
//                </div>
//              </div>
//            </section>
//          `;
//       mainSection.insertAdjacentHTML("beforeend", textHtml);
// //hall
//       let hallSection = mainSection.querySelector('.movie:last-child')
// arrHall.forEach(elHall => {
//   const configHalls = {}
//   configHalls[elHall.hall_id] = elHall.hall_config;
//   let arrSeancesHall = arrSeances.filter (seances =>{
//     return seances.seance_filmid === elementFilm.film_id && seances.seance_hallid === elHall.hall_id

//   })
//   //console.log(arrSeancesHall)


//   if (arrSeancesHall.length){
//     let textHtml = `
//        <div class="movie-seances__hall">
//        <h3 class="movie-seances__hall-title">${elHall.hall_name}</h3>
//           <ul class="movie-seances__list">
//          `

//     // hallSection.insertAdjacentHTML("beforeend", textHtml);
 
//   //seances
//   // let seansSection = mainSection.querySelector('.movie-seances__hall:last-child .movie-seances__list')
//   arrSeancesHall.forEach(elSeans =>{
//     // let timeSeanc = new Date(+elSeans.seance_start * 864000000);
//     // if (day < timeSeanc) {
//     textHtml += `
//     <li class="movie-seances__time-block">
//     <a class="movie-seances__time" href="hall.html" data-film-id=${elementFilm.film_id} data-film-name="${elementFilm.film_name}" 
//     data-hall-id=${elHall.hall_id} data-hall-name="${elHall.hall_name}"
//     data-seance-id=${elSeans.seance_id} data-seance-time=${elSeans.seance_time} 
//     data-seance-start=${elSeans.seance_start} data-seance-time-stamp= ${elSeans.seance_time}>
//     ${elSeans.seance_time}
//      </a></li>
//          `;
         
//         //  seansSection.insertAdjacentHTML("beforeend", textHtml);
         
//    // }
//   })
//   textHtml += 
//   `</ul>
//   </div>`
//   hallSection.insertAdjacentHTML("beforeend", textHtml);
// }
// })
// setJSON("config-halls", configHalls);
// //клик по дате
// function dayClick(event){
//   const clickDay = document.querySelectorAll('.page-nav__day')
//   clickDay.forEach(el => {
//     el.classList.remove('page-nav__day_chosen')
//   })
//   event.currentTarget.classList.add('page-nav__day_chosen')

//   navDate()
// }
// const dayNav = document.querySelectorAll('.page-nav__day')
// dayNav.forEach(el =>{
//   el.addEventListener('click', dayClick)
// })
// console.log(dayNav)
// //клик по сеансу

// function seansClick() {
//   const seanceData = this.dataset

//   setJSON('data-of-the-selected-seance', seanceData)
// }
// const clickSeans = document.querySelectorAll('.movie-seances__time')
// clickSeans.forEach(el => {
//  el.addEventListener('click', seansClick)
// })
// console.log(clickSeans)



//   })
  
// })

// // })


// //     })

// // })


//   //})
// //})

// // sessionStorage.setItem('hall_config', Object)
// // клик по дате
// // function dayClick(){
// //   const clickDay = document.querySelectorAll('.page-nav__day')
// //   clickDay.forEach(el => {
// //     el.addEventListener('click', )
// //   })
// // }
// // //клик по сеансу
// // function seansClick() {
// //   const clickSeans = document.querySelectorAll('.movie-seances__time')
// //    clickSeans.forEach(el => {
// //     el.addEventListener('click', )
// //    })
// // }










// // document.addEventListener("DOMContentLoaded", () => {
// //   let dayWeekElements = document.querySelectorAll('.page-nav__day-week');
// //   let dayNumberElements = document.querySelectorAll('.page-nav__day-number');
// //   let pageNavDays = document.querySelectorAll('.page-nav__day');

// //   dayNumberElements.forEach(function (dayNumberElement, index) {
// //     let day = new Date();
// //     day.setDate(day.getDate() + index);
// //     dayNumberElement.textContent = day.getDate();
// //     dayWeekElements[index].textContent = weekDays(day);
// //     let navDay = dayNumberElement.parentNode;
// //     if (dayWeekElements[index].textContent === 'Сб' || dayWeekElements[index].textContent === 'Вс') {
// //       navDay.classList.add('page-nav__day_weekend');
// //     } else {
// //       navDay.classList.remove('page-nav__day_weekend');
// //     }
// //   });

// //   function weekDays(date) {
// //     let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// //     return daysOfWeek[date.getDay()];
// //   }

// //   createRequest('POST', 'https://jscp-diplom.netoserver.ru/', 'event=update', function (response) {
// //     // console.log(response);
// //     let films = response.films.result;
// //     let halls = response.halls.result.filter((openhalls) => openhalls.hall_open !== '0');
// //     let arrSeances = response.seances.result;

// //     let main = document.querySelector('main');
// //     main.innerHTML = '';

// //     for (let film of films) {
// //       let hallSeances = '';
// //       halls.forEach(function (hall) {
// //         let seances = arrSeances.filter((seance) => (seance.seance_filmid == film.film_id) && (seance.seance_hallid == hall.hall_id));
// //         //  console.log(seances);

// //         if (seances.length > 0) {

// //           hallSeances += `<div class="movie-seances__hall">
// //            <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
// //            <ul class="movie-seances__list">
// //              ${seances.map(seance => `
// //                <li class="movie-seances__time-block">
// //                  <a class="movie-seances__time" href="hall.html" data-film-name ="${film.film_name}" 
// //                  data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}" 
// //                  data-hall-name="${hall.hall_name}" data-hall-id="${hall.hall_id}" data-seance-id="${seance.seance_id}" 
// //                  data-hall-price-standart="${hall.hall_price_standart}"
// //                  data-hall-price-vip="${hall.hall_price_vip}">${seance.seance_time}</a>
// //                </li>
// //              `)}
// //            </ul>          
// //          </div>`
// //         }

// //       });

// //       if (hallSeances) {
// //         main.innerHTML += `<section class="movie">
// //            <div class="movie__info">
// //              <div class="movie__poster">
// //                <img class="movie__poster-image" alt='${film.film_name}' src="${film.film_poster}">
// //              </div>
// //              <div class="movie__description">
// //                <h2 class="movie__title">${film.film_name}</h2>
// //                <p class="movie__synopsis">${film.film_description}</p>
// //                <p class="movie__data">
// //                  <span class="movie__data-duration">${film.film_duration}</span>
// //                  <span class="movie__data-origin">${film.film_origin}</span>
// //                </p>
// //              </div>
// //            </div>  
// //            ${hallSeances}
// //          </section>`
// //       }
// //     }

// //     let seancesTime = document.querySelectorAll('.movie-seances__time');

// //     function updateSeances() {

// //       seancesTime.forEach((time) => {
// //         let seanceStart = +time.dataset.seanceStart;
// //         let selectedDay = document.querySelector('.page-nav__day_chosen');
// //         let selectedDayIndex = Array.from(pageNavDays).indexOf(selectedDay);
// //         let selectedDate = new Date();
// //         selectedDate.setDate(selectedDate.getDate() + selectedDayIndex);
// //         selectedDate.setHours(0, 0, 0);
// //         let seanceTime = Math.floor(selectedDate.getTime() / 1000) + seanceStart * 60;
// //         time.dataset.seanceTimeStamp = seanceTime;
// //         let todayTime = new Date();
// //         let currentTime = Math.round(todayTime.getTime() / 1000);
// //         if (currentTime > seanceTime) {
// //           time.classList.add("acceptin-button-disabled");
// //         } else {

// //           time.classList.remove("acceptin-button-disabled");
// //         }
// //       });
// //     }



// //     for (let pageNavDay of pageNavDays) {
// //       pageNavDay.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         let selectedDay = document.querySelector('.page-nav__day_chosen');
// //         if (selectedDay) {
// //           selectedDay.classList.remove('page-nav__day_chosen');
// //         }
// //         pageNavDay.classList.add('page-nav__day_chosen');
// //         updateSeances();
// //       })
// //     }

// //     updateSeances();

// //     seancesTime.forEach((time) => {
// //       time.addEventListener('click', function (event) {
// //         let hallId = event.target.dataset.hallId;
// //         let selectedHall = halls.find((hall) => hall.hall_id == hallId);
// //         let selectedSeance = {
// //           ...event.target.dataset,
// //           hallConfig: selectedHall.hall_config
// //         };
// //         let jsonSeance = JSON.stringify(selectedSeance);
// //         localStorage.setItem('seance-data', jsonSeance);
// //       });
// //     });
// //   });
// // });










// document.addEventListener('DOMContentLoaded', () => {
// 	let dayNumber = document.querySelectorAll('.page-nav__day-number')
// 	let dayWeek = document.querySelectorAll('.page-nav__day-week')
// 	let dayWeekList = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
// 	let day = new Date()
// 	for (let i = 0; i < dayNumber.length; i++) {
// 		let dayNow = new Date(day.getTime() + (i * (24 * 60 * 60 * 1000)));
// 		dayNumber[i].textContent = `${dayNow.getDate()}`
// 		dayWeek[i].textContent = `${dayWeekList[dayNow.getDay()]}`

// 		if ((dayWeek[i].textContent === 'Вс') || (dayWeek[i].textContent === 'Сб')) {
// 			dayNumber[i].parentNode.classList.add('page-nav__day_weekend');
// 		} else {
// 			dayNumber[i].parentNode.classList.remove('page-nav__day_weekend');
// 		}

// 	}
// })
// let navBtn = document.querySelectorAll('.page-nav__day');
// navBtn.forEach(el => {
// 	el.addEventListener('click', () => {
// 		navBtn.forEach(e => {
// 			e.classList.remove('page-nav__day_chosen');
// 		})
// 		el.classList.add('page-nav__day_chosen');
// 		})
// })
// let main = document.querySelector("main");
// let updateRequest = 'event=update';
// createRequest(updateRequest, (response) => {

// 	let arr = {};

// 	arr.seances = response.seances.result;
// 	arr.films = response.films.result;
// 	arr.halls = response.halls.result;
// 	arr.halls = arr.halls.filter((hall) => hall.hall_open == 1);
// 	console.log(arr);

// 	arr.films.forEach(film => {
// 		let addHtml =
// 			`<section class="movie">
// 				<div class="movie__info">
// 					<div class="movie__poster">
// 						<img class="movie__poster-image" src="${film.film_poster}">
// 					</div>
// 					  <div class="movie__description">
// 						<h2 class="movie__title">${film.film_name}</h2>
// 						<p class="movie__synopsis">${film.film_description}</p>
// 						<p class="movie__data">
// 						  <span class="movie__data-duration">${film.film_duration} мин</span>
// 						  <span class="movie__data-origin">${film.film_origin}</span>
// 						</p>
// 					  </div>
// 					</div>`;

// 		arr.halls.forEach((hall) => {
// 			let seances = arr.seances.filter(seance => ((seance.seance_hallid === hall.hall_id) && (seance.seance_filmid === film.film_id)));
// 			if (seances.length > 0) {
// 				let hallConfig = hall.hall_config;
// 				let hallConfigWithoutQuotation = hallConfig
// 				addHtml +=
// 					`<div class="movie-seances__hall">
// 					  <h3 class="movie-seances__hall-title">${hall.hall_name}</h3>
// 						<ul class="movie-seances__list">`;
// 				seances.forEach(seance =>
// 					addHtml +=
// 					`<li class="movie-seances__time-block"><a class="movie-seances__time" href="hall.html"
// 					data-film-name="${film.film_name}" data-film-id="${film.film_id}" data-hall-id="${hall.hall_id}"
// 					data-hall-name="${hall.hall_name}" data-price-standart="${hall.hall_price_standart}" 
// 					data-price-vip="${hall.hall_price_vip}" data-seance-id="${seance.seance_id}"
// 					data-seance-start="${seance.seance_start}" data-seance-time="${seance.seance_time}">
// 					${seance.seance_time}</a></li>`
// 				);

// 				addHtml +=
// 					`</ul>
// 					</div>`
// 			};
// 		});
// 		addHtml +=
// 			`</section>`;
// 		main.insertAdjacentHTML("beforeend", addHtml);
// 	})
// 	let  chosenSeance = document.querySelectorAll('.movie-seances__time');
// 	chosenSeance.forEach(el => {
// 		el.addEventListener('click', (e) =>{
// 			// e.preventDefault()
// 			let target = e.target;
// 			console.log(target.dataset.seanceStart)

// 			let chosenDay = document.querySelector('.page-nav__day_chosen');
// 			let day = chosenDay.querySelector('.page-nav__day-number');
// 			let today = new Date().getDate();
// 			let timestamp;
// 			let nowSec = Math.floor(Date.now() / 1000)
// 				if(+day.textContent > today){
// 					console.log(+day.textContent - today)
// 					timestamp = nowSec + ((+day.textContent - today) * (24 * 60 * 60)) + (target.dataset.seanceStart * 60);
// 				} else {
// 					timestamp = nowSec + (target.dataset.seanceStart * 60);
// 				}
// 				let chosenData = target.dataset;
// 				chosenData.timestamp = timestamp;
// 				chosenData.hallConfig = arr.halls.find(hall => hall.hall_id == chosenData.hallId).hall_config;
// 			sessionStorage.setItem('session', JSON.stringify(chosenData));
// 		})
// 	})
// })