// function createRequest(body, callback) {
//     let xhr = new XMLHttpRequest();
//     let response = xhr.response
//   xhr.open("POST", "https://jscp-diplom.netoserver.ru/");
//   xhr.responseType = "json";
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.send(body);
//   xhr.onload = () => {
//     callback(response);
//   };
// };




// function request(callback,data) {
//     let url = "https://jscp-diplom.netoserver.ru/"; // URL для обращения
//     xhr.responseType = 'json'
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//           callback(xhr.response);
//         } 
//         else {
//           alert("Ошибка: " + xhr.status);
//         }
//       }
//     };

//     xhr.onerror = function() {
//       alert("Произошла ошибка сети или неправильный URL");
//     };

//     xhr.send(xhr.response);
//   }




function createRequest(method, url, data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.responseType = 'json';
  xhr.onerror = function () {
    console.error('Произошла ошибка при отправке запроса');
    callback(null);
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
      try {
        let response = xhr.response;
        callback(response);
      } catch (error) {
        console.error('Произошла ошибка: ', error);
        callback(null);
      }
    }
  };
  xhr.send(data);
}

// function createRequest(method, url, data, callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//   xhr.responseType = 'json';
//   xhr.onerror = function () {
//     console.error('Произошла ошибка при отправке запроса');
//     callback(null);
//   };
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
//       try {
//         let response = xhr.response;
//         callback(response);
//       } catch (error) {
//         console.error('Произошла ошибка');
//         // callback(null);
//       }
//     }
//   };
//   xhr.send(data);
// }