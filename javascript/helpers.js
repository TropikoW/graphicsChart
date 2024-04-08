const fetchCoastersData = (...urls) => {
  const promises = urls.map(url => fetch(url).then(response => response.json()))
  return Promise.all(promises)
}

const getDataColors = opacity => {
  const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#00ff00', '#ff0000', '#d6ff00', '#0038ff'];

  return colors.map(color => opacity ? `${color + opacity}` : color)
}

const getSalesByMonth = (data) => {
  const salesByMonth = {};

  data.forEach(sale => {
    const date = new Date(sale.fecha);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const pass = `${year}-${month <10?'0':''}${month}`;

    if(!salesByMonth[pass]) {
      salesByMonth[pass] = 0
    }
    salesByMonth[pass]++;
  })
  return salesByMonth;
}

export {fetchCoastersData,getDataColors,getSalesByMonth}