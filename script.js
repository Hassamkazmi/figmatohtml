function nextStep(stepNumber) {
  // Hide all steps
  for (let i = 1; i <= 3; i++) {
    document.getElementById("step" + i).style.display = "none";
  }

  // Show the current step
  document.getElementById("step" + stepNumber).style.display = "block";
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.querySelector(".password-toggle");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

let playsLeft = 5;

document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    if (playsLeft > 0) {
      audioPlayer.play().catch((e) => {
        console.error("Error playing the audio: ", e);
        alert(
          "Error playing the audio. Please make sure the file is correct and your browser settings allow audio playback."
        );
      });
      playsLeft--;
      document.getElementById("playCount").innerHTML =
        "Plays left: " + playsLeft;
    } else {
      alert("You've reached the play limit!");
    }
  });
});
