/**
 * Enum for app sections
 */
export const AppSection = Object.freeze({
  DASHBOARD: "DASHBOARD",
  ACCOUNT: "ACCOUNT",
  POSITIONS: "POSITIONS",
  ADMIN: "ADMIN",
});

/**
 * Enum for all action types
 */
export const ActionTypes = Object.freeze({
  NAV_CHANGE_SECTION: "NAV_CHANGE_SECTION",
  NAV_CHANGE_DRAWER: "NAV_CHANGE_DRAWER",

  DATA_USERS_REQUEST: "DATA_USERS_REQUEST",
  DATA_USERS_RECEIVE: "DATA_USERS_RECEIVE",
  DATA_USERS_FAIL: "DATA_USERS_FAIL",
});

export const ActionGroups = Object.freeze({
  UI: "UI",
  DATA: "DATA",
});

/**
 * Enum for the status of a request
 */
export const RequestStatus = Object.freeze({
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
  FAILED: "FAILED",
});

