import Cookies from "js-cookie";

const AuthAdmin = {
  isAuthorization() {
    if (Cookies.get("token")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("uid");
    Cookies.remove("email");
    Cookies.remove("admin");
    navigate("/admin/login");
  },
  storeAdminInfoToCookie(user, data) {
    if (!user.accessToken) return null;
    const { accessToken } = user;
    const { uid, email, role } = data;
    Cookies.set("token", accessToken, { expires: 1 });
    Cookies.set("uid", uid, { expires: 1 });
    Cookies.set("email", email, { expires: 1 });
    Cookies.set("role", role, { expires: 1 });
    return user && data;
  },
};

export default AuthAdmin;
