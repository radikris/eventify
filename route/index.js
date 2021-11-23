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
const getEventUserFavoriteMW = require("../middleware/event/get_event_user_favorite");
const getEventUserGoingMW = require("../middleware/event/get_event_user_going");
const getEventMW = require("../middleware/event/get_event");
const getEventsMW = require("../middleware/event/get_events");
const getTodayEventsMW = require("../middleware/event/get_today_events");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const UserModel = require("../models/user");
const EventModel = require("../models/event");
const FavoriteModel = require("../models/favorite");

module.exports = function (app) {
  const objRepo = {
    UserModel: UserModel,
    EventModel: EventModel,
    FavoriteModel: FavoriteModel,
  };

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
    "/events/add",
    authMW(objRepo),
    upload.single("event_image"),
    createEventMW(objRepo), //create event on different page
    renderMW(objRepo, "event_create")
  );

  app.use(
    "/events/:eventid",
    authMW(objRepo),
    getEventMW(objRepo),
    getEventUserFavoriteMW(objRepo),
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "event_detail")
  );

  app.use(
    "/events",
    authMW(objRepo), //if not login, redirect to
    getEventsMW(objRepo), //get all events from db
    getEventUserFavoriteMW(objRepo), //check all events if user favorited them
    getEventUserGoingMW(objRepo), //check all events if user going them
    getTodayEventsMW(objRepo), //add events to another list which are today
    renderMW(objRepo, "dashboard")
  );

  app.use(
    "/favorites",
    authMW(objRepo),
    getUserFavoritesMW(objRepo),
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "favorites")
  );

  app.use(
    "/action/favorite/:eventid",
    authMW(objRepo),
    actionFavoriteEventMW(objRepo)
  );

  app.use(
    "/action/going/:eventid/:value",
    authMW(objRepo),
    actionGoingEventMW(objRepo)
  );

  app.use(
    "/profile/edit/:eventid",
    authMW(objRepo),
    getEventMW(objRepo),
    editEventMW(objRepo), //edit eventid event with new datas
    renderMW(objRepo, "event_edit")
  );

  app.use(
    "/profile/del/:eventid",
    authMW(objRepo),
    getEventMW(objRepo),
    deleteEventMW(objRepo) //delete eventid
  );

  app.use(
    "/profile",
    authMW(objRepo),
    editUserNameMW(objRepo), //edit userid with new username
    getUserMW(objRepo), //get userid all data
    getUserEventsMW(objRepo), //get all events created by the user
    getEventUserGoingMW(objRepo),
    renderMW(objRepo, "profile")
  );

  app.use(
    "/",
    reverseAuthMW(objRepo), //try to autologin
    loginMW(objRepo), //login form check
    renderMW(objRepo, "index")
  );
};
