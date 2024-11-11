const selectIncomes = (state) => state.incomes.userIncomes;
const selectMonthStats = (state) => state.incomes.monthStats;
const selectIncomesLoading = (state) => state.incomes.loadingIncomes;
const selectDeleteIncomesLoading = (state) => state.incomes.loadingDeleteIncomes;

export {selectIncomes, selectMonthStats, selectIncomesLoading, selectDeleteIncomesLoading}