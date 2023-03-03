import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  signOut(navigate) {
    Cookies.remove("token");
    navigate("/cdc/login");
  },
  storeUserInfoToCookie(data) {
    if (!data.accessToken) return null;
    const { accessToken } = data;
    Cookies.set("token", accessToken, { expires: 1 });
    return data;
  },
};

export default Auth;
