const authMW = require("../middleware/common/auth");
const reverseAuthMW = require("../middleware/common/reverse_auth");
const renderMW = require("../middleware/common/render");
const loginMW = require("../middleware/auth/login");
const registerMW = require("../middleware/auth/register");
const forgetPasswordMW = require("../middleware/auth/forget_password");
const logoutMW = require("../middleware/auth/logout");
const actionFavoriteEventMW = require("../middleware/user/action_favorite_event");
const actionGoingEventMW = require("../middleware/user/action_going_event");
const editUserNameMW = require("../middleware/user/edit_user_name");
const getUserEventsMW = require("../middleware/user/get_user_events");
const getUserFavoritesMW = require("../middleware/user/get_user_favorites");
const getUserMW = require("../middleware/user/get_user");
const createEventMW = require("../middleware/event/create_event");
const deleteEventMW = require("../middleware/event/delete_event");
const editEventMW = require("../middleware/event/edit_event");
const getEventMembersMW = require("../middleware/event/get_event_members");
const getEventUserFavoriteMW = require("../middleware/event/get_event_user_favorite");
const getEventUserGoingMW = require("../middleware/event/get_event_user_going");
const getEventMW = require("../middleware/event/get_event");
const getEventsMW = require("../middleware/event/get_events");
const getTodayEventsMW = require("../middleware/event/get_today_events");

module.exports = function (app) {
  const objRepo = {};

  app.use(
    "/",
    reverseAuthMW(objRepo), //try to autologin
    loginMW(objRepo), //login form check
    renderMW(objRepo, "index")
  );

  app.use(
    "/register",
    reverseAuthMW(objRepo), //try to autologin
    registerMW(objRepo), //register form check
    renderMW(objRepo, "register")
  );

  app.use(
    "/forgetpw",
    reverseAuthMW(objRepo), //try to autologin
    forgetPasswordMW(objRepo), //forget pasword form check and "in real newpw email send"
    renderMW(objRepo, "forget_password")
  );

  app.post("/logout", authMW(objRepo), logoutMW(objRepo));

  app.use(
    "/events",
    authMW(objRepo), //if not login, redirect to
    actionFavoriteEventMW(objRepo), //toggle favorite eventid in db
    actionGoingEventMW(objRepo), //going/skip eventid in db
    getEventsMW(objRepo), //get all events from db
    getEventUserFavoriteMW(objRepo), //check all events if user favorited them
    getEventUserGoingMW(objRepo), //check all events if user going them
    getTodayEventsMW(objRepo), //add events to another list which are today
    renderMW(objRepo, "dashboard")
  );

  app.use(
    "/events/add",
    authMW(objRepo),
    actionFavoriteEventMW(objRepo),
    actionGoingEventMW(objRepo),
    getEventsMW(objRepo),
    getEventUserFavoriteMW(objRepo),
    getEventUserGoingMW(objRepo),
    getTodayEventsMW(objRepo),
    createEventMW(objRepo), //create event on modal
    renderMW(objRepo, "dashboard")
  );

  app.use(
    "/events/:eventid",
    authMW(objRepo),
    actionFavoriteEventMW(objRepo),
    actionGoingEventMW(objRepo),
    getEventMW(objRepo),
    getEventMembersMW(objRepo), //get all users to eventid if going/skip
    getEventUserFavoriteMW(objRepo),
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "event_detail")
  );

  app.use(
    "/favorites",
    authMW(objRepo),
    actionFavoriteEventMW(objRepo),
    actionGoingEventMW(objRepo),
    getUserFavoritesMW(objRepo),
    getEventUserFavoriteMW(objRepo), //get all events which are favorited by the user
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "favorites")
  );

  app.use(
    "/profile",
    authMW(objRepo),
    editUserNameMW(objRepo), //edit userid with new username
    getUserMW(objRepo), //get userid all data
    actionGoingEventMW(objRepo),
    getUserEventsMW(objRepo), //get all events created by the user
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "profile")
  );

  app.use(
    "/profile/edit/:eventid",
    authMW(objRepo),
    getUserMW(objRepo),
    getUserEventsMW(objRepo),
    getEventUserGoingMW(objRepo),
    getEventMW(objRepo),
    editEventMW(objRepo), //edit eventid event with new datas
    renderMW(objRepo, "profile")
  );

  app.get(
    "/profile/del/:eventid",
    authMW(objRepo),
    getEvent(objRepo),
    deleteEventMW(objRepo) //delete eventid
  );
};
