---
title: '強制啟用北科 i 學園的 PDF 下載功能'
summary: '讓北科 i 學園上未被標記為可下載的 PDF 檔案可正常下載 (Tempermonkey 使用指南)'
image: '/ntut_istudy.png'
alt: 'Shellkai Huang'
created: 2026-01-14
updated: 2026-03-01
tags:
 - Userscript
 - TamperMonkey
---
## 前言
在教授 / 老師上傳檔案至北科 i 學園時可以選擇能不能啟用 PDF 檔案下載功能，不啟用就只能線上瀏覽，剛好我的課有老師是不允許下載檔案的，所以我~~在大一期中前一週閒來無事~~挖了一下他的 PDF Viewer 組件，發現只要更改兩個參數就可以正常開啟被停用的下載功能。雖然有使用 TAT App 的同學有正式選修該課的話也能下載，所以這只能算是一個簡單的個人研究 (也許能幫到會用旁聽功能或習慣用電腦的同學也說不定 XD)。不過因為本人太菜不會寫 Userscript，所以就用了 vibe coding 的方式寫了一個腳本，使得網頁在載入時能注入修改數值，如果有任何建議也歡迎指出。
## 使用
### Step 1. 安裝 TamperMonkey
這裡建議使用 TamperMonkey Beta
[Chrome Extension Store link](https://chromewebstore.google.com/detail/gcalenpjmijncebpfijmoaglllgpjagf?utm_source=item-share-cb)
![image](https://hackmd.io/_uploads/SyERI0NBWg.png)

### Step 2. 設定 TamperMonkey
安裝完畢後，進入 Chrome 的擴充功能設定
![image](https://hackmd.io/_uploads/S1SnPCNHZl.png)
![image](https://hackmd.io/_uploads/H1npvC4H-g.png)
找到「篡改猴」，確定已啟用後，點擊詳細資料
![image](https://hackmd.io/_uploads/HJd1u0NSWg.png)
找到「允許使用者指令碼」，將其啟用
![image](https://hackmd.io/_uploads/r1FMdRNSWx.png)

### Step 3. 安裝腳本
[腳本下載連結](https://gist.github.com/ShellkaiTW/74f5f54e4429b2dbbe321f8d871a0e1c/raw/71e158eb3745fcc17a3f8bc6348b54821bbabbde/iStudy_PDF_Downloader.user.js)

點擊連結後會自動跳到腳本安裝頁面，請點擊「安裝」(我已經安裝完成，所以截圖顯示重新安裝)
![image](https://hackmd.io/_uploads/H1SYYC4BWe.png)

### Additional
可將 TamperMonkey 固定於 Chrome 上，以便開關腳本
![image](https://hackmd.io/_uploads/HJxe20VSbg.png)

## 腳本效果
未啟用腳本：
![image](https://hackmd.io/_uploads/Synfs04BZx.png)
啟用腳本後：
![image](https://hackmd.io/_uploads/HyRA50ESWl.png)
(下載功能需等 PDF 於 PDF Viewer 載入完畢才可下載)