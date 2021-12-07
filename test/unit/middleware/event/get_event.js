var expect = require("chai").expect;
var getEventMW = require("../../../../middleware/event/get_event");

describe("getEventMW middleware ", function () {
  it("should set res.locals event", function (done) {
    const mw = getEventMW({
      EventModel: {
        findOne: (p1) => {
          expect(p1).to.be.deep.equal({ _id: 13 });
          return {
            populate: () => {
              return {
                populate: () => {
                  return {
                    exec: (cb) => {
                      cb(null, "event");
                    },
                  };
                },
              };
            },
          };
        },
        //populate: () => {},
      },
    });

    let mockRes = {
      locals: {},
    };

    mw(
      {
        params: {
          eventid: 13,
        },
      },
      mockRes,
      () => {
        expect(mockRes.locals).to.be.deep.eq({ event: "event" });
        done();
      }
    );
  });

  it("should test to be an error ", function (done) {
    const mw = getEventMW({
      EventModel: {
        findOne: (p1) => {
          expect(p1).to.be.deep.equal({ _id: 13 });
          return {
            populate: () => {
              return {
                populate: () => {
                  return {
                    exec: (cb) => {
                      cb("someerror", "event");
                    },
                  };
                },
              };
            },
          };
        },
        //populate: () => {},
      },
    });

    let mockRes = {
      locals: {},
    };

    mw(
      {
        params: {
          eventid: 13,
        },
      },
      mockRes,
      (err) => {
        expect(err).to.be.deep.eq("someerror");
        done();
      }
    );
  });
  it("should call redirect if no event found ", function (done) {
    const mw = getEventMW({
      EventModel: {
        findOne: (p1) => {
          expect(p1).to.be.deep.equal({ _id: 13 });
          return {
            populate: () => {
              return {
                populate: () => {
                  return {
                    exec: (cb) => {
                      cb("someerror", undefined);
                    },
                  };
                },
              };
            },
          };
        },
        //populate: () => {},
      },
    });

    const redfn = (route) => {
      expect(route).to.be.equal("/events");
      done();
    };

    let mockRes = {
      locals: {},
      redirect: redfn,
    };

    mw(
      {
        params: {
          eventid: 13,
        },
      },
      mockRes,
      {}
    );
  });
});
