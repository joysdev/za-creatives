const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("zoerarnold@gmail.com"); 
  copyBtn.textContent = "Copied";

  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 10000);
});
