


abstract class KFC
{
    abstract friedChicken() : void
}

class Nexus extends KFC
{

    override friedChicken(): void {
        console.log("you will get 20% off")
    }
}

 class VR extends KFC{
      override friedChicken(): void {
          console.log("you will get 30% discount")
      }
}

let nexus = new Nexus()
nexus.friedChicken()

let vr = new VR()
vr.friedChicken()