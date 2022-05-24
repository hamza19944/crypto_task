// set date of last 2 weeks
var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };


let dateArr = []
for (let i = 13; i >= 0; i--) {
    let date = new Date();
    date.setDate(date.getDate() - i);
    dateArr.push(date.toLocaleDateString("en-US", options))
}

let coins = []
let theUrl = "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD"
let theData = fetch(theUrl).then(res => res.json()).then(dt => {
    for (let i = 0; i < dt.coins.length; i++) {
        const element = dt.coins[i];
        coins.push(element)
    }
});

let ethereum = []
let url = "https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum"
let theDataFirst = fetch(url).then(res => res.json()).then(dt => {
    for (let i = 0; i < dt.chart.length; i++) {
        const element = dt.chart[i];
        ethereum.push(element)
    }
    return ethereum
}).then(result => {
    result = result.slice(-15).map((el) => {
        return el[1]
    })
    return result
}).then((el) => {
    ethereum = el
})


let bitcoin = []
let urltwo = "https://api.coinstats.app/public/v1/charts?period=1m&coinId=bitcoin"
let theDataTwo = fetch(urltwo).then(res => res.json()).then(dt => {
    for (let i = 0; i < dt.chart.length; i++) {
        const element = dt.chart[i];
        bitcoin.push(element)
    }
    return bitcoin
}).then(result => {
    result = result.slice(-15).map((el) => {
        return el[1]
    })
    return result
}).then((el) => {
    bitcoin = el
})


let id = [bitcoin, ethereum]
let coin;
setTimeout(() => {
    for(let i = 0; i < id.length; i++){
        // create canvas
        let createCanvas = document.createElement('canvas')
        createCanvas.id = coins[i].symbol
        document.body.appendChild(createCanvas)
    
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>
                <img src="${coins[i].icon}">
                <span>${coins[i].symbol}</span>
            </td>
            <td id="${coins[i].id}"></td>
            <td>${coins[i].price.toFixed(2)}</td>
            `
        document.querySelector(".bottom tbody").appendChild(tr)
        coin = new Coin(coins[i].id);
        // let arr = coin.getChartData()
        document.getElementById(`${coins[i].id}`).appendChild(createCanvas)

    // start chart
    const data = {
        labels: dateArr,
        datasets: [{
            label: '',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: id[i].slice(-15),
            tension: 0.5,
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            elements: {
                point:{
                    radius: 0
                }
            },
            interaction: {intersect: false},
            scales:{
                x:{
                    display: false,
                    title:{
                        display: false
                    }
                },
                y:{
                    display: false,
                    title:{
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            }
        }
    };
    const myChart = new Chart(
        document.getElementById(coins[i].symbol),
        config
    );
}
}, 700)

class Coin{
    constructor(id){
        this.id = id
    }
    // methods
    getChartData(){
        let chartData = new Array()
        let urltwo = `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${this.id}`
        let theDataTwo = fetch(urltwo).then(res => res.json()).then(dt => {
            for (let i = 0; i < dt.chart.length; i++) {
                const element = dt.chart[i][1];
                chartData.push(element)
            }
        });
        return chartData;
    }
}