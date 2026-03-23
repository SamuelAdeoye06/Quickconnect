const profile = document.getElementById("profile");

if (profile) {
  profile.addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.getElementById("profileModal"));
    modal.show();
  });
}

const storedUser = localStorage.getItem("user");

if (storedUser) {
  const user = JSON.parse(storedUser);

  const fullName = user.fullName;
  const email = user.email;
  const profilePic = user.profilePic;

  const firstName = fullName ? fullName.split(" ")[0] : "User";

  const navUserName = document.getElementById("navUserName");
  if (navUserName) navUserName.textContent = firstName;

  const welcomeText = document.getElementById("welcomeText");
  if (welcomeText) welcomeText.textContent = "Welcome, " + firstName;

  const userName = document.getElementById("userName");
  if (userName) userName.textContent = fullName;

  const userEmail = document.getElementById("userEmail");
  if (userEmail) userEmail.textContent = email;

  const navPic = document.getElementById("profilePic");
  if (navPic) navPic.src = profilePic;

  const modalPic = document.getElementById("modalProfilePic");
  if (modalPic) modalPic.src = profilePic;
}

function showToast(message) {
  const toastMessage = document.getElementById("toastMessage");
  const toastElement = document.getElementById("appToast");

  toastMessage.textContent = message;

  const toast = new bootstrap.Toast(toastElement);

  toast.show();
}
