const selectExpenses = (state) => state.expenses.userExpenses;
const selectMonthStats = (state) => state.expenses.monthStats;
const selectExpensesLoading = (state) => state.expenses.loadingExpenses;
const selectDeleteExpensesLoading = (state) => state.expenses.loadingDeleteExpenses;

export {selectExpenses, selectMonthStats, selectExpensesLoading, selectDeleteExpensesLoading}