// content.js

// Select the target node you want to observe
const targetNode = document.body;

// Options for the observer (e.g., what types of mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Check if the current page is www.glassdoor.com
      if (window.location.hostname === "www.glassdoor.com") {
        // Remove the element with ID "HardsellOverlay"
        var hardsellOverlay = document.getElementById("HardsellOverlay");
        if (hardsellOverlay) {
          hardsellOverlay.remove();
        }

        // Modify body style
        var body = document.getElementsByTagName("body")[0];
        if (body) {
          body.style.overflow = "scroll";
          body.style.position = "static";
        }
      }
    }
  }
};

// Create a MutationObserver instance with the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for specified mutations
observer.observe(targetNode, config);
