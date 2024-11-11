export const createStats = (expenses) => {
  const monthStats = {
    January: "N/A",
    February: "N/A",
    March: "N/A",
    April: "N/A",
    May: "N/A",
    June: "N/A",
    July: "N/A",
    August: "N/A",
    September: "N/A",
    October: "N/A",
    November: "N/A",
    December: "N/A",
  };
  expenses.forEach(expense => {
    const month = new Date(expense.date).toLocaleString('en-us',{month:'long'});
    console.log({month});
    if (monthStats[month] === "N/A") {
      monthStats[month] = expense.amount;
    } else {
      monthStats[month] += expense.amount;
    }
  });

  return monthStats
};

export const filterTransactions = (period, array) => {
  const filteredArray = [];
  array.forEach(el => {
    const spliceEl = el.date.slice(0,7);
    if(period == spliceEl){
      filteredArray.push(el)
    }
  });
  return filteredArray
};

export const createTransactionData = (expenses, incomes) => {
  const incomesData = incomes.reduce((acc, income) => {
    const { category, amount, description } = income;
    if (!acc[category]) {
      acc[category] = { [description]: 0 };
    }
    acc[category][description] = amount;
    return acc;
  }, {});

  const expensesData = expenses.reduce((acc, expense) => {
    const { category, amount, description } = expense;
    if (!acc[category]) {
      acc[category] = { [description]: 0 };
    }
    acc[category][description] = amount;
    return acc;
  }, {});

  const periodData = {
    incomes: {
      total: incomes.reduce((acc, income) => acc + income.amount, 0),
      incomesData,
    },
    expenses: {
      total: expenses.reduce((acc, expense) => acc + expense.amount, 0),
      expensesData,
    },
  };

  return periodData
};

// export const createTransactionData = (expenses, incomes) => {
//   const incomesData = incomes.reduce((acc, income) => {
//     const { category, amount, description } = income;
//     if (!acc[category]) {
//       acc[category] = { total: 0 };
//     }
//     acc[category].total += amount;
//     acc[category][description] = amount;
//     return acc;
//   }, {});

//   const expensesData = expenses.reduce((acc, expense) => {
//     const { category, amount, description } = expense;
//     if (!acc[category]) {
//       acc[category] = { total: 0 };
//     }
//     acc[category].total += amount;
//     acc[category][description] = amount;
//     return acc;
//   }, {});

//   const periodData = {
//     incomes: {
//       total: incomes.reduce((acc, income) => acc + income.amount, 0),
//       incomesData,
//     },
//     expenses: {
//       total: expenses.reduce((acc, expense) => acc + expense.amount, 0),
//       expensesData,
//     },
//   };

//   return periodData
// };



// export const createTransactionData = (expenses, incomes) => {
//   const data = {
//     incomes: {
//       total: 0,
//       incomesData: {}
//     },
//     expenses: {
//       total: 0,
//       expensesData: {}
//     }
//   };

//   incomes.forEach(income => {
//     console.log({income});
//     data.incomes.total += income.amount;
//     if(!data.incomes.incomesData[income.category]){
//       data.incomes.incomesData[income.category] = {};
//     }
    
//     // console.log(typeof(data.incomes.incomesData[income.category].total));
//     if(!data.incomes.incomesData[income.category].total){
//       data.incomes.incomesData[income.category].total = 0;
//     }
//     data.incomes.incomesData[income.category].total += income.amount;
//     console.log("DUPA1: ", data.incomes.incomesData[income.category]);
//     if(income.category === data.incomes.incomesData[income.category]){
//       console.log("DUPA");
//       // console.log(data.incomes.incomesData[income.category].total);
//       // data.incomes.incomesData[income.category].total += income.amount;
//       data.incomes.incomesData[income.category][income.description] += income.amount
//     }
    
//   });
//   return data
// }