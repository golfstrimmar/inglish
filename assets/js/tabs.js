"use ctrict";

const MyTabs = (tab) => {
  let title = tab.querySelector(".tab-title-js");
  let span = title.querySelector("span");
  let hidden = tab.querySelector(".tab-hidden-js");
  let titleSvg = title.querySelector("svg");
  hidden.style.height = "0px";

  const openHidden = () => {
    title.classList.add("is-active");
    hidden.classList.add("is-active");
    titleSvg.classList.add("is-active");
    hidden.style.height = `${hidden.scrollHeight}px`;
    hidden.animate(
      [{ height: "0px" }, { height: `${hidden.scrollHeight}px` }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
  };

  const closeHidden = () => {
    title.classList.remove("is-active");
    hidden.classList.remove("is-active");
    titleSvg.classList.remove("is-active");
    hidden.animate(
      [{ height: `${hidden.scrollHeight}px` }, { height: "0px" }],
      {
        duration: 200,
        easing: "ease-in-out",
      }
    );
    hidden.style.height = "0px";
  };

  function openItems(e) {
    if (
      (e.target == title || e.target == titleSvg || e.target == span) &&
      !hidden.classList.contains("is-active")
    ) {
      openHidden();
    } else if (e.target == title && hidden.classList.contains("is-active")) {
      closeHidden();
    } else if (
      hidden.classList.contains("is-active") &&
      !e.target.closest(".tab-hidden-js")
    ) {
      closeHidden();
    }
  }

  document.addEventListener("click", openItems);
};

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  if (tabs.length > 0) {
    tabs.forEach((tab) => {
      MyTabs(tab);
    });
  }
});
