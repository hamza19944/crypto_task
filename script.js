// let url = "https://api.coindesk.com/v1/bpi/historical/close.json"
// let arr = []
// let obj = {}
// let key;
// let value;

// fetch(url)
//   .then(response => response.json())
//   .then(dt => {
//     for(const [k, v] of Object.entries(dt.bpi)){
//         arr.push([k, v])
//     }
//     let clips = arr.slice(-14)
//     clips.forEach(clip => {
//         key = clip[0]
//         value = clip[1]
//         obj[key] = value
//     })

//     // start chart
//     const data = {
//         labels: Object.keys(obj),
//         datasets: [{
//             label: '',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: Object.values(obj),
//         }]
//     };
//     const config = {
//         type: 'line',
//         data: data,
//         options: {}
//     };
//     const myChart = new Chart(
//         document.getElementById('myChart'),
//         config
//     );
// });



// let btcInput = document.querySelector(".btc").lastElementChild
// let ethInput = document.querySelector(".eth").lastElementChild
// let usdInput = document.querySelector(".usd").lastElementChild

// let both = "https://api.coinlore.net/api/ticker/?id=90,80"

// fetch(both).then(res => res.json()).then(dt => {
//     btcInput.value = 1
//     usdInput.value = dt[0]['price_usd']
//     ethInput.value = (dt[0]['price_usd'] / dt[1]['price_usd']).toFixed(2)
//     return dt[1]["price_usd"]
// }).then((repo)=>{
//     window.setTimeout(()=> {
//         newobj = {
//             "btc": btcInput.value,
//             "usd": usdInput.value,
//             "eth": ethInput.value,
//             "ethtousd": repo
//         }
//     }, 0)
// })

// let newobj = {}


// const allInputs = document.querySelectorAll(".exchange>div>input")

// allInputs.forEach(inputAdd => {
//     inputAdd.addEventListener("keyup", () => {
//         if (inputAdd.value >= 0) {
//             if (inputAdd.parentElement.className === 'btc') {
//                 usdInput.value = inputAdd.value * newobj['usd']
//                 ethInput.value = inputAdd.value * newobj["eth"]
//             }else if(inputAdd.parentElement.className === 'usd'){
//                 btcInput.value = inputAdd.value/newobj['usd']
//                 ethInput.value = inputAdd.value/newobj["ethtousd"]
//             }else{
//                 btcInput.value = inputAdd.value/newobj['eth']
//                 usdInput.value = inputAdd.value * newobj["ethtousd"]
//             }
//         }
//     })
//     inputAdd.addEventListener("mouseup", () => {
//         if (inputAdd.value >= 0) {
//             if (inputAdd.parentElement.className === 'btc') {
//                 usdInput.value = inputAdd.value * newobj['usd']
//                 ethInput.value = inputAdd.value * newobj["eth"]
//             }else if(inputAdd.parentElement.className === 'usd'){
//                 btcInput.value = inputAdd.value/newobj['usd']
//                 ethInput.value = inputAdd.value/newobj["ethtousd"]
//             }else{
//                 btcInput.value = inputAdd.value/newobj['eth']
//                 usdInput.value = inputAdd.value * newobj["ethtousd"]
//             }
//         }
//     })
// })
