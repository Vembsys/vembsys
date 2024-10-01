document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");

    scrollButton.addEventListener("click", function() {
        // Scroll to the bottom of the page slowly
        scrollToBottomSmoothly();
    });

    function scrollToBottomSmoothly() {
        var currentPosition = window.pageYOffset; // Current scroll position
        var targetPosition = document.body.scrollHeight; // Target scroll position (bottom of the page)
        var distance = targetPosition - currentPosition; // Distance to scroll
        var duration = 7000; // Duration of the scroll animation (in milliseconds)
        var perTick = distance / duration * 10; // Amount to scroll per tick

        // Scroll function
        function scroll() {
            currentPosition += perTick; // Update current scroll position
            window.scrollTo(0, currentPosition); // Scroll the page
            if (currentPosition >= targetPosition) {
                return;
            }
            setTimeout(scroll, 10); // Call scroll function recursively
        }

        scroll(); // Call the scroll function
    }
});
