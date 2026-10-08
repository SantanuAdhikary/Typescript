"use strict";
class KFC {
}
class Nexus extends KFC {
    friedChicken() {
        console.log("you will get 20% off");
    }
}
class VR extends KFC {
    friedChicken() {
        console.log("you will get 30% discount");
    }
}
let nexus = new Nexus();
nexus.friedChicken();
let vr = new VR();
vr.friedChicken();
