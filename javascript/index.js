import { fetchCoastersData,getDataColors,getSalesByMonth } from "/javascript/helpers.js";

Chart.defaults.color = "#000";
Chart.defaults.borderColor = "#e444";

const printChart = () => {
  fetchCoastersData("/javascript/data.json")
  .then(([allSales])=>{
    renderBillingChart(allSales);
    renderAgeChart(allSales);
  });  
};

const renderBillingChart = async(dats) => {  
  const names = Object.values(dats.map(d=>d.usuario.nombre))
  // const total = Object.values(dats.map(d=>d.monto))
  // const total = Array.from(new Set(dats.map(d => d.monto)));
  const total = [...new Set(dats.map(d => d.monto))]

  const data = {    
    labels : names,
    datasets: [
      {
        data: total.filter(monto=>monto>150),
        borderColor: getDataColors(),
        backgroundColor: getDataColors(20),
      },
    ],
  };
  const options = {
    plugins: {
      legend : {
        position : 'right'
      }
    }
  }
  new Chart("modelsChart", { type: "doughnut", data, options }); // 'doughnut' debe estar entre comillas
};

const renderAgeChart = async(dats) => {
  const names = Object.values(dats.map(d=>d.usuario.nombre))
  const oldAge = Object.values(dats.map(d=>d.usuario.edad))

  const data = {    
    labels : names,
    datasets: [
      {
        label : "Edad",
        data: oldAge,
        borderColor: getDataColors(), 
        backgroundColor: getDataColors(20)[0],
      },
    ],
  };
  const options = {
    plugins: {
      legend : {
        display : 'false'
      },
      scales : {
        r: {
          ticks : {
            display : false
          }
        }
      }
    }
  }
  new Chart("featuresChart", { type: "radar", data, options }); 
}

const renderSalesByMonthChart = async() => {

}

printChart();
