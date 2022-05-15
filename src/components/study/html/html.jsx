import {
    DescriptionWrapper, //
    DescriptionTitle,
    DescriptionBox,
    DescriptionExplain,
    DescriptionCodeWrapper,
    DescriptionCodeBox,
} from 'assets/style/DescriptionStyle';

const Html1 = () => {
    return (
        <DescriptionWrapper>
            <DescriptionBox>
                <DescriptionTitle>HTML구조 어떻게...</DescriptionTitle>

                <DescriptionExplain>
                    개인적인 생각으로 퍼블리싱 작업은 HTML구조가 80% 이상 차지한다고 생각한다.
                    <br />그 이유로 구조만 잘 짠다면 훨씬 적은 수의 css코드와 깔끔하기 읽기 쉬운 코드가 작성 되며 유지보수 또한 훨씬 더 효과적으로 진행이 되기 때문이다.
                </DescriptionExplain>

                <DescriptionExplain>
                    간단한 예로 아래의 두 코드를 볼 수 있다.
                    <br />
                    해당 코드의 목적은 헤더에 이미지와 메뉴를 넣는 것인데 이미지가 왼쪽, 네비게이션을 우측에 배치하고 싶은 것이다.
                </DescriptionExplain>

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
<html>
  <head>
    <title>타이틀</title>
  </head>
  
  <body>
    <div class="header">
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
      <img alt="이미지" />
    </div>
  </body>
</html>
            `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <br />

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
<html>
  <head>
    <title>타이틀</title>
  </head>

  <body>
    <img alt="이미지"/>
    <div className="header">
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    </div>
  </body>
</html>
            `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionExplain>
                    첫 번째로 작성된 코드와 두 번째로 작성된 코드를 비교해 봤을 때 차이점이 보이는가?
                    <br />
                    목적을 생각했을 때 첫 번째 배치는 좋지 않다.
                    <br />
                    사실 어떻게 배치를 해도 css를 사용하면 원하는 곳에 둘 수가 있다. 하지만 위에서 이야기 한 것 처럼 유지보수와 코드 가독성 등을 생각해 보면 첫 번째의 방법 보다는 두 번째의 방법이 훨씬
                    더 좋다.
                </DescriptionExplain>

                <DescriptionExplain>
                    첫 번째 코드의 경우 목적에 맞게 배치를 하려면 강제로 좌측 우측 position을 정해서 배치를 해주어야 한다.
                    <br />
                    그에 반해 두 번째 코드는 display 속성만 변경하면 바로 좌우로 배치 될 것이다.
                </DescriptionExplain>

                <DescriptionExplain>
                    그 이유는 간단하다.
                    <br />
                    HTML 태그에는 각 display라는 속성이 존재한다. 이 속성에 따라서 아래에 적히는 태그들이 어디로 배치 될지가 정해진다.
                    <br />
                    기본적으로 HTML 코드는 위에서 아래로 읽어 내려가며 화면에 그려질때도 동일하다.
                    <br />
                    display 속성에 따라서 우측으로 태그가 그려질지 아래로 그려질지가 정해지는 것 이다.
                </DescriptionExplain>

                <DescriptionExplain>
                    이외에 구조를 어떻게 해야할까. 어떻게 묶는게 좋을까. 이런거는 경험이라고 생각된다.
                    <br />
                    많이 만들어보자.
                </DescriptionExplain>
            </DescriptionBox>
        </DescriptionWrapper>
    );
};

export default Html1;
