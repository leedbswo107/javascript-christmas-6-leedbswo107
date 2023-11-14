import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";
import Badge from "../src/domain/Badge.js";
import ChristmasDdayDiscount from "../src/domain/ChristmasDdayDiscount.js";
import GiveAwayEvent from "../src/domain/GiveAwayEvent.js";
import OrderMenu from "../src/domain/OrderMenu.js";
import SpecialDiscount from "../src/domain/SpecialDiscount.js";
import TotalBenefitPrice from "../src/domain/TotalBenefitPrice.js";
import TotalPriceAfterDiscount from "../src/domain/TotalPriceAfterDiscount.js";
import TotalPriceBeforeDiscount from "../src/domain/TotalPriceBeforeDiscount.js";
import WeekdayDessertCount from "../src/domain/WeekdayDessertCount.js";
import WeekendMaindishCount from "../src/domain/WeekendMaindishCount.js";
import WeekendDiscount from "../src/domain/WeekendDiscount.js";
import WeekdayDiscount from "../src/domain/WeekdayDiscount.js";

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

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("Badge 함수 테스트", () => {
  const badge = new Badge();
  test('총혜택 금액이 5,000 미만이면 0', function() {
    expect(badge.badge(4999)).toBe(0);
  });
  test('총혜택 금액이 5,000 이상 10,000 미만이면 별', function() {
    expect(badge.badge(5000)).toBe('별');
  });
  test('총혜택 금액이 10,000 이상 20,000 미만이면 트리', function() {
    expect(badge.badge(10000)).toBe('트리');
  });
  test('총혜택 금액이 20,000 이상이면 산타', function() {
    expect(badge.badge(20000)).toBe('산타');
  });
});

describe("ChristmasDdayDiscount 함수 테스트", () => {
  const dDayDiscount = new ChristmasDdayDiscount();
  const dDay = { '크리스마스 디데이 할인': 3400 };
  const notdDay= { '크리스마스 디데이 할인': 0 };
  test('방문일이 1~25일이고 총 주문 금액이 10,000원 이상이면 할인 O', function() {
    expect(dDayDiscount.discountAmount(25,10000)).toEqual(dDay);
  });
  test('방문일이 26~31일인데 총 주문 금액이 10,000원 이상이면 할인 X', function() {
    expect(dDayDiscount.discountAmount(26,10000)).toEqual(notdDay);
  });
  test('방문일이 1~25일인데 총 주문 금액이 10,000원 미만이면 할인 X', function() {
    expect(dDayDiscount.discountAmount(23,8000)).toEqual(notdDay);
  });
  test('방문일이 26~31일인데 총 주문 금액이 10,000원 미만이면 할인 X', function() {
    expect(dDayDiscount.discountAmount(26,8000)).toEqual(notdDay);
  });
});

describe("GiveAwayEvent 함수 테스트", () => {
  const giveAwayFunc = new GiveAwayEvent();
  test('총 주문 금액이 120,000원 이상이면 샴페인 증정 O', function() {
    const gift = { '샴페인': 1 };
    expect(giveAwayFunc.giveAway(120000)).toEqual(gift);
  });
  test('총 주문 금액이 120,000원 미만이면 샴페인 증정 X', function() {
    expect(giveAwayFunc.giveAway(110000)).toBe(0);
  });
});

describe("getMenu 함수 테스트", () => {
  const testInput = "해산물파스타-2,레드와인-1,티본스테이크-1";
  const orderMenuFunc = new OrderMenu(testInput);

  test('형식에 맞게 주문된 메뉴 분리하여 객체화', async function() {
    const menu = { '해산물파스타': 2, '레드와인': 1, '티본스테이크': 1 };
    const result = await orderMenuFunc.getMenu(); 
    expect(result).toEqual(menu);
  });
});

