class GrandMother
{
    storyTelling():void{
        console.log("make good stories")
    }
}

interface Mother {
  care(): void;
}

interface Father {
  responsibility(): void;
}

class Child extends GrandMother implements Father, Mother  {
  responsibility(): void {
    console.log("taking responsibility of the family");
  }

  care(): void {
    console.log("care about whole family");
  }
}

let c1 = new Child();

c1.responsibility();
c1.care();
c1.storyTelling()