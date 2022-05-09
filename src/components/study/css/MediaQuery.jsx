import {
    DescriptionWrapper, //
    DescriptionTitle,
    DescriptionBox,
    DescriptionExplain,
    DescriptionCodeWrapper,
    DescriptionCodeBox,
} from 'assets/style/DescriptionStyle';

const MediaQuery = () => {
    return (
        <DescriptionWrapper>
            <DescriptionBox>
                <DescriptionTitle>@media 쿼리</DescriptionTitle>

                <DescriptionExplain>html, css에서 사용되는 @media 쿼리는 처음 설정된 css보다 아래에 적어야 한다.</DescriptionExplain>

                <DescriptionExplain>아래처럼 적으면 적용이 안된다.</DescriptionExplain>
                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
@media (max-width: 720px) {
    .title {
        padding: 10px;
    }
}
              
.title {
    padding: 20px;
    background: red;
} 
              `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionExplain>css는 위에서 아래로 읽어 내려가기 때문에 @media 쿼리를 사용해서 컨트롤 한다고 해도 그 밑에서 다른 속성을 적으면 그 속성을 읽어버린다. 주의하자.</DescriptionExplain>

                <DescriptionCodeWrapper>
                    <DescriptionCodeBox>
                        <code>
                            {`
.title {
    padding: 20px;
    background: red;
}

@media (max-width: 720px) {
    .title {
        padding: 10px;
    }
} 
              `}
                        </code>
                    </DescriptionCodeBox>
                </DescriptionCodeWrapper>

                <DescriptionExplain>위에 처럼 쓰는게 맞다. 그래서 보통은 @media 쿼리를 css파일 가장 아래에 적는다.</DescriptionExplain>
            </DescriptionBox>
        </DescriptionWrapper>
    );
};

export default MediaQuery;
