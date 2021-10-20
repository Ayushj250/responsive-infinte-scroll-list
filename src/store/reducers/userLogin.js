const initialState = {
  isLoggedIn: false
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      localStorage.setItem("userLogin", JSON.stringify({ ...state, isLoggedIn: !state.isLoggedIn }));
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "LOAD":
      const loginStatus = JSON.parse(localStorage.getItem("userLogin"));
      return { ...state, isLoggedIn: loginStatus ? loginStatus.isLoggedIn : false };
    default:
      return state;
  }
};

export default userLoginReducer;
