import { PlatformTest } from "@tsed/common";
import { HelloWorldController } from "./HelloWorldController";

describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it("should return hello", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.aFunction()).toEqual("hello");
  });

  it("should return 50", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.pMinus()).toEqual(50);
  });
  it("should return 2", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.pSum()).toEqual(2);
  });
  it("should return 15", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance,"sumNumbers");
    const num1=10;
    const num2=5
    expect(instance.sumNumbers(num1,num2)).toEqual(15);
  });
  it("should return 150", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance,"mulNumbers");
    const num1=10;
    const num2=15
    expect(instance.mulNumbers(num1,num2)).toEqual(150);
  });
  it("should return 4", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance,"divNumbers");
    const num1=20;
    const num2=5
    expect(instance.divNumbers(num1,num2)).toEqual(4);
  });

});
