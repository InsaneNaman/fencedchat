//utils
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";
import { fireToast } from "../sweetalert";

//constants
import { TOAST_EVENT_TYPE } from "../../constants";
export const getUniqueName = () => {
  return uniqueNamesGenerator({
    dictionaries: [colors, animals],
    style: "capital",
    separator: " ",
    length: 2,
  });
};

export const copyToClipboard = (text, successText, errorText) => {
  navigator.clipboard.writeText(text).then(
    function () {
      fireToast(TOAST_EVENT_TYPE.SUCCESS, successText, 1000);
    },
    function () {
      fireToast(TOAST_EVENT_TYPE.ERROR, errorText, 1000);
    }
  );
};
