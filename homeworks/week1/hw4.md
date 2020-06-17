## 跟你朋友介紹 Git

### 甚麼是版本控制

當你的檔案時常會使用和更改，又或是跟他人共同合作，這時若是沒有使用版本控制，就會遇到像蔡哥一樣的狀況，檔案變得很雜亂，也不知清楚內容到底改了甚麼，版本控制為你的檔案每個改動的版本做紀錄，讓你清楚的知道每個版本改動的內容

### 甚麼是 git

git 就是幫你完成版本控制的工具，git 使用不會重複的 hash 值作為每個版本的編號，並且記錄這個版本的內容，透過查詢這個 hash 值，可以清楚的知道每個版本間的改動內容與差異

### 使用 git

- **git init** 要使用 git，必需在目錄下輸入 git init，初始化 git，同時也建立一個.git 資料夾裡面存放所有 git 的資訊

- **.gitignore** 若有不需要加入 git 的檔案，新增一個.gitignore 檔案並把檔案名稱寫入，git 就會忽略這個檔案

- **git status** 顯示目前檔案的狀態，狀態分為三種

  1. **untracked** 檔案未加入 git
  2. **modified** 檔案已加入 git，修改過
  3. **staging** 準備 commit 的檔案

- **git add [檔案名稱]** 將修改過或是未追蹤的檔案加入 staging，準備 commit
  **git add .** 將所有修改過或是未追蹤的檔案加入 staging，準備 commit
  **git rm --cached [檔案名稱]** 將在 staging 的檔案移除，回到原本的 untracked 或 modified

- **git commit -m "[此次修改的敘述]"** 將 staging 中的檔案，加入 git 的紀錄中，並添加敘述

- **git log** 顯示過去 commit 的紀錄

- **git branch [分支名稱]** 開啟新分支
  **git branch** 顯示分支
  **git branch -v** 顯示分支與分支上最後一個 commit
  **git branch -d [分支名稱]** 刪除分支

- **git checkout [分支名稱]** 切換分支

- **git merge [分支名稱]** 將分支合併到目前所在分支

## 甚麼是 GitHub

GitHub 是提供你存放檔案庫(稱為 repository )的一個平台，同一份檔案存在自己電腦中我們稱為本地/local 端，而放在 GitHub 或是其他類似服務的稱為遠/remote 端，GitHub 還提供多人協作的功能，如 pull request、fork 等

### 使用 GitHub

- 新增專案

  1. 在 GitHub 中按下 New Repository 並輸入名稱，完成後按下 Create，創建完成且會出現一個遠端 repository 的位址
  2. 在你想放上去的資料夾中加入遠端 **git remote add origin [遠端 repository 位址]** (origin 是這個遠端的預設名稱，可自行更改)
     若資料夾尚未使用 git 則必須先初始化，加入檔案且 commit 再加入遠端
  3. 將資料夾推上遠端 **git push -u origin master**

- 同步 local / remote 端
  1. 更新 remote 端 **git push origin [分支名稱]**
  2. 更新 local 端 **git pull**
