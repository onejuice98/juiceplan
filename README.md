# 📚 JUICEPlanner - 나만의 다이어리

주소 : [JUICEPlanner](https://onejuice98.github.io/juiceplan/)
with gh-pages

## 📒 Description

>플래너, 다이어리, 잡지, 스토리 등으로 활용 가능한 서비스입니다. <br/>
>사진을 넣고 직접 그리고! 제목 내용도 직접 넣어서 저장하여서 **카드로 소장**할 수 있습니다!
>
>프로젝트 기간 : **23.01.16 ~ 23.02.10**

* D-Day 기능을 가지고, ``tooltip``으로 주말과 평일을 출력한다.
* Diary을 작성할 수 있으며, 사진을 넣어 자신이 직접 꾸미고 제목과 내용을 입력할 수 있다.
* Editor에서 (마우스 사용시, touch ❌) 직접 그릴 수 있다. (사진 위로 그리기 가능)
* 저장한 Diary를 클릭하게 되면 다운로드 기능이 있다.
* 반응형으로 제작

## 🌈 Environments
### Language 
<img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/typescript?style=flat-square&color=3178c6">

### Library
<img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/react?style=flat-square&color=61DAFB"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/recoil?style=flat-square&color=3178c6"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/framer-motion?style=flat-square&color=5185fc"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/react-hook-form?style=flat-square&color=a431d2"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/react-router-dom?style=flat-square&color=dd234f"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/file-saver?style=flat-square&color=da3be3"> <img src="https://img.shields.io/github/package-json/dependency-version/onejuice98/juiceplan/dom-to-image?style=flat-square&color=1243f">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

### style
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>

## 🐭 Installation

```bash
$ npm install
```

### Start
```bash
$ npm run start
```
Run on `localhost:3000/juiceplan`

## 📝 Pages & Features
### ``Main Page``
>``Profile.tsx`` 제작자의 정보가 담겨있다. <br/>
>``DDayBox.tsx`` 제작자의 전역일이 적혀있다. <br/>
>``SetBtn.tsx`` D-Day 추가, 삭제, Main 노출여부 결정할 수 있는 버튼 <br/>
>``DisplayCard.tsx`` 다이어리를 요약하여서 보여준다.

|``Main``|
|:---:|
|<img width="513" alt="스크린샷 2023-02-11 오전 12 29 40" src="https://user-images.githubusercontent.com/44994011/218130439-915948fb-b817-435d-9e3a-a024454e7e7c.png">|

|``Card``|``Profile``|``DDay``| 
|:---:|:---:|:---:|
|<img width="400" alt="스크린샷 2023-02-11 오전 12 35 10" src="https://user-images.githubusercontent.com/44994011/218131694-9b3f086a-f6c3-4427-a490-57445aaba22e.png">|<img width="252" alt="스크린샷 2023-02-11 오전 12 32 26" src="https://user-images.githubusercontent.com/44994011/218131041-4d2aadee-461a-41af-bfe5-df6a6683c963.png">|<img width="252" alt="스크린샷 2023-02-11 오전 12 32 33" src="https://user-images.githubusercontent.com/44994011/218131087-91debbb2-a31a-428a-afca-15833e07fc54.png">

|``SetBtn 시연 동영상``|
|:---:|
|https://user-images.githubusercontent.com/44994011/218132504-9e43e337-6a64-4293-8d1b-379852465bc0.mov|
|⭐️ 이 있는 *DDayBox*는 *Main*에서 보여준다.|

### ``Diary Page``
>``DisplayDiary.tsx`` 다이어리를 하나만 출력하고 다운로드가 가능하다. <br/>
>``DayDiary.tsx`` 다이어리를 편집 및 저장이 가능하다. (사진 업로드 가능) <br/>
>``Template.tsx`` 캔버스위로 그림을 마우스를 통해 그릴 수 있다. <br/>
>``Editor.tsx`` Template로 작성한 캔버스위에 글자를 입력할 수 있다. <br/>

|``Diary``|
|:---:|
|<img width="527" alt="스크린샷 2023-02-11 오전 12 46 53" src="https://user-images.githubusercontent.com/44994011/218134523-d5b86063-99e5-4381-840b-f898b4f3ba5f.png">|
|뒤로가기는 홈으로 이동, 반응형으로 제작|

|``DayDiary.tsx``|
|:---:|
|<img width="400" alt="스크린샷 2023-02-11 오전 12 49 12" src="https://user-images.githubusercontent.com/44994011/218135260-dcb5539f-2e62-40c3-9c20-a9fd60cb91c7.png">|
|*다이어리 쓰기* 버튼을 통해서 현재 페이지로 이동|

|``Template.tsx``|``Editor.tsx``|
|:---:|:---:|
|<img width="250" alt="스크린샷 2023-02-11 오전 12 51 22" src="https://user-images.githubusercontent.com/44994011/218135524-b33d454c-aa46-4857-9e67-128769ada0d8.png">|<img width="250" alt="스크린샷 2023-02-11 오전 12 53 33" src="https://user-images.githubusercontent.com/44994011/218136240-7fe72999-104a-41fa-8b81-11326129bcce.png">|
|사진업로드 & Canvas를 통해서 그림 그리기 가능|*적용하기* 버튼을 통해서 에디터로 이동 후 글자 입력 가능|

|``Display.tsx``|
|:---:|
|<img width="500" alt="스크린샷 2023-02-11 오전 12 58 35" src="https://user-images.githubusercontent.com/44994011/218137327-3b387234-a0d3-4ff9-8e78-677d5a509c62.png">|
|*저장하기* 버튼을 통해서 저장, hover animation(scale, opacity)|

|``DisplayDiary.tsx``|
|:--:|
|<img width="700" alt="스크린샷 2023-02-11 오전 1 01 24" src="https://user-images.githubusercontent.com/44994011/218137980-69d775fa-93fb-4bb3-bf93-d324a615b804.png">|
|*Main*에서 *자세히*, *Diary*에서 해당하는 다이어리 클릭시 이동, 다운로드 기능|

### ``Responsivle``

#### Grid Components
|``Main`` ``DisplayCard.tsx``|
|:---:|
|<img width="1076" alt="스크린샷 2023-02-11 오전 1 04 17" src="https://user-images.githubusercontent.com/44994011/218138863-40275e06-a04e-48f3-9ccb-a59fecae21f3.png">|
|window size 1076|

|``Diary`` ``index.tsx``|
|:---:|
|<img width="1076" alt="스크린샷 2023-02-11 오전 1 11 48" src="https://user-images.githubusercontent.com/44994011/218140586-0c749fad-d69b-4169-8b26-444dc25b9e5a.png">|
|window size 1076|

#### 적용된 Styles
```css
display : grid;
// in min-width 768
grid-template-columns : repeat(1fr 1fr);
// in min-width 1024
grid-template-columns : repeat(1fr 1fr 1fr);
```

#### in Mobile
``DayDiary.tsx``의 ``MenuBar.tsx`` 상에서 *window size < 450px* 이하이면 캔버스 도구 사용 불가능하다.
|``MenuBar.tsx``|
|:---:|
|<img width="330" alt="스크린샷 2023-02-11 오전 1 16 17" src="https://user-images.githubusercontent.com/44994011/218141492-eca398e8-f9bb-4d18-b9b1-497a16dbadc8.png">|
|window size 390|

* 각종 글자 크기 등 450px 기준으로 반응형으로 설계


### 사진 정보
[우주소녀 루다 사진 출처, 트위터 루대기](https://twitter.com/achieve_97/status/1457172104550367235)
