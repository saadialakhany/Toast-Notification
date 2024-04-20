const btnContainer = document.querySelector(".buttons");
const notificationsContainer = document.querySelector(
  ".notifications--container"
);

btnContainer.addEventListener("click", function (e) {
  const btnClicked = e.target.closest(".btn");
  if (!btnClicked) return;
  const action = btnClicked.innerText;
  const msgSuccess = "Successfully Submitted";
  const msgError = "Please fix the error!";
  const msgInvalid = "Invalid input, check again";

  let markup = "";

  if (action === "Success") {
    markup = `<div class="notification noti--${action.toLowerCase()}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#38b000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
      <p class="message message--${action}">${msgSuccess}</p>
    </div>`;
  }
  if (action === "Error") {
    markup = `<div class="notification noti--${action.toLowerCase()}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d00000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
  <p class="message message--${action}">${msgError}</p>
</div>`;
  }
  if (action === "Invalid") {
    markup = `<div class="notification noti--${action.toLowerCase()} ">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffba08" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path></svg>
    <p class="message message--${action}">${msgInvalid}</p>
  </div>`;
  }

  notificationsContainer.insertAdjacentHTML("afterbegin", markup);

  const notification = notificationsContainer.querySelector(
    `.noti--${action.toLowerCase()}`
  );
  if (notification) {
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
});
