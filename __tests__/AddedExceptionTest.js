import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};
const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";

describe("추가 예외 테스트", () => {
  test("날짜 예외 테스트 1~31 범위", async () => {
    const INPUTS_TO_END = ["31", "해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["0","34","32", ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });
  test("날짜 예외 테스트 NaN", async () => {
    const INPUTS_TO_END = ["1", "해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions([
        "a","!","qwe","qwert","#"," ","","사과","ㄱ", 
        ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";

  test("주문 예외 테스트 음료만 주문", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
        "3", "제로콜라-1,레드와인-1","제로콜라-1",
        "레드와인-1","샴페인-3","제로콜라-1,레드와인-1,샴페인-1",
        "샴페인-2", ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  test("주문 예외 테스트 없는 메뉴", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
        "3", "티본스테이크-1,타파스-1,시저샐러드-1,하와이안피자-1,제로콜라-1","후라이드치킨-1,제로콜라-1",
        "물냉면-1,사이다-1","비빔냉면-2,고기추가-1","아이스아메리카노-1,말차라떼-1",
        ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  test("주문 예외 테스트 주문 수량 0인경우", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
        "3", "티본스테이크-1,바비큐립-1,아이스크림-0,초코케이크-1",
        "초코케이크-0",
        "타파스-1,양송이수프-2,시저샐러드-0",
        ...INPUTS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  test("주문 예외 테스트 주문 수량 NaN", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
        "3", "티본스테이크-a,바비큐립-!,아이스크림-,초코케이크-1",
        "초코케이크-?",
        "타파스-1,양송이수프-2,시저샐러드-%",
        ...INPUTS_TO_END]);
        
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  test("주문 예외 테스트 주문 총수량이 20 초과", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
        "3", "티본스테이크-21",
        "해산물파스타-2,초코케이크-18,제로콜라-2",
        "타파스-1,양송이수프-2,크리스마스파스타-18",
        ...INPUTS_TO_END]);
        
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  test("주문 예외 테스트 중복된 주문", async () => {
    const INPUTS_TO_END = ["해산물파스타-2,샴페인-4"];
    const logSpy = getLogSpy();
    mockQuestions([
      "3", "해산물파스타-2,샴페인-4,해산물파스타-1",
      "티본스테이크4,타파스-1,양송이수프-2,티본스테이크-1",
      ...INPUTS_TO_END]);
      const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  })
});
