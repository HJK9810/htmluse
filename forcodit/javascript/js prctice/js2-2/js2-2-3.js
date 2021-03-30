// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.
let adultTag = '삑!';
let teenagerTag = '삑삑!';
let errorTag = "삑삑삑!";
let transferTag = "환승입니다.";

// 아래에 tagCase파라미터를 가지는 tagNotification 함수를 작성해 주세요.
function tagNotification(tagCase) {
  console.log(tagCase);
}

// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);