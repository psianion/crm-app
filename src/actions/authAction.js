import axios from "axios";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let res = await axios({
      url: "/api/Login",
      method: "POST",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: loginPayload,
    });
    let response = await res.data;
    if (res.status === 200) {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      console.log(response);
      console.log(response.message);
      return response.data;
    } else {
      dispatch({ type: "LOGIN_ERROR", err: response.message });
      console.error(response.message);
    }
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", err: err });
    console.error(err);
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
