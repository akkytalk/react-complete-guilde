import reducer from "./auth";
import * as actionTypes from "../../store/actions/actionTypes";

describe("auth reducer ", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      userId: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          error: null,
          userId: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-userid",
        }
      )
    ).toEqual({
      token: "some-token",
      error: null,
      userId: "some-userid",
      loading: false,
      authRedirectPath: "/",
    });
  });
});
