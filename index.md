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

---

#### 렌더링

- getServerSideProps (서버 사이드 렌더링)

  - getServerSideProps는 Nextjs의 예약 함수이다.
  - 빌드 과정에서 Nextjs는 이 함수를 익스포트 하는 모든 페이지를 찾아서 서버가 페이지 요청을 처리할 때 getServerSideProps 함수를 호출하도록 만든다.
    해당 함수내의 코드는 항상 서버에서만 실행된다.
  - getServerSideProps 함수는 props라는 프로퍼티를 갖는 객체를 반환한다. 이 반환한 props를 컴포넌트로 전달하여 서버와 클라이언트 모두가 props에 접근하고 사용할 수 있다.

- 클라이언트에서 실행하도록 강제하는 방법

  - document나 window canvas같은 것들은 Node.js에서는 지원하지 않는다. 따라서 서버에서 저런것들을 사용하게되면 오류가 나게되어있음.
    이럴때에는 서버쪽에서 실행하지않고 클라이언트에서 실행될 수 있도록 강제해야한다.
    이럴때 useEffect를 사용하여 컴포넌트가 브라우저에 마운트된후에 실행 될 수 있도록 강제할 수 있다.

  - 동적 컴포넌트 로딩을 사용하는 방법
    - nextjs의 dynamic 함수를 사용하여 컴포넌트를 동적 임포트 시킨다.
      옵션의 ssr을 이용하여 클라이언트에서만 임포트 할 수 있도록 한다.

- process.browser

  - process.browser라는 환경변수가 있다. true일 시 client에서 사용할 때이고, false일시 server에서 사용되고 있다는 것.

- getStaticProps (정적 사이트 생성(SSG), 증분 정적 재생성(ISR))

  - SSG: 빌드시점에 getStaticProps로 만든 SSG컴포넌트를 html화 해서 미리 만들어놓는다.

  - ISR: SSR과 SSG를 합친기능. getStaticProps의 return값의 프로퍼티에 revalidate로 캐싱 주기를 주면 ISR로 동작하면서 주어진 캐싱주기마다 페이지를 재생성(정적 페이지를 다시 빌드)한다.

#### 라우팅

- 라우팅

  - Next.js는 react와는 다르게 파일 기반 시스템으로 라우팅 목록을 빌드시점에 미리 매핑시켜놓는다.
    그러므로 브라우저가 해당 url에 접근시 미리 매핑시켜놓은 url과 비교하여 적절한 컴포넌트를 렌더링한다.

- 동적 라우팅
  - [slug].jsx 요런식으로 파일을 만들면 나중에 props.params.slug 로 들어온다.
  - getServerSideProps로 받으면 props로 그냥 받을 수 있지만
    getStaticProps로 받으면 getStaticPaths를 이용하여 미리 동적라우팅될 목록을 매핑시켜야함.
    그냥 클라이언트에서 받기위해선 next/router의 useRouter를 사용하여 받자. const { query } = useRouter()

#### 정적 자원 제공

- 이미지

  - CLS 현상 보완. (이미지가 브라우저에 다운되기 직전에는 디폴트 이미지로 레이아웃의 변동이 없게만듬.)

  - 자동 이미지 최적화

    - WebP와 같은 최신 이미지 포맷으로 제공하고, 크기를 조절하고, 렌더링한다.
      (외부 도메인의 리소스를 사용할 때는 next.config.js에서 images의 domain을 지정해줘야 한다. 해당 도메인의 이미지를 불러올 때마다 자동으로 이미지를 최적화함.)
      images: { domains: ["images.unsplash.com"] }

  - Image 컴포넌트 "layout" 속성

    - fixed: 화면크기가 변해도 이미지 크기를 지정한 대로 유지한다.
    - responsive: 화면 크기를 조절하면 그에 따라 이미지를 최적화해서 제공한다.
    - intrinsic: 크기가 작은 화면에서는 크기를 조절하지만, 이미지보다 큰 화면에서는 고정된다.
    - fill: 부모 요소의 가로 세로 크기에 따라 이미지를 늘린다. (fill을 쓰면 width/height 속성을 무시한다.)

  - 외부 서비스를 통한 이미지 최적화
    - next.config.js에서 loader속성을 지정하여 외부 서비스를 통한 이미지 최적화를 진행할 수 있다. (이걸로 이미지 서버를 연동해서 최적화를 지정하면 될듯? domain도 지정해주자!)
    - 웹을 Vercel로 배포할시 loader는 자동으로 Vercel의 이미지 최적화를 진행하게됨.

- 메타데이터

  - import Head from 'next/head'
    <Head></Head>를 사용하여 페이지의 head를 조작할 수 있다.

  - title 이외의 다른 meta property는 덮여씌워지지 않고 계속 추가가됨.

#### \_app.js 와 \_document.js

- \_app.js

  - 이 파일은 모든 라우팅 페이지에 공통적인 컴포넌트를 추가할 수 있다.
  - next13의 layout.jsx와 비슷한거같음.
  - getStaticProps 또는 getServerSideProps를 사용할 수 없다. 대신에 getInitialProps를 사용할 수 있지만 이렇게 사용하게되면 모든 페이지에서 getInitialProps를 실행하고 렌더링이전에 무엇인가 행하기 떄문에 페이지 초기로딩속도가 느려질 수 있다.

- \_document.js

  - next app의 template을 정하는 파일인거 같다.
  - 구성요소

    - Html
      - <html>태그에 해당한다. 여기에 lang과 같은 표준 HTML속성을 전달할 수 있다.
    - Head

      - 웹 앱의 모든 페이지에 대한 공통 태그를 정의할 때 이 컴포넌트를 사용한다.
        이 Head컴포넌트는 반드시 웹사이트의 모든 페이지에서 공통으로 사용되는 코드가 있을경우만 사용하자.

    - Main

      - Next.js가 페이지 컴포넌트를 렌더링하는 곳이다.
        <Main> 외부의 컴포넌트는 브라우저에서 초기화되지 않기 때문에 페이지간에 공통으로 사용되는 컴포넌트는 반드시 _app.js에서 만들어야한다.

    - NextScript
      - Next.js는 클라이언트에 전송할 페이지를 렌더링하고, 클라이언트에서 실행할 코드나 리액트 하이드레이션과 같은 작업을 처리할 수 있는 커스텀 스크립트를 끼워넣는다. 이러한 커스텀 스크립트를 끼워넣는 위치이다.
