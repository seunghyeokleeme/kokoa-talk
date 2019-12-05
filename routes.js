// Global

const HOME = "/";
const JOIN = "/join";
const LOGOUT = "/logout";
const LOGIN = "/login";
const SEARCH = "/search";
const MORE = "/more";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Friends

const FRIENDS = "/friends";
const ADD_FRIEND = "/add";
const FRIEND_DETAIL = "/:id";
const EDIT_FRIEND = "/:id/edit";
const DELETE_FRIEND = "/:id/delete";

// Chats

const CHATS = "/chats";
const ADD_CHAT = "/add";
const CHAT_DETAIL = "/:id";
const EDIT_CHAT = "/:id/edit";
const DELETE_CHAT = "/:id/delete";

// Settings

const SETTINGS = "/settings";
const FRIEND_SETTING = "/friend";
const CHAT_SETTING = "/chat";
const PROFILE_SETTING = "/profile";

const routes = {
  home: HOME,
  join: JOIN,
  logout: LOGOUT,
  login: LOGIN,
  search: SEARCH,
  more: MORE,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  friends: FRIENDS,
  addFriend: ADD_FRIEND,
  friendDetail: FRIEND_DETAIL,
  editFriend: EDIT_FRIEND,
  deleteFriend: DELETE_FRIEND,
  chats: CHATS,
  addChat: ADD_CHAT,
  chatDetail: CHAT_DETAIL,
  editChat: EDIT_CHAT,
  deleteChat: DELETE_CHAT,
  settings: SETTINGS,
  friendSetting: FRIEND_SETTING,
  chatSettings: CHAT_SETTING,
  profileSetting: PROFILE_SETTING
};
