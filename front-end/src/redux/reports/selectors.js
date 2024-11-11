const selectIncomesReport = (state) => state.reports.incomes;
const selectExpensesReport = (state) => state.reports.expenses;
const selectIncomesCategories = (state) => state.reports.incomeCategories;
const selectExpensesCategories = (state) => state.reports.expenseCategories;
const selectChartData = (state) => state.reports.chartData;
const selectLoading = (state) => state.reports.loadingReports;

export {
  selectIncomesReport,
  selectExpensesReport,
  selectLoading,
  selectIncomesCategories,
  selectExpensesCategories,
  selectChartData,
};
