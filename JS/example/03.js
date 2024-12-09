// 題目 3: Promise.all 的應用
// 題目： 寫一個函數 getWeatherData，它接受兩個城市名稱，並返回兩個城市的天氣數據。
// 每個城市的天氣數據模擬為一個 Promise。當兩個城市的天氣數據都返回時，返回一個包含兩個城市天氣的數組。

function getWeatherData(city1, city2) {
    const weather1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${city1} weather is sunny`);
        }, 1000);
    });

    const weather2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${city2} weather is rainy`);
        }, 1500);
    });

    // 請在這裡使用 Promise.all
}


getWeatherData("New York", "London")
    .then(weather => {
        console.log(weather);  // 預期：["New York weather is sunny", "London weather is rainy"]
    })
    .catch(error => {
        console.error(error);
    });
