import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }
  aFunction()
  {
    return "hello";
  }
  pMinus()
  { //50
    return 1000-950;
  }
  pSum()
  {//290
    return 1+1;
  }
  sumNumbers(num1: number, num2:number){
    return num1 + num2
  }
  mulNumbers(num1: number, num2:number){
    return num1 * num2
  }
  divNumbers(num1: number, num2:number){
    return num1 / num2
  }
}
