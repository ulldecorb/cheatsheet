function refreshMobilDevice () {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad|webos|ipod|blackberry|windows phone/i;

    const isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        location.reload();
    } 
}
