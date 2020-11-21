import { route } from "preact-router";
import { nanoid } from "nanoid";

//utils
import { copyToClipboard } from "../../../lib/utils/common";
import { updateValueInSTORE } from "../../../lib/store/helpers";
import { fireModal } from "../../../lib/utils/sweetalert";
import { createRoom, validateRoom } from "../../../lib/utils/socket";
import { fireToast } from "../../../lib/utils/sweetalert";

//constants
import { TOAST_EVENT_TYPE } from "../../../lib/constants";

export const copyUserURL = (text) => {
  copyToClipboard(text, "Copied Room ID to Clipboard", "Failed to Copy");
};

export const getChatRoomLabel = () => {
  const roomId = nanoid();
  updateValueInSTORE("chatRoom", roomId);
  return `Room: ${roomId}`;
};

export const createChatRoomOnSocket = (roomId) => {
  const config = {
    title: "Enter Password",
    input: "text",
    inputPlaceholder: "Leave Blank for Default",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Submit 👍",
  };
  fireModal(config).then((result) => {
    fireToast(TOAST_EVENT_TYPE.SUCCESS, "Creating Room and Joining", 3000);
    const pwd = result.value;
    updateValueInSTORE("password", pwd);
    updateValueInSTORE("chatRoom", roomId);
    createRoom(roomId, pwd).then((res) => {
      const { data } = res;
      if (data.msg === "room-created") {
        route(`/chat/${roomId}`);
      }
    });
  });
};

export const joinRoom = (roomId, pwd) => {
  fireToast(TOAST_EVENT_TYPE.SUCCESS, "Joining! Please Wait", 3000);
  validateRoom(roomId, pwd)
    .then((res) => {
      const { data } = res;
      if (data && data.msg === "room-found") {
        updateValueInSTORE("password", pwd);
        route(`/chat/${roomId}`);
      } else {
        fireToast(TOAST_EVENT_TYPE.ERROR, "Room Not Found", 3000);
      }
    })
    .catch((err) => {
      fireToast(TOAST_EVENT_TYPE.ERROR, "Room Not Found", 3000);
    });
};
