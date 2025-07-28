function openForm() {
      window.location.href = "enroll.html"; 
      window.open("enroll.html", "_blank"); 
    }

  const donateButtons = document.querySelectorAll(".box button");
  const overlay = document.getElementById("donationOverlay");
  const donationTitle = document.getElementById("donationTitle");

  donateButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const programTitle = btn.parentElement.querySelector(".programtitle").innerText;
      donationTitle.innerText = programTitle;
      overlay.style.display = "flex";
    });
  });

  function closeForm() {
    overlay.style.display = "none";
    document.getElementById("donorName").value = "";
    document.getElementById("donorAmount").value = "";
    document.getElementById("donorMessage").value = "";
  }

  function sendDonation() {
    const name = document.getElementById("donorName").value.trim();
    const amount = document.getElementById("donorAmount").value.trim();
    const message = document.getElementById("donorMessage").value.trim();
    const program = document.getElementById("donationTitle").innerText;

    if (name && amount) {
      const text = `Hello, I am ${name}. I want to donate ₹${amount} to the program "${program}".${message ? " Message: " + message : ""}`;
      const whatsappNumber = "8248129121"; // Replace with your real WhatsApp number
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
      closeForm();
    } else {
      alert("Please enter your name and donation amount.");
    }
  }
