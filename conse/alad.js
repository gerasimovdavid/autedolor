function checkAndProceed(condition) {
    if (!condition) {
        console.log("The condition was not met.");
        return;
    }
    // Proceed with the rest of the function if the condition is true
    console.log("The condition was met.");
}

checkAndProceed(false); // Output: "The condition was not met."
checkAndProceed(true);  // Output: "The condition was met."
