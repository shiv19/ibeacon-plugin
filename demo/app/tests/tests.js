var IbeaconPlugin = require("nativescript-ibeacon-plugin").IbeaconPlugin;
var ibeaconPlugin = new IbeaconPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(ibeaconPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(ibeaconPlugin.greet()).toEqual("Hello, NS");
    });
});