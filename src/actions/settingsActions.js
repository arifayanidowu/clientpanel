import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./types";

export const setDisableBalanceOnAdd = () => {
  // Get settings from localStorage
  let settings = JSON.parse(localStorage.getItem("settings"));

  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // Set Settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};
export const setDisableBalanceOnEdit = () => {
  // Get settings from localStorage
  let settings = JSON.parse(localStorage.getItem("settings"));

  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // Set Settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};
export const setAllowRegistration = () => {
  // Get settings from localStorage
  let settings = JSON.parse(localStorage.getItem("settings"));

  settings.allowRegistration = !settings.allowRegistration;

  // Set Settings back to localStorage
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
