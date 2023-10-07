// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentTab = tabs[0];
  const url = new URL(currentTab.url);

  // Check if the hostname of the current URL is www.glassdoor.com
  if (url.hostname === "www.glassdoor.com") {
    // Change the background color to green
    document.getElementById("status").style.backgroundColor = "green";
    document.getElementById("status").textContent = "On Glassdoor";
  }
});
