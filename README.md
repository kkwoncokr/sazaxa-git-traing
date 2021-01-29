# SAZAXA GIT TRAING CENTER

## 준비
- Git, GitBah설치
- Gitbub 계정

## 1. 프로젝트 가져오기

- 팀(공용) Repository에서 fork (우측 상단에 위치)

![fork](/img/forkImg.PNG)

- 원하는 디렉토리 이동 후 git init
- git clone <나의 저장소> (fork한 저장소)

## 2. 팀저장소와 연결

- git remote -v (origin에 나의 저장소가 저장된걸 확인 할 수 있다.)
- git remote add upstream<팀 저장소>
- git remote -v (origin과 upstream 존재)

### upstream - 팀 Repository

### origin - 팀 저장소를 내 계정에 fork한 Repository

## 3. 작업하기

1. 브랜치 생성

git siwtch -c <브랜치이름> upstream/main

2. 원격 저장소의 최신 상태 반영

git pull upstream main (fetch와 rebase도 가능)

3. 코드 작업

git add . 

git commit

4. 반영

git push origin <브랜치이름>

## 4. 반영하기

본인의 깃헙에 들어가서 pull request 누르기

## 5. 완료하기

1. 작업을 완료하면 작업한 브랜치 삭제

git branch -d <브랜치 이름>
