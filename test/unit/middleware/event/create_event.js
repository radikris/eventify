var expect = require("chai").expect;
var createEventMW = require("../../../../middleware/event/create_event");

describe("createEVentMW middleware ", function () {
  it("should create and redirect to /events", function (done) {
    class EventMockModel {
      save(cb) {
        cb(null, {});
      }
    }
    const mw = createEventMW({
      EventModel: EventMockModel,
    });

    mw(
      {
        body: {
          event_name: "",
          event_description: "",
          event_date: "",
        },
        file: "",
        session: {
          userid: "",
        },
      },
      {
        redirect: (route) => {
          expect(route).to.be.equals("/events");
          done();
        },
      },
      () => {
        //no next
      }
    );
  });
  it("should fail to create and throw error", function (done) {
    class EventMockModel {
      save(cb) {
        cb("error", {});
      }
    }
    const mw = createEventMW({
      EventModel: EventMockModel,
    });

    mw(
      {
        body: {
          event_name: "",
          event_description: "",
          event_date: "",
        },
        file: "",
        session: {
          userid: "",
        },
      },
      {},
      (err) => {
        expect(err).not.to.be.equals(undefined);
        expect(err).to.be.equals("error");
        done();
      }
    );
  });

  it("should return next if event_name is undefined", function (done) {
    const mw = createEventMW({
      EventModel: {},
    });

    mw(
      {
        body: {
          event_name: undefined,
          event_description: "",
          event_date: "",
        },
        file: "",
      },
      {},
      (param) => {
        expect(param).to.be.equals(undefined);
        done();
      }
    );
  });
  it("should return next if event_description is undefined", function (done) {
    const mw = createEventMW({
      EventModel: {},
    });

    mw(
      {
        body: {
          event_name: "",
          event_description: undefined,
          event_date: "",
        },
        file: "",
      },
      {},
      (param) => {
        expect(param).to.be.equals(undefined);
        done();
      }
    );
  });
  it("should return next if event_date is undefined", function (done) {
    const mw = createEventMW({
      EventModel: {},
    });

    mw(
      {
        body: {
          event_name: "",
          event_description: "",
          event_date: undefined,
        },
        file: "",
      },
      {},
      (param) => {
        expect(param).to.be.equals(undefined);
        done();
      }
    );
  });
  it("should return next if file is undefined", function (done) {
    const mw = createEventMW({
      EventModel: {},
    });

    mw(
      {
        body: {
          event_name: "",
          event_description: "",
          event_date: "",
        },
        file: undefined,
      },
      {},
      (param) => {
        expect(param).to.be.equals(undefined);
        done();
      }
    );
  });
});
