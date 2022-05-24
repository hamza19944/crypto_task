// draw chart function
function drawChart() {

    
    let listValue = localStorage.getItem('arr').split(",")
    
    let lis = document.querySelectorAll(".values li h2")
    lis.forEach((li, i) => {
        li.innerText = listValue[i]
    })

    // start chart
    const data = {
        labels: ['USD', "BTC", "ETH"],
        datasets: [{
            label: '',
            backgroundColor: ['red','blue', "yellow"],
            borderColor: 'rgb(255, 99, 132)',
            data: listValue,
        }]
    };
    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    }
    const myChart = new Chart(
        document.getElementById("myChart"),
        config
    );
}
drawChart()


// show input field to add or remove
let btns = document.querySelectorAll(".btns li")
let input = document.querySelector("aside .input")
let money = 0;
let show = false;
let fixed;


let lists = document.querySelectorAll(".values li")
// let listValue;
lists.forEach(li => {
    // click to show label value
    li.addEventListener("click", () => {
        money = li.querySelector("h2").innerText
        input.querySelector("label").innerText = money
        input.querySelector("p").style.display = 'none'
        fixed = input.querySelector("label").innerText
        // show hide label
        show = true
        if (show === true) {
            input.querySelector("label").style.display = 'block'
        }
    })
})


btns.forEach(btn => {
    // add or delete value
    btn.addEventListener("click",() => {
        // regular the value to be always positive
        let reg = /[0-9]/g
        let inputValue = input.querySelector("input").value.match(reg).join("")
        
        
        input.style.display = 'flex'

        // show hide label
        if (show === false) {
            input.querySelector("label").style.display = 'none'
        }

        // if clicked add + 
        if(btn.className === "add"){   
            money = +money + +inputValue 
            input.querySelector("input").value = ''
            if(money < 0){
                money = 0
            }
            
        // if clicked delete -
        }else{
            money = +money - +inputValue 
            input.querySelector("input").value = ''
            if(money < 0){
                money = 0
            }
        }

        // change the value of label and main value
        input.querySelector("label").innerHTML = money
        lists.forEach(li => {
            if(li.querySelector("h2").innerText === fixed){
                li.querySelector("h2").innerText = money
                fixed = input.querySelector("label").innerHTML
            }
        })
        toLocal()
        function toLocal() {
            let listValue = []
    
            let lis = document.querySelectorAll(".values li h2")
            lis.forEach(li => {
                listValue.push(+li.innerText)
            })
            localStorage.setItem("arr", listValue)
        }
    })
})