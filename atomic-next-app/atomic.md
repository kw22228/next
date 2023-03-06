### Atomic design pattern

- atoms

  - 코드에서 사용되는 가장 기본적인 컴포넌트
  - button, input, p와 같은 표준 HTML요소를 감싸는 용도로 사용되거나,
    애니메이션 또는 컬러 팔레트 등과 같은 용도로 사용되는 컴포넌트를 이곳에 저장

- molecules

  - atoms에 속한 컴포넌트 여러 개를 조합하여 좀더 복잡한 구조를 만드는 컴포넌트들이다.
  - input과 label 컴포넌트를 합쳐서 새로운 molecules 컴포넌트를 만든다.

- organisms

  - molecules와 atoms를 섞어서 더 복잡한 구조의 컴포넌트를 만든다.
  - 회원가입 양식이나 푸터, 캐러셀

- templates
  - 일종의 페이지 스켈레톤으로 어디에 organisms, atoms, molecules를 배치할지 결정해서 사용자가 접근할 수 있는 페이지를 만든다.
