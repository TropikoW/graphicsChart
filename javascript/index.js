Chart.defaults.color = "#000";

const printChart = () => {
  renderModelsChart();
};

const renderModelsChart = () => {
  const data = {
    labels: ["Model 1", "Model 2", "Model 3"],
    datasets: [
      {
        data: [60, 20, 30],
        backgroundColor: ["#FF6383", "#36A2EB", "#FFCE56"],
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

printChart();
