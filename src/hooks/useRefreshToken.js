import axios from "../api/axios";
import { setAuthToken } from "../utils/auth";

const useRefreshToken = () => {

  const refresh = async (refreshToken) => {
    const response = await axios.post("/refresh-token", { refreshToken }, { withCredentials: true });
    setAuthToken({accessToken: response.data.response})
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
