## 交作業流程

1. 先建立當週的 branch(weekX)，並切換到該 branch，再開始寫作業
   建立分支: **git branch [分支名稱]**
   切換到分支: **git checkout [分支名稱]**
2. 寫完作業後，需先檢查並自我檢討
3. 完成後，add 並 commit 完成
   將所有檔案加入 staging: **git add .**
   將 staging 中的檔案加入 git 的紀錄中: **git commit -m "[敘述此次修改]"**
4. push 此分支到遠端
   推上遠端: **git push origin [分支名稱]**
5. 至遠端 repo 發起 pull request
6. 至學習系統 > 作業列表 > 新增作業，貼上 pull request 連結並送出
7. 待助教改完且 merge 後，local repo 切換到 master branch，pull 更新 master branch
   切換到 master: **git checkout master**
   更新 local repo: **git pull origin master**
8. 刪除當週 branch
   刪除 branch: **git branch -d [分支名稱]**
