//preact
import { route } from "preact-router";

//utils
import { fireModal } from "../../lib/utils/sweetalert";
import { getUniqueName } from "../../lib/utils/common";
import { updateValueInSTORE } from "../../lib/store/helpers";

export const fireUserNameModal = () => {
  const coolName = localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : getUniqueName(),
    dicebearAvatarUrl = `https://avatars.dicebear.com/api/bottts/${coolName}.svg`,
    config = {
      title: "Your Secret Name?",
      input: "text",
      inputValue: coolName,
      inputPlaceholder: "Enter Secret Name 👀",
      inputAttributes: {
        autocapitalize: "off",
      },
      inputValidator: (value) => {
        if (!value) {
          return `What about a cool name like ${getUniqueName()}?`;
        }
      },
      showCancelButton: true,
      confirmButtonText: "Submit 👍",
      imageAlt: coolName,
      imageUrl: dicebearAvatarUrl,
      imageWidth: 205,
      imageHeight: 205,
    };
  fireModal(config).then((result) => {
    if (result.value) {
      updateValueInSTORE("userName", result.value);
      route("/chat");
    }
  });
};
