function shareLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("locationStatus").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("locationStatus").innerHTML = `Location shared: Latitude: ${latitude}, Longitude: ${longitude}`;
}

function showHealthResources() {
    toggleVisibility('healthResources');
}

function showFitnessPlans() {
    toggleVisibility('fitnessPlans');
}

function showCommunityForum() {
    toggleVisibility('communityForum');
}

function showLegalResources() {
    toggleVisibility('legalResources');
}

function showCareerResources() {
    toggleVisibility('careerResources');
}

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("locationStatus").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("locationStatus").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("locationStatus").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("locationStatus").innerHTML = "An unknown error occurred.";
            break;
    }
}
