# [4주차] 크리스마스 프로모션 :santa:
## :clipboard: 구현할 기능 목록
1. 사용자 입력
    - 방문 날짜
    - 주문할 메뉴
    - 주문할 메뉴 개수
2. 이벤트 조건
    

3. 추가 조건
    - 메뉴를 입력한 후 개수를 입력할 때 0이상 100미만 값만 입력 할 수 있게 정규식으로 제한.

4. 예외 처리
    [ERROR] 금액 표시에 숫자 3자리(천단위) 마다 콤마(,)가 없는 경우
    [ERROR] 입력된 방문 날짜가 1과 31 사이 값이 아닌 경우
    [ERROR] 입력된 방문 날짜가 숫자가 아닌 경우
    [ERROR] 메뉴판에 없는 메뉴를 입력한 경우
    [ERROR] 음료수만 주문하는 경우
    [ERROR] 입력된 메뉴의 개수가 1이상의 값이 아닌 경우
    [ERROR] 입력된 메뉴의 개수가 숫자가 아닌 경우
    [ERROR] 입력된 메뉴의 형식이 예시와 다른 경우
    [ERROR] 중복된 메뉴를 입력한 경우
    [ERROR] 혜택 내역 금액 앞 마이너스(-) 표시가 없는 경우
    [ERROR] 혜택 내역 금액이 숫자가 아닌 경우?
    [ERROR] 
    [ERROR] 
    [ERROR] 

## :heavy_plus_sign: 추가한 기능
- 
## :airplane: 테스트 결과
-
## :file_folder: 파일 구조 및 파일명
- :open_file_folder: src 
    - :open_file_folder: common
        - :memo: outputMessage.js
        - :memo: Validate.js
    - :open_file_folder: controller
        - :memo: LottoController.js
    - :memo: App.js
    - :memo: index.js
    - :memo: Lotto.js
    - :memo: LottoPlay.js

## :book: 커밋 컨벤션
- 자주 사용하는 태그 종류
    - feat : 새로운 기능을 추가하는 경우
    - fix : 버그를 고친경우
    - docs : 문서를 수정한 경우
    - style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
    - refactor : 코드 리펙토링
    - test : 테스트 코드. 리펙토링 테스트 코드를 추가했을 때
    - chore : 빌드 업무 수정, 패키지 매니저 수정
    - design : CSS 등 사용자가 UI 디자인을 변경했을 때
    - rename : 파일명(or 폴더명) 을 수정한 경우
    - remove : 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함
- 기타 태그 타입들
    - add : 코드나 테스트, 예제, 문서등의 추가 생성이 있는경우
    - Improve : 향상이 있는 경우. 호환성, 검증 기능, 접근성 등이 될수 있습니다.
    - implement : 코드가 추가된 정도보다 더 주목할만한 구현체를 완성시켰을 때
    - move : 코드의 이동이 있는경우
    - updated : 계정이나 버전 업데이트가 있을 때 사용. 주로 코드보다는 문서나, 리소스, 라이브러리등에 사용합니다.
    - comment : 필요한 주석 추가 및 변경

## :warning: 추가된 요구 사항
    - 아래에 제공되는 `InputView`, `OutputView` 객체를 활용해 구현한다.
        - 입력과 출력을 담당하는 객체를 별도로 구현한다.
        - `InputView`, `OutputView`의 파일 경로는 변경할 수 있다.
        - `InputView`, `OutputView`의 메서드의 이름과 인자는 필요에 따라 추가하거나 변경할 수 있다.
        - 값 출력을 위해 필요한 메서드를 추가할 수 있다.
        ```javascript
        export default InputView = {
            async readDate() {
            const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
            // ...
            },
            // ...
        };
        ```
        ```javascript
        export default OutputView = {
            printMenu() {
            Console.print("<주문 메뉴>");
            // ...
            },
            // ...
        };
        ```