describe("SpecialDiscount 함수 테스트", () => {
  const specialDiscountFunc = new SpecialDiscount();
  const special = { '특별 할인': 1000};
  const notSpecial = { '특별 할인': 0};
  test('달력에 별이 있는 날 방문하고 총 주문 금액이 10,000원 이상이면 할인 O', function() {
    expect(specialDiscountFunc.specialDiscount(25,10000)).toEqual(special);
  });
  test('달력에 별이 있는 날 방문하고 총 주문 금액이 10,000원 미만이면 할인 X', function() {
    expect(specialDiscountFunc.specialDiscount(25,8000)).toEqual(notSpecial);
  });
  test('달력에 별이 없는 날 방문하고 총 주문 금액이 10,000원 이상이면 할인 X', function() {
    expect(specialDiscountFunc.specialDiscount(2,10000)).toEqual(notSpecial);
  });
  test('달력에 별이 없는 날 방문하고 총 주문 금액이 10,000원 미만이면 할인 X', function() {
    expect(specialDiscountFunc.specialDiscount(2,8000)).toEqual(notSpecial);
  });
});

const dDay = {'크리스마스 디데이 할인': 1000};
const noDday = {'크리스마스 디데이 할인': 0};
const weekday = { '평일 할인': 2023};
const noWeekday = { '평일 할인': 0};
const weekend = { '주말 할인': 2023};
const noWeekend = { '주말 할인': 0};
const special = { '특별 할인': 1000};
const noSpecial = { '특별 할인': 0};
const total = 10000;

describe("TotalBenefitPrice 함수 테스트", () => {
  const totalBenfitPriceFunc = new TotalBenefitPrice();
  const giveaway = { '샴페인': 1 };
  const noGiveaway = { '샴페인': 0 };
  test('디데이 기간 O,평일 O, 주말 X, 특별 O, 샴페인 O', async function() {
    expect(totalBenfitPriceFunc.totalBenefitPrice(dDay,weekday,noWeekend,special,giveaway)).toBe(29023);
  });
  test('디데이 기간 O,평일 X, 주말 O, 특별 O, 샴페인 O', async function() {
    expect(totalBenfitPriceFunc.totalBenefitPrice(dDay,noWeekday,weekend,special,giveaway)).toBe(29023);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 O, 샴페인 O', async function() {
    expect(totalBenfitPriceFunc.totalBenefitPrice(noDday,noWeekday,weekend,special,giveaway)).toBe(28023);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 X, 샴페인 O', async function() {
    expect(totalBenfitPriceFunc.totalBenefitPrice(noDday,noWeekday,weekend,noSpecial,giveaway)).toBe(27023);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 X, 샴페인 X', async function() {
    expect(totalBenfitPriceFunc.totalBenefitPrice(noDday,noWeekday,weekend,noSpecial,noGiveaway)).toBe(2023);
  });
});

describe("TotalPriceAfterDiscount 함수 테스트", () => {
  const totalPriceAfterDiscountFunc = new TotalPriceAfterDiscount();
  test('디데이 기간 O,평일 O, 주말 X, 특별 O', async function() {
    expect(totalPriceAfterDiscountFunc.totalPriceAfterDiscount(total,dDay,weekday,noWeekend,special)).toBe(5977);
  });
  test('디데이 기간 O,평일 X, 주말 O, 특별 O,', async function() {
    expect(totalPriceAfterDiscountFunc.totalPriceAfterDiscount(total,dDay,noWeekday,weekend,special)).toBe(5977);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 O', async function() {
    expect(totalPriceAfterDiscountFunc.totalPriceAfterDiscount(total,noDday,noWeekday,weekend,special)).toBe(6977);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 X', async function() {
    expect(totalPriceAfterDiscountFunc.totalPriceAfterDiscount(total,noDday,noWeekday,weekend,noSpecial)).toBe(7977);
  });
  test('디데이 기간 X,평일 X, 주말 O, 특별 X', async function() {
    expect(totalPriceAfterDiscountFunc.totalPriceAfterDiscount(total,noDday,noWeekday,weekend,noSpecial)).toBe(7977);
  });
});

