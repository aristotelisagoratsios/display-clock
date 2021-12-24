// Wait for the deviceready event before using any of Cordova's device APIs.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    // Display Clock 
    function showTime() { 
        var date = new Date(); 
        var h = date.getHours(); 
        var m = date.getMinutes(); 
        var s = date.getSeconds(); 
    
        var time = h + ":" + m + ":" + s; 
        document.getElementById("ClockDisplay").innerText = time; 
        document.getElementById("ClockDisplay").textContent = time; 
    } 
    setInterval(showTime, 1000);
}