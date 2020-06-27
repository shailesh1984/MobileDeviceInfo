var app = {
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },

    onDeviceReady: function() {
        // document.getElementById("devCordova").innerHTML = typeof device.cordova === 'undefined' || device.cordova === null ? console.log('"cordova" is undefined.') : device.cordova;
        document.getElementById("devModel").innerHTML = typeof device.model === 'undefined' || device.model === null ? console.log('"model" is undefined.') : device.model;
        document.getElementById("devPlatform").innerHTML = typeof device.platform === 'undefined' || device.platform === null ? console.log('"platform" is undefined.') : device.platform;
        document.getElementById("devUuid").innerHTML = typeof device.uuid === 'undefined' || device.uuid === null ? console.log('"uuid" is undefined.') : device.uuid;
        document.getElementById("devVersion").innerHTML = typeof device.version === 'undefined' || device.version === null ? console.log('"version" is undefined.') : device.version;
        document.getElementById("devManufacturer").innerHTML = typeof device.manufacturer === 'undefined' || device.manufacturer === null ? console.log('"manufacturer" is undefined.') : device.manufacturer;
        document.getElementById("devIsVirtual").innerHTML = typeof device.isVirtual === 'undefined' || device.isVirtual === null ? console.log('"isVirtual" is undefined.') : device.isVirtual;
        document.getElementById("devSerial").innerHTML = typeof device.serial === 'undefined' || device.serial === null ? console.log('"serial" is undefined.') : device.serial;
    },
};

app.initialize();