const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectUserData = (state) => state.user.userData;
const selectLoading = (state) => state.user.loadingUser;
const selectLoadingRegister = (state) => state.user.loadingRegisterUser;

export {selectIsLoggedIn, selectUserData, selectLoading, selectLoadingRegister} 