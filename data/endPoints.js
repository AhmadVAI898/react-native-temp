const endPoints = {
  auth: {
    LOGIN: "auth/login/",
    USERINFO: "auth/user/",
    LOGOUT: "auth/logout/",
  },
  news: {
    GET_NEWS: (page) => `news/?page=${page}&limit=5`,
  },
  maps: {
    GET_MARKERS: `maps/`,
  },
  notifications: {
    GET_NOTIFICATIONS: `notifications/`,
    MARK_AS_READ: (id) => `notifications/mark-as-read/${id}/`,
  },
};

export default endPoints;
