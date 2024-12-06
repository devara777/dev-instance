
// Initial format (default: 12-hour format)
let is24HourFormat = false;

// Function to format the time
function formatTime(hours, minutes, seconds) {
    if (!is24HourFormat) {
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;
    }
    // 24-hour format
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById("clock").innerText = formattedTime;
}

// Function to toggle between 12-hour and 24-hour formats
function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    const button = document.getElementById("toggle-format");
    button.innerText = is24HourFormat
        ? "Switch to 12-Hour Format"
        : "Switch to 24-Hour Format";
    updateClock(); // Update clock immediately on toggle
}

// Set an interval to update the clock every second
setInterval(updateClock, 1000);

// Add event listener to the toggle button
document.getElementById("toggle-format").addEventListener("click", toggleFormat);

// Initialize the clock
updateClock();
