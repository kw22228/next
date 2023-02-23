### 메모

- 리액트의 문제점

  - 리액트는 클라이언트 사이드 렌더링(CSR)에서 동작하기 때문에
    즉, 웹 브라우저에서만 실행 되기 때문에 검색 엔진 최적화(SEO)의 효과를 거의 볼수 없으고
    첫화면에 큰 용량의 자바스크립트 번들 파일을 다운받아야 하고 내용을 분석하고 코드를 실행해야 하기때문에 느리다.

  - 이러한 문제를 해결하기 위해서 많은 개발자들은 웹을 서버에서 미리 렌더링해두는 방법(서버 사이드 렌더링(SSR))을 연구하였다.

- Next.js와 비슷한 프레임워크

  - Gatsby

    - 정적 웹 사이트를 만들 수 있는 프레임 워크이다.
      모든 페이지를 빌드 시점에 미리 렌더링해서 정적 콘텐츠 형태로 만들어놓고 CDN으로도 제공할 수 있다.
    - 단점은 정적 사이트만 지원한다는 것이다. 따라서, 데이터에 따라 동적으로 변하는 복잡한 웹은 만들 수 없다.

  - Razzle

    - 서버 사이드 렌더링이 가능한 자바스크립트 어플리케이션을 만들 수 있다.
      CRA로 만든 리액트 프로젝트를 단순하게 서버 사이드 렌더링으로 동작하게 할 수 있다.

  - Nuxt.js
    - Vue.js의 Next.js같은 프레임워크이다.
      성능과 기능은 Next.js와 별 차이가없지만, 더 많은 설정을 필요로 한다.

---

#### 타입스크립트

- next는 tsconfig.json파일만 만들고 npm run dev를 하면 자동으로 tsconfig의 내용을 채워주고, 필요한 dependencies를 안내해준다.

- 이 패키지들을 설치하고 나면 Next.js는 기본 설정 내용을 이파일에 기록한다.
  필요하면 이파일의 내용을 수정해서 타입스크립트 설정을 바꿀수 있지만, Next.js가 바벨의 @babel/plugin-tranform-typescript를 사용해서 설정 파일을 관리하기 때문에 주의사항이 있다.

- 주의사항

  - @babel/plugin-transform-typescript 플러그인은 타입스킵트에서 자주 사용하는 const enum을 지원하지 않는다. const enum을 사용하고 싶으면 바벨 설정에 babel-plugin-const-enum을 추가해야한다.
  - export = 와 import = 구문은 사용할 수 없다. 두 가지 모두 ECMAScript코드로 컴파일 할 수 없기 때문이다. babel-plugin-replacets-export-assignment를 설치하거나
    import x, {y} from 'some-package' 또한 export default x와 같은 올바른 ECMAScript구문으로 바꿔야한다.

#### 바벨과 웹팩 설정 커스터마이징

- 바벨 커스터마이징

  - Next.js의 바벨 설정을 커스터마이징 하고싶다면 프로젝트 최상단에 .babelrc파일을 생성해주면된다. (.babelrc를 만들면 오버라이드가 아니라 새로 덮어씌우는것이기 때문에 원래 기존설정이 사라진다. 따라서 "presets": ["next/babel"]는 꼭 써주자.)

- 웹팩 커스터마이징
  - 프로젝트 최상단에 next.config.js에서 커스터마이징 할 수 있음.(craco와 비슷하게 하면될듯함)
