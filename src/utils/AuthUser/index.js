import Cookies from "js-cookie";

const AuthUser = {
  isAuthorization() {
    if (Cookies.get("token") && Cookies.get("role") === "user") return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token" && Cookies.get("role") === "user");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("uid");
    Cookies.remove("role");
    navigate("/login");
  },
  storeUserInfoToCookie(user, data) {
    if (!user.accessToken) return null;
    Cookies.remove("token");
    Cookies.remove("uid");
    Cookies.remove("role");
    const { accessToken } = user;
    const { uid, role } = data;
    Cookies.set("token", accessToken, { expires: 1 });
    Cookies.set("uid", uid, { expires: 1 });
    Cookies.set("role", role, { expires: 1 });
    return user && data;
  },
};

export default AuthUser;
