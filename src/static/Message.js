const INPUT_MESSAGE = Object.freeze({
    visitDay : "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
    orderMenu : "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g 해산물파스타-2,레드와인-1,초코케이크-1)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
    intro : "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
    previewFront : "12월 ",
    previewBack : "일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
    orderMenu : "\n<주문 메뉴>",
    totalPriceBeforeDiscount : "\n<할인 전 총주문 금액>",
    giveAwayMenu : "\n<증정 메뉴>",
    benefitDetails : "\n<혜택 내역>",
    totalBenefitPrice : "\n<총혜택 금액>",
    totalPriceAfterDiscount : "\n<할인 후 예상 결제 금액>",
    badge : "\n<12월 이벤트 배지>",
    none : "없음",
    won : "원",
    quantity : "개",
    // 콤마가 필요한 경우 여기서
});
const BADGE = Object.freeze({
    star : '별',
    tree : '트리',
    santa : '산타',
})

export {INPUT_MESSAGE, OUTPUT_MESSAGE, BADGE};