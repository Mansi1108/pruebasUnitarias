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
  it("should return 290", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.pSum()).toEqual(290);
  });

});
