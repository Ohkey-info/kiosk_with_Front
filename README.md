# 디지털 취약계층을 위한 OCR 키오스크
- 동국대학교 기업사회캡스톤 디자인 프로젝트

  <img width="400" alt="image" src="https://user-images.githubusercontent.com/57786933/197537632-e5f6c0c9-b7a4-49b9-885f-21f4f5954e4b.png">
  <img width="400" alt="image" src="https://user-images.githubusercontent.com/57786933/197537848-baf30f1f-09bb-41fa-a8e7-65d29822b185.png">
  <img width="400" alt="image" src="https://user-images.githubusercontent.com/57786933/197538327-8b5434ee-9bb5-4449-a378-ef3b60f3bde7.png">
  <img width="400" alt="image" src="https://user-images.githubusercontent.com/57786933/197538800-c20c1b9a-4d70-4042-b0dd-fe7761767df3.png">
  
### 프로젝트 소개
실제 어르신분들 또는 청각/말을 못하는 장애인 분들께서 키오스크로 주문을 어려워하셔서, 카운터 응대 직원이 카운터로 올 때까지 오랜 시간을 기다려가면서까지 **자녀의 심부름 혹은 본인이 직접 주문하실 때 `종이에 메뉴를 적어` 카운터 응대 직원에게 건내주면서 주문을 도와달라 하시는 경우가 많았습니다.**

### 진행 내용 및 결과

고객이 원하는 메뉴를 종이에 적어 **카메라에 비추면, OCR 키오스크의 AI서비스가 해당 글자를 인식하여 원하는 메뉴의 결제를 도와주도록 하는 시스템**을 개발했습니다.
기존 키오스크에 비해 ‘주문 속도’, ‘과소비 방지’, 간편/정확성‘ 면에서 더 뛰어난 이점을 낳았습니다.

### 기술 스택
| Java | SpringBoot |  SpringData JPA   |  QueryDSL   |  ThymeLeaf   |
| :--------: | :--------: | :------: | :-----: |:------: |
<!--|   ![js]    |   ![ts]    | ![react] | ![node] |-->

| HTML | CSS |  Javascript  |  Jquery   |  Naver OCR API  |  AWS S3  |
| :--------: | :--------: | :------: | :-----: |:------:|:------: |
<!--|   ![js]    |   ![ts]    | ![react] | ![node] |-->

## 구현 기능

### 기능 1
카메라 API를 통해 S3에 글씨를 적은 종이 사진을 S3에 저장하고 Naver OCR API를 사용하여 글자 유사도를 분석.

### 기능 2
파싱된 주문 데이터를 장바구니에 넣고, CRUD를 통해 추가 주문 및 삭제 등을 구현.

### 기능 3
Spring Security 를 사용하여 관리자 모드에서는 음식 데이터를 추가할 수 있는 기능.<br>
소비자 모드에서는 주문을 통해 실제 결제를 제외하고 주문번호가 발급되는 단계까지의 과정을 구현.

## 배운 점 & 아쉬운 점
1. Spring Data JPA를 다루면서, QueryDsl 환경을 컴파일하여 세팅하는 방식 등을 학습할 수 있는 기회가 되었습니다.<br>
2. DataBase를 팀원들 간 테이블, 컬럼 등을 직접 고민하면서 개발에 직접 적용해보는 단계에 Entity-Relation에 대한 고민을 할 수 있는 좋은 기회였습니다.
3. JPA의 ORM을 통해 MySQL과 H2 등 DB를 다양하게 연동해보며 편의성을 실감했습니다.
4. SpringBoot 서버를 AWS EC2에 배포를 경험해보지 못한 것이 아쉬웠습니다.

<p align="justify">

