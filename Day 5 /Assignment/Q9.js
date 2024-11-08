//  Q.9 Device constructor
function Device(name, type) {
    this.name = name;
    this.type = type;
    this.status = false; // Initially off
}

Device.prototype.turnOn = function() {
    this.status = true;
};

Device.prototype.turnOff = function() {
    this.status = false;
};

Device.prototype.checkStatus = function() {
    return this.status ? "On" : "Off";
};

// SmartHome constructor
function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

SmartHome.prototype.addDevice = function(device) {
    this.devices.push(device);
};

SmartHome.prototype.removeDevice = function(deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
};

SmartHome.prototype.listDevices = function() {
    return this.devices.map(device => `${device.name}: ${device.checkStatus()}`);
};

// SmartDevice constructor (inherits from Device)
function SmartDevice(name, type, connectivity) {
    Device.call(this, name, type);
    this.connectivity = connectivity;
}

SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

SmartDevice.prototype.updateFirmware = async function() {
    // Simulate firmware update with a promise
    return new Promise(resolve => {
        setTimeout(() => resolve("Firmware updated"), 2000);
    });
};

SmartDevice.prototype.checkConnectivity = function() {
    return this.connectivity;
};

// SmartLight constructor (inherits from SmartDevice)
function SmartLight(name, brightness, color) {
    SmartDevice.call(this, name, "light", "online");
    this.brightness = brightness;
    this.color = color;
}

SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

SmartLight.prototype.adjustBrightness = function(level) {
    this.brightness = level;
};

SmartLight.prototype.changeColor = function(newColor) {
    this.color = newColor;
};

// SmartThermostat constructor (inherits from SmartDevice)
function SmartThermostat(name, temperature, mode) {
    SmartDevice.call(this, name, "thermostat", "online");
    this.temperature = temperature;
    this.mode = mode;
}

SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

SmartThermostat.prototype.setTemperature = function(temp) {
    this.temperature = temp;
};

SmartThermostat.prototype.setMode = function(newMode) {
    this.mode = newMode;
};

// User constructor for authentication and profile management
function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
}

User.prototype.authenticate = async function() {
    // Simulate authentication with a promise
    return new Promise(resolve => {
        setTimeout(() => resolve("User authenticated"), 1000);
    });
};

User.prototype.addDeviceToHome = function(device) {
    this.smartHome.addDevice(device);
};

User.prototype.removeDeviceFromHome = function(deviceName) {
    this.smartHome.removeDevice(deviceName);
};

// Example usage
const user = new User("Alice", "password123");
const light = new SmartLight("Living Room Light", 70, "warm white");
const thermostat = new SmartThermostat("Main Thermostat", 22, "heat");

user.addDeviceToHome(light);
user.addDeviceToHome(thermostat);

console.log(user.smartHome.listDevices()); // Lists all devices

// Update firmware
light.updateFirmware().then(console.log); // "Firmware updated"