describe("TotalPriceBeforeDiscount 함수 테스트", () => {
  const totalPriceBeforeDiscountFunc = new TotalPriceBeforeDiscount();
  const menu = {
    '티본스테이크' : 1,
    '해산물파스타' : 1,
    '제로콜라' : 2,
    '아이스크림' : 1,
  };
  test('티본스테이크 1개, 해산물파스타 1개, 제로콜라 2개, 아이스크림 1개', async function() {
    expect(totalPriceBeforeDiscountFunc.totalPrice(menu)).toBe(101000);
  });
});

const menuOne = {
  '티본스테이크' : 1,
  '해산물파스타' : 1,
  '제로콜라' : 2,
  '아이스크림' : 2,
  '초코케이크' : 3,
};
const menuTwo = {
  '바비큐립' : 1,
  '타파스' : 1,
  '크리스마스파스타' : 2,
  '제로콜라' : 2,
  '아이스크림' : 5,
  '초코케이크' : 2,
};
const weekDayDate = 4;
const weekendDate = 8;

describe("WeekdayDessertCount 함수 테스트", () => {
  const weekdayDessertCountFunc = new WeekdayDessertCount();
  test('티본스테이크 1개, 해산물파스타 1개, 제로콜라 2개, 아이스크림 2개, 초코케이크 3개', async function() {
    expect(weekdayDessertCountFunc.dessertCount(menuOne)).toBe(5);
  });
  
  test('바비큐립 1개, 타파스 1개, 크리스마스파스타 2개, 제로콜라 2개, 아이스크림 5개, 초코케이크 2개', async function() {
    expect(weekdayDessertCountFunc.dessertCount(menuTwo)).toBe(7);
  });
});

describe("WeekDayDiscount 함수 테스트", () => {
  const weekdayDiscountFunc = new WeekdayDiscount();
  const weekDayDiscountPriceOne = { '평일 할인':10115};
  const weekDayDiscountPriceTwo = { '평일 할인':14161};
  
  test('티본스테이크 1개, 해산물파스타 1개, 제로콜라 2개, 아이스크림 2개, 초코케이크 3개', async function() {
    expect(weekdayDiscountFunc.weekdayDiscount(weekDayDate,menuOne,total)).toEqual(weekDayDiscountPriceOne);
  });
  
  test('바비큐립 1개, 타파스 1개, 크리스마스파스타 2개, 제로콜라 2개, 아이스크림 5개, 초코케이크 2개', async function() {
    expect(weekdayDiscountFunc.weekdayDiscount(weekDayDate,menuTwo,total)).toEqual(weekDayDiscountPriceTwo);
  });
});

describe("WeekendMaindishCount 함수 테스트", () => {
  const weekendMaindishCount = new WeekendMaindishCount();
  test('티본스테이크 1개, 해산물파스타 1개, 제로콜라 2개, 아이스크림 2개, 초코케이크 3개', async function() {
    expect(weekendMaindishCount.maindishCount(menuOne)).toBe(2);
  });
  
  test('바비큐립 1개, 타파스 1개, 크리스마스파스타 2개, 제로콜라 2개, 아이스크림 5개, 초코케이크 2개', async function() {
    expect(weekendMaindishCount.maindishCount(menuTwo)).toBe(3);
  });
});

describe("WeekendDiscount 함수 테스트", () => {
  const weekendDiscount = new WeekendDiscount();
  const weekendDiscountPriceOne = { '주말 할인':4046};
  const weekendDiscountPriceTwo = { '주말 할인':6069};
  
  test('티본스테이크 1개, 해산물파스타 1개, 제로콜라 2개, 아이스크림 2개, 초코케이크 3개', async function() {
    expect(weekendDiscount.weekendDiscount(weekendDate,menuOne,total)).toEqual(weekendDiscountPriceOne);
  });
  
  test('바비큐립 1개, 타파스 1개, 크리스마스파스타 2개, 제로콜라 2개, 아이스크림 5개, 초코케이크 2개', async function() {
    expect(weekendDiscount.weekendDiscount(weekendDate,menuTwo,total)).toEqual(weekendDiscountPriceTwo);
  });
});