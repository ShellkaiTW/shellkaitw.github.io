import{s as Xm,a as em,e as Um,n as Zm}from"../chunks/scheduler.BWDpjmD3.js";import{S as zm,i as Ym,k as a,l as i,m,n as p,o,p as l,e as c,s as u,t as g,H as zi,v as Jm,c as h,q as _,f as d,a as k,b as f,d as t,r as Yi,u as P,g as s,h as n}from"../chunks/index.Cp4SeObe.js";import{P as ep,g as tp,a as Vm}from"../chunks/post_layout.BnlSLxll.js";import{I as $}from"../chunks/footer.BH4J_is4.js";function np(tr){let A,te='<a href="#gpo-相關安全強化">GPO 相關安全強化</a>',Z,O,x='<a href="#禁止存取控制台設定">禁止存取控制台設定</a>',W,G,Ns,nr,tm="Enabled",Ds,be,yr,me,nm='<a href="#限制或禁止使用者使用特定應用程式">限制或禁止使用者使用特定應用程式</a>',Rr,J,Ls,Ee,bs,rr,rm="Enabled",Es,Fe,xr,pe,sm='<a href="#設定在-logon-ui-看不到上個登入的使用者">設定在 Logon UI 看不到上個登入的使用者</a>',Mr,ne,Fs,sr,am="Enabled",Is,Ie,Nr,oe,im='<a href="#讓-windows-server-也能掛載-debian-smbd">讓 Windows Server 也能掛載 Debian SMBD</a>',Dr,re,Os,ar,mm="Enabled",Ws,Oe,Lr,le,pm='<a href="#gpo-個別使用者套用規則">GPO 個別使用者套用規則</a>',br,We,Gs,Ge,Er,$e,om='<a href="#禁止使用-windows-update">禁止使用 Windows Update</a>',Fr,V,Bs,ir,lm="Enabled",Us,Be,Js,Ue,Ir,ge,$m='<a href="#dns">DNS</a>',Or,fe,gm='<a href="#通知-notify">通知 (Notify)</a>',Wr,se,Vs,Je,Ks,Ve,Gr,ue,fm='<a href="#start-of-authority-record-soa">Start of Authority Record (SOA)</a>',Br,Ke,qe,qs,Ur,de,um='<a href="#允許-icmp-協議">允許 ICMP 協議</a>',Jr,H,js,je,Qs,Qe,Xs,Xe,Zs,Ze,zs,ze,Ys,Ye,ea,et,ta,tt,na,nt,ra,rt,Vr,ce,dm='<a href="#讓網域內電腦自動信任-ca-憑證">讓網域內電腦自動信任 CA 憑證</a>',Kr,he,cm='<a href="#允許自動信任設定">允許自動信任設定</a>',qr,K,sa,st,aa,mr,hm="Enabled",ia,at,jr,_e,_m='<a href="#設定自動信任的電腦">設定自動信任的電腦</a>',Qr,N,ma,it,pa,mt,oa,pt,la,ot,$a,pr,vm="gpupdate /force",ga,lt,Xr,ve,Cm='<a href="#共享資料夾安全設定-file-server-resource-manager">共享資料夾安全設定 (File Server Resource Manager)</a>',Zr,$t,fa,gt,zr,Ce,Sm='<a href="#限制共享資料夾空間">限制共享資料夾空間</a>',Yr,q,ua,ft,da,ut,ca,dt,es,Se,wm='<a href="#限制共享資料夾存放檔案類型">限制共享資料夾存放檔案類型</a>',ts,B,or,km="Step 1. 建立檔案類型群組",ha,ct,_a,ht,va,_t,ns,E,lr,Pm="Step 2. 建立禁止檔案類型範本",Ca,vt,Sa,Ct,wa,$r,Am="若顯示錯誤，將虛擬機重開就可解決",ka,St,rs,U,gr,Hm="Step 3. 套用範本到共享資料夾",Pa,wt,Aa,kt,Ha,Pt,ss,we,Tm='<a href="#更改-remote-desktop-的-tcp-port-登錄檔修改">更改 Remote Desktop 的 TCP Port (登錄檔修改)</a>',as,j,Ta,fr,ym="HKEY_LOCAL_MACHINE\\System\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp",ya,ur,Rm="PortNumber",Ra,At,is,ke,xm='<a href="#vpn-設定">VPN 設定</a>',ms,v,xa,Ht,Ma,Tt,Na,yt,Da,Rt,La,xt,ba,Mt,Ea,Nt,Fa,Dt,Ia,Lt,Oa,bt,Wa,Et,Ga,Ft,Ba,It,Ua,Ot,Ja,Wt,Va,Gt,Ka,Bt,ps,Pe,Mm='<a href="#vpn-安全強化-sstp-設定">VPN 安全強化 (SSTP) 設定</a>',os,Ae,Nm='<a href="#有-web-server--https">有 Web Server + HTTPS</a>',ls,F,qa,Ut,ja,Jt,Qa,Vt,Xa,Kt,$s,_r,qm=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">先設定 CA Server 的 Certificate Templates</span></div><div class='line'><span style="color: undefined">MMC -&gt; Certificate Templates -&gt; IPSec -&gt; 右鍵 Duplicate Template</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/SJ0plU-S0.png)</span></div><div class='line'><span style="color: undefined">Request Handling -&gt; 勾選 Allow private key to be exported</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/HJWMZ8bHR.png)</span></div><div class='line'><span style="color: undefined">Subject Name -&gt; 選擇 Supply in the request</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/Sy93-8-B0.png)</span></div><div class='line'><span style="color: undefined">Extensions Application -&gt; Edit...</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/rk9eGUbHR.png)</span></div><div class='line'><span style="color: undefined">Add... -&gt; Server Authentication</span></div><div class='line'><span style="color: undefined">![image](https://hackmd.io/_uploads/r1xVfL-rC.png)![image](https://hackmd.io/_uploads/SyD8GUWSA.png)</span></div><div class='line'><span style="color: undefined">Certificate Templates 設定完成</span></div></code></div></pre>`,vr,He,Dm='<a href="#radius-驗證伺服器">RADIUS 驗證伺服器</a>',gs,C,Za,qt,za,jt,Ya,Qt,ei,Xt,ti,Zt,ni,zt,ri,Yt,si,en,ai,tn,ii,nn,mi,rn,pi,sn,oi,an,li,mn,$i,pn,fs,Te,Lm='<a href="#讓外部電腦信任根憑證-root-ca">讓外部電腦信任根憑證 (Root CA)</a>',us,M,gi,on,fi,ln,ui,$n,di,gn,ci,fn,hi,un,_i,dn,ds,ye,bm='<a href="#對單個使用者或群組做密碼限制-ad-ac">對單個使用者或群組做密碼限制 (AD AC)</a>',cs,cn,vi,hn,hs,Cr,jm=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code><div class='line'><span style="color: undefined">創立一個至少需要輸入 8 個字的密碼規則</span></div></code></div></pre>`,Sr,R,_n,Ci,vn,Si,Cn,wi,Sn,ki,wn,Pi,kn,Ai,Pn,Hi,An,_s,Re,Em='<a href="#遠端桌面服務-remote-desktop-service">遠端桌面服務 (Remote Desktop Service)</a>',vs,T,Ti,Hn,yi,Tn,Ri,yn,xi,Rn,Mi,xn,Ni,Mn,Di,Nn,Li,Dn,Cs,xe,Fm='<a href="#啟用-ip-forwarding-regedit">啟用 IP Forwarding (Regedit)</a>',Ss,Ln,Im=`按一下 Windows Key + R，輸入 regedit 後 Enter
設定「<strong>Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\IPEnableRouter</strong>」為 1`,ws,Me,Om='<a href="#次級憑證的簽證及安裝-sub-ca">次級憑證的簽證及安裝 (Sub CA)</a>',ks,Q,bi,bn,Ei,En,Fi,Fn,Ps,ae,Ii,In,Oi,On,As,X,Wi,Wn,Gi,Gn,Bi,Bn,Hs,z,Ui,Un,Ji,Jn,Vi,Ts,Ne,Wm='<a href="#error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline">error: The revocation function was unable to check revocation because the revocation server was offline</a>',ys,Y,Vn,Ki,dr,Gm="ipconfig /flushdns",qi,Kn,Rs,qn,Bm="若錯誤還在，也可透過 PowerShell 指令直接停用 CRL 檢查及下載",xs,wr,Qm=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>certutil -setreg caCRLFlags +CRLF_REVCHECK_IGNORE_OFFLINE</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,kr,Ms;return be=new $({props:{src:"https://hackmd.io/_uploads/HJi2R6hqh.png",alt:"image"}}),Ee=new $({props:{src:"https://hackmd.io/_uploads/Sy5jSED03.png"}}),Fe=new $({props:{src:"https://hackmd.io/_uploads/HkgS8Vw02.png"}}),Ie=new $({props:{src:"https://hackmd.io/_uploads/rkMTCT2q2.png"}}),Oe=new $({props:{src:"https://hackmd.io/_uploads/rynWy0n92.png"}}),Ge=new $({props:{src:"https://hackmd.io/_uploads/SJMjm3FRT.png",alt:"image"}}),Be=new $({props:{src:"https://hackmd.io/_uploads/BJ7flZjC6.png",alt:"image"}}),Ue=new $({props:{src:"https://hackmd.io/_uploads/SJl3gGbsR6.png",alt:"image"}}),Je=new $({props:{src:"https://hackmd.io/_uploads/SJ3xUBlAT.png",alt:"image"}}),Ve=new $({props:{src:"https://hackmd.io/_uploads/B10Uvrg0p.png",alt:"image"}}),qe=new $({props:{src:"https://hackmd.io/_uploads/rkkD_HxAT.png",alt:"image"}}),je=new $({props:{src:"https://hackmd.io/_uploads/r1s-A6n5n.png"}}),Qe=new $({props:{src:"https://hackmd.io/_uploads/HJnfR63qh.png"}}),Xe=new $({props:{src:"https://hackmd.io/_uploads/HyVQAa252.png"}}),Ze=new $({props:{src:"https://hackmd.io/_uploads/S1hQ0ph92.png"}}),ze=new $({props:{src:"https://hackmd.io/_uploads/SyQE0a352.png"}}),Ye=new $({props:{src:"https://hackmd.io/_uploads/By64063q3.png"}}),et=new $({props:{src:"https://hackmd.io/_uploads/B1SBAah9n.png"}}),tt=new $({props:{src:"https://hackmd.io/_uploads/BkvUATnch.png"}}),nt=new $({props:{src:"https://hackmd.io/_uploads/S1zwC6nqn.png"}}),rt=new $({props:{src:"https://hackmd.io/_uploads/SkSuCT3c2.png"}}),st=new $({props:{src:"https://hackmd.io/_uploads/HkxKAa2cn.png"}}),at=new $({props:{src:"https://hackmd.io/_uploads/SJcKApn93.png"}}),it=new $({props:{src:"https://hackmd.io/_uploads/BylcRah93.png"}}),mt=new $({props:{src:"https://hackmd.io/_uploads/BJ550p35h.png"}}),pt=new $({props:{src:"https://hackmd.io/_uploads/H1LoC625n.png"}}),ot=new $({props:{src:"https://hackmd.io/_uploads/r1b2R6hq3.png"}}),lt=new $({props:{src:"https://hackmd.io/_uploads/Hkh16KO2h.png"}}),gt=new $({props:{src:"https://hackmd.io/_uploads/HJn7SZjnp.png",alt:"image"}}),ft=new $({props:{src:"https://hackmd.io/_uploads/BkJdH-snp.png",alt:"image"}}),ut=new $({props:{src:"https://hackmd.io/_uploads/ByeZkR2c2.png",alt:"image"}}),dt=new $({props:{src:"https://hackmd.io/_uploads/HkiIUbihp.png",alt:"image"}}),ct=new $({props:{src:"https://hackmd.io/_uploads/B1sspZo3a.png",alt:"image"}}),ht=new $({props:{src:"https://hackmd.io/_uploads/HJUj0Wsn6.png",alt:"image"}}),_t=new $({props:{src:"https://hackmd.io/_uploads/H1KZRZohT.png",alt:"image"}}),vt=new $({props:{src:"https://hackmd.io/_uploads/S1K2hWona.png",alt:"image"}}),Ct=new $({props:{src:"https://hackmd.io/_uploads/B1Eiyfona.png",alt:"image"}}),St=new $({props:{src:"https://hackmd.io/_uploads/ByN_pbs3T.png",alt:"image"}}),wt=new $({props:{src:"https://hackmd.io/_uploads/rk0p_-j2a.png",alt:"image"}}),kt=new $({props:{src:"https://hackmd.io/_uploads/SklXxzj36.png",alt:"image"}}),Pt=new $({props:{src:"https://hackmd.io/_uploads/SJGceMoha.png",alt:"image"}}),At=new $({props:{src:"https://hackmd.io/_uploads/HJckBqzF3.png"}}),Ht=new $({props:{src:"https://hackmd.io/_uploads/BkaBU3Ps3.png"}}),Tt=new $({props:{src:"https://hackmd.io/_uploads/Sk6283Doh.png"}}),yt=new $({props:{src:"https://hackmd.io/_uploads/r1CKRvn32.png"}}),Rt=new $({props:{src:"https://hackmd.io/_uploads/Hk4b1u32n.png"}}),xt=new $({props:{src:"https://hackmd.io/_uploads/HJKFkO333.png"}}),Mt=new $({props:{src:"https://hackmd.io/_uploads/rymwDnwih.png"}}),Nt=new $({props:{src:"https://hackmd.io/_uploads/SkhOg5_32.png"}}),Dt=new $({props:{src:"https://hackmd.io/_uploads/HJJcG9dnh.png"}}),Lt=new $({props:{src:"https://hackmd.io/_uploads/HJEpX5uhn.png"}}),bt=new $({props:{src:"https://hackmd.io/_uploads/Hki8Ncu2h.png"}}),Et=new $({props:{src:"https://hackmd.io/_uploads/BJDHD_323.png"}}),Ft=new $({props:{src:"https://hackmd.io/_uploads/rJ3fu_nh2.png"}}),It=new $({props:{src:"https://hackmd.io/_uploads/rJlxvs2nh.png"}}),Ot=new $({props:{src:"https://hackmd.io/_uploads/H1oKHvx1a.png"}}),Wt=new $({props:{src:"https://hackmd.io/_uploads/HJodMwxJa.png"}}),Gt=new $({props:{src:"https://hackmd.io/_uploads/SJxzrwx16.png"}}),Bt=new $({props:{src:"https://hackmd.io/_uploads/SJ-HIvlyT.png"}}),Ut=new $({props:{src:"https://hackmd.io/_uploads/r1wZT0kD0.png",alt:"image"}}),Jt=new $({props:{src:"https://hackmd.io/_uploads/HyV4fJew0.png",alt:"image"}}),Vt=new $({props:{src:"https://hackmd.io/_uploads/HyQXZyxDA.png",alt:"image"}}),Kt=new $({props:{src:"https://hackmd.io/_uploads/B1f0jJlwR.png",alt:"image"}}),qt=new $({props:{src:"https://hackmd.io/_uploads/HyZMWglPC.png",alt:"image"}}),jt=new $({props:{src:"https://hackmd.io/_uploads/HyF2QegvC.png",alt:"image"}}),Qt=new $({props:{src:"https://hackmd.io/_uploads/BkC-4xlDR.png",alt:"image"}}),Xt=new $({props:{src:"https://hackmd.io/_uploads/BkzfBgxw0.png",alt:"image"}}),Zt=new $({props:{src:"https://hackmd.io/_uploads/HyAozexDR.png",alt:"image"}}),zt=new $({props:{src:"https://hackmd.io/_uploads/ByKLSlew0.png",alt:"image"}}),Yt=new $({props:{src:"https://hackmd.io/_uploads/BJYGUeewC.png",alt:"image"}}),en=new $({props:{src:"https://hackmd.io/_uploads/SyIsLgeDR.png",alt:"image"}}),tn=new $({props:{src:"https://hackmd.io/_uploads/SygknxeDA.png",alt:"image"}}),nn=new $({props:{src:"https://hackmd.io/_uploads/HJCGhelDR.png",alt:"image"}}),rn=new $({props:{src:"https://hackmd.io/_uploads/rywFnlgv0.png",alt:"image"}}),sn=new $({props:{src:"https://hackmd.io/_uploads/SkbAvQevC.png",alt:"image"}}),an=new $({props:{src:"https://hackmd.io/_uploads/HkweuXeDA.png",alt:"image"}}),mn=new $({props:{src:"https://hackmd.io/_uploads/BJqCdXewR.png",alt:"image"}}),pn=new $({props:{src:"https://hackmd.io/_uploads/S10qtQlwA.png",alt:"image"}}),on=new $({props:{src:"https://hackmd.io/_uploads/SyfBYQ8Rh.png"}}),ln=new $({props:{src:"https://hackmd.io/_uploads/rkuU5QUC2.png"}}),$n=new $({props:{src:"https://hackmd.io/_uploads/H1wKc78R2.png"}}),gn=new $({props:{src:"https://hackmd.io/_uploads/H1Ppi7LR2.png"}}),fn=new $({props:{src:"https://hackmd.io/_uploads/SkJYhXIC3.png"}}),un=new $({props:{src:"https://hackmd.io/_uploads/B1Bq2XLRh.png"}}),dn=new $({props:{src:"https://hackmd.io/_uploads/Skbb6Q8C2.png"}}),hn=new $({props:{src:"https://hackmd.io/_uploads/BJLgKWKCp.png",alt:"image"}}),_n=new $({props:{src:"https://hackmd.io/_uploads/H1YC5bFCp.png",alt:"image"}}),vn=new $({props:{src:"https://hackmd.io/_uploads/Hy1D2-YAp.png",alt:"image"}}),Cn=new $({props:{src:"https://hackmd.io/_uploads/BkfepWtAa.png",alt:"image"}}),Sn=new $({props:{src:"https://hackmd.io/_uploads/B1ZXTZKCp.png",alt:"image"}}),wn=new $({props:{src:"https://hackmd.io/_uploads/SJFSAZtC6.png",alt:"image"}}),kn=new $({props:{src:"https://hackmd.io/_uploads/rkKDRWtAT.png",alt:"image"}}),Pn=new $({props:{src:"https://hackmd.io/_uploads/HkeiRbt0p.png",alt:"image"}}),An=new $({props:{src:"https://hackmd.io/_uploads/B1kp0-YRa.png",alt:"image"}}),Hn=new $({props:{src:"https://hackmd.io/_uploads/HJLDgliR6.png",alt:"image"}}),Tn=new $({props:{src:"https://hackmd.io/_uploads/ry_igeiCT.png",alt:"image"}}),yn=new $({props:{src:"https://hackmd.io/_uploads/ryc6xgjC6.png",alt:"image"}}),Rn=new $({props:{src:"https://hackmd.io/_uploads/SkJB4giRp.png",alt:"image"}}),xn=new $({props:{src:"https://hackmd.io/_uploads/HktnHxsCp.png",alt:"image"}}),Mn=new $({props:{src:"https://hackmd.io/_uploads/BJqYNxo0T.png",alt:"image"}}),Nn=new $({props:{src:"https://hackmd.io/_uploads/SJah4gjRp.png",alt:"image"}}),Dn=new $({props:{src:"https://hackmd.io/_uploads/HkzMwxsR6.png",alt:"image"}}),bn=new $({props:{src:"https://hackmd.io/_uploads/Sk4pHiuX0.png",alt:"image"}}),En=new $({props:{src:"https://hackmd.io/_uploads/SJFFvsdXR.png",alt:"image"}}),Fn=new $({props:{src:"https://hackmd.io/_uploads/ByfCDiOQA.png",alt:"image"}}),In=new $({props:{src:"https://hackmd.io/_uploads/rJWrKiumR.png",alt:"image"}}),On=new $({props:{src:"https://hackmd.io/_uploads/rylCtidQR.png",alt:"image"}}),Wn=new $({props:{src:"https://hackmd.io/_uploads/SyRN5i_mR.png",alt:"image"}}),Gn=new $({props:{src:"https://hackmd.io/_uploads/Sydp9s_QR.png",alt:"image"}}),Bn=new $({props:{src:"https://hackmd.io/_uploads/rJfVojOQC.png",alt:"image"}}),Un=new $({props:{src:"https://hackmd.io/_uploads/HyXAijdm0.png",alt:"image"}}),Jn=new $({props:{src:"https://hackmd.io/_uploads/ByrOnjOXR.png",alt:"image"}}),Vn=new $({props:{src:"https://learn-attachment.microsoft.com/api/attachments/7a610d77-a91c-4fdd-b852-8997ea966c54?platform=QnA",alt:"image"}}),Kn=new $({props:{src:"https://hackmd.io/_uploads/By5GaH-rR.png",alt:"image"}}),{c(){A=c("h2"),A.innerHTML=te,Z=u(),O=c("h3"),O.innerHTML=x,W=u(),G=c("p"),Ns=g("GPO -> User Configuration -> Policies -> Administrative Templetes -> Control Panel -> 設定 Prohibit access to Control Panel and PC settings 為 "),nr=c("strong"),nr.textContent=tm,Ds=u(),a(be.$$.fragment),yr=u(),me=c("h3"),me.innerHTML=nm,Rr=u(),J=c("p"),Ls=g(`GPO -> User Configuration -> Administrative Templetes -> System -> 設定 Don’t run specified Windows applications
`),a(Ee.$$.fragment),bs=g(`
設定為 `),rr=c("strong"),rr.textContent=rm,Es=g(`，並點選 List of disallowed applications，在 Value 欄位設定要禁用的應用程式
`),a(Fe.$$.fragment),xr=u(),pe=c("h3"),pe.innerHTML=sm,Mr=u(),ne=c("p"),Fs=g("GPO -> Computer Configuration -> Policies -> Administrative Templetes -> System -> Logon -> 設定 Block user from showing account details on sign-in 為 "),sr=c("strong"),sr.textContent=am,Is=u(),a(Ie.$$.fragment),Nr=u(),oe=c("h3"),oe.innerHTML=im,Dr=u(),re=c("p"),Os=g("Local GPO -> Computer Configuration -> Administrative Templates -> Network -> Lanman Workstation -> 設定 Enable insecure guest logons 為 "),ar=c("strong"),ar.textContent=mm,Ws=u(),a(Oe.$$.fragment),Lr=u(),le=c("h3"),le.innerHTML=pm,br=u(),We=c("p"),Gs=g(`若要指定特別使用者套用 Group Policy (刪除 Authentication Users)，至少要保留一台 Computer (最好是 Server 和 Client 都保留)
`),a(Ge.$$.fragment),Er=u(),$e=c("h3"),$e.innerHTML=om,Fr=u(),V=c("p"),Bs=g("GPO -> Computer Configuration -> Administrative Templates -> Windows Components -> Windows Update -> 設定 Remove access to use all Windows Update features 為 "),ir=c("strong"),ir.textContent=lm,Us=u(),a(Be.$$.fragment),Js=g(`
效果：
`),a(Ue.$$.fragment),Ir=u(),ge=c("h2"),ge.innerHTML=$m,Or=u(),fe=c("h4"),fe.innerHTML=gm,Wr=u(),se=c("p"),Vs=g(`在 Primary DNS 上設定當記錄發生變化時通知 Secondary DNS
`),a(Je.$$.fragment),Ks=g(`
設定 Secondary DNS 可以接收 Notify
`),a(Ve.$$.fragment),Gr=u(),ue=c("h4"),ue.innerHTML=fm,Br=u(),Ke=c("p"),a(qe.$$.fragment),qs=g(`
Refresh interval：Secondary DNS 多久向 Primary DNS 伺服器同步
Retry interval：當 Secondary DNS 向 Primary DNS 同步但無法連線到 Primary DNS，多久後重試
Expires after：當 Secondary DNS 無法連線到 Primary DNS 會一直重試，如果重試超過到期時間就放棄重試
Minimum TTL：當其它 DNS 伺服器查詢這個網域的記錄時，資料儲存在對方伺服器快取中的時間 (若在到期前若對方伺服器又收到相同查詢就會直接回應快取中的資料)`),Ur=u(),de=c("h2"),de.innerHTML=um,Jr=u(),H=c("p"),js=g(`進入 Control Panel -> Windows Defender Firewall -> Advenced settings
`),a(je.$$.fragment),Qs=g(`
選 Inbound rules -> New Rule
`),a(Qe.$$.fragment),Xs=u(),a(Xe.$$.fragment),Zs=u(),a(Ze.$$.fragment),zs=u(),a(ze.$$.fragment),Ys=g(`
選擇 ICMP：
`),a(Ye.$$.fragment),ea=u(),a(et.$$.fragment),ta=u(),a(tt.$$.fragment),na=u(),a(nt.$$.fragment),ra=g(`
即完成 ICMP 設定
`),a(rt.$$.fragment),Vr=u(),ce=c("h2"),ce.innerHTML=dm,Kr=u(),he=c("h3"),he.innerHTML=cm,qr=u(),K=c("p"),sa=g(`打開 Group Policy Management -> Create a GPO in this domain, and Link it here
`),a(st.$$.fragment),aa=g(`
選擇 Computer Configuration -> Policies -> Windows Settings -> Security Settings -> Public Keys -> Certificate Services Client - Auto-Enrollmemt
設定 Configuration Model 為 `),mr=c("strong"),mr.textContent=hm,ia=u(),a(at.$$.fragment),jr=u(),_e=c("h3"),_e.innerHTML=_m,Qr=u(),N=c("p"),ma=g(`選擇 Automatic Certification Settings
右鍵 -> New -> Automatic Certificate Request
`),a(it.$$.fragment),pa=g(`
選擇 Computer
`),a(mt.$$.fragment),oa=u(),a(pt.$$.fragment),la=u(),a(ot.$$.fragment),$a=g(`
輸入 `),pr=c("code"),pr.textContent=vm,ga=g(` 後，即完成設定
`),a(lt.$$.fragment),Xr=u(),ve=c("h2"),ve.innerHTML=Cm,Zr=u(),$t=c("p"),fa=g(`安裝 File Server Resource Manager
`),a(gt.$$.fragment),zr=u(),Ce=c("h3"),Ce.innerHTML=Sm,Yr=u(),q=c("p"),ua=g(`選擇 Quota Management -> Quotas
`),a(ft.$$.fragment),da=g(`
右鍵 Create Quota
`),a(ut.$$.fragment),ca=g(`
選好要套用的共享資料夾，如果在系統給的選項內沒有題目的條件就用 Custom Properties
`),a(dt.$$.fragment),es=u(),Se=c("h3"),Se.innerHTML=wm,ts=u(),B=c("p"),or=c("strong"),or.textContent=km,ha=g(`
選擇 File Screening Management -> File Groups
`),a(ct.$$.fragment),_a=g(`
右鍵 Create File Group
`),a(ht.$$.fragment),va=g(`
將此群組包含的檔案類型都加到 Files to include 內 (註：＊.exe 代表封鎖全部附檔名為 exe 的檔案)
`),a(_t.$$.fragment),ns=u(),E=c("p"),lr=c("strong"),lr.textContent=Pm,Ca=g(`
選擇 File Screening Management -> File Screen Templates
`),a(vt.$$.fragment),Sa=g(`
右鍵 Create File Screen Template
`),a(Ct.$$.fragment),wa=u(),$r=c("strong"),$r.textContent=Am,ka=u(),a(St.$$.fragment),rs=u(),U=c("p"),gr=c("strong"),gr.textContent=Hm,Pa=g(`
選擇 File Screening Management -> File Screens
`),a(wt.$$.fragment),Aa=g(`
右鍵 Create File Screen
`),a(kt.$$.fragment),Ha=g(`
選好要套用的共享資料夾，並將選項選到剛剛設定的範本
`),a(Pt.$$.fragment),ss=u(),we=c("h2"),we.innerHTML=Tm,as=u(),j=c("p"),Ta=g(`按一下 Windows Key + R，輸入 regedit 後 Enter
在「`),fr=c("strong"),fr.textContent=ym,ya=g("」下，找到「"),ur=c("strong"),ur.textContent=Rm,Ra=g(`」選項並編輯其機碼值為欲設定的 Port 後重啟即可
`),a(At.$$.fragment),is=u(),ke=c("h2"),ke.innerHTML=xm,ms=u(),v=c("p"),xa=g(`新增 VPN 規則，選擇 DirectAccess and VPN (RAS)
`),a(Ht.$$.fragment),Ma=g(`
重啟後點選 Remote Access Management Console 後再選 RRAS Management console
`),a(Tt.$$.fragment),Na=g(`
選擇伺服器，右鍵選擇 Configure and Enable Routing and Remote Access
`),a(yt.$$.fragment),Da=g(`
選擇 Custom configuration
`),a(Rt.$$.fragment),La=g(`
選擇 VPN Access 即可
`),a(xt.$$.fragment),ba=g(`
若無設定 DHCP：
設定 VPN 的 Static address pool，並輸入範圍可使用 VPN 的 IP 範圍
`),a(Mt.$$.fragment),Ea=g(`
(若有設定 DHCP 可直接略過到下一步驟)
回到 Server Manager，選 Tools -> Active Directory Users and Computers
`),a(Nt.$$.fragment),Fa=g(`
選取想要遠端存取的使用者，並右鍵選擇「Add to a group…」
`),a(Dt.$$.fragment),Ia=g(`
輸入 Remote 後選擇 Check Names
`),a(Lt.$$.fragment),Oa=g(`
選擇 Remote Desktop Users 後，按 OK
`),a(bt.$$.fragment),Wa=g(`
選擇 Network Policy Server
`),a(Et.$$.fragment),Ga=g(`
點開 Policies -> Network Policies -> New
`),a(Ft.$$.fragment),Ba=u(),a(It.$$.fragment),Ua=g(`
設定後在 Client 端上可輸入在群組內使用者的帳號和密碼登入 VPN
若遇到登入失敗的問題或一直卡在連線中：
一樣到 Network Policy Server
`),a(Ot.$$.fragment),Ja=g(`
選擇剛剛建立的規則，按右鍵 -> Properties
`),a(Wt.$$.fragment),Va=g(`
Constraints -> Authentication Methods -> Add… -> 選 Microsoft: Secured password (EAP-MSCHAP v2) -> OK
`),a(Gt.$$.fragment),Ka=u(),a(Bt.$$.fragment),ps=u(),Pe=c("h3"),Pe.innerHTML=Mm,os=u(),Ae=c("h4"),Ae.innerHTML=Nm,ls=u(),F=c("p"),qa=g(`如果有 Web Server，SSTP 所使用的憑證需要和 Web Server 一樣
故要簽一張萬用域名(*)的憑證 (若 Web Server 和 SSTP 的 FQDN 不一樣的話)
`),a(Ut.$$.fragment),ja=g(`
簽好後到 Server Manager -> Tools -> Routing and Remote Access
`),a(Jt.$$.fragment),Qa=g(`
Server -> 右鍵 -> Properties
`),a(Vt.$$.fragment),Xa=u(),a(Kt.$$.fragment),$s=u(),_r=new zi(!1),vr=u(),He=c("h3"),He.innerHTML=Dm,gs=u(),C=c("p"),Za=g(`若題目有要求用 AD 使用者帳號驗證，但 VPN 不是安裝在 Domain Contoller 上的時候就會需要 RADIUS
在 Domain Controller 上先安裝 Network Policy and Access Services
`),a(qt.$$.fragment),za=g(`
安裝後 -> 點選 Tools -> Network Policy Server -> NPS (Local)
確認選項是 VPN Connections 後，點選 Configure VPN or Dial-Up
`),a(jt.$$.fragment),Ya=g(`
選擇 Virtual Private Network (VPN) Connections
`),a(Qt.$$.fragment),ei=g(`
Next -> Add…
`),a(Xt.$$.fragment),ti=g(`
將被驗證方的資料輸入完後按 Verify…
`),a(Zt.$$.fragment),ni=g(`
再按 Resolve，系統會確定 Client 端是否在線，若在線下面的 IP address 會顯示
`),a(zt.$$.fragment),ri=g(`
將三個選項都確認無誤後再下一步
`),a(Yt.$$.fragment),si=g(`
接著設定可以使用 VPN 的群組
`),a(en.$$.fragment),ai=g(`
IP Fliter 可依需求設定，若無需設定直接 Next
`),a(tn.$$.fragment),ii=g(`
僅勾選 Strongest encryption
`),a(nn.$$.fragment),mi=g(`
Realm Name 可直接跳過
`),a(rn.$$.fragment),pi=g(`
RADIUS Server 端設定完成，轉到 Client 端
Server Manager -> Tools -> Routing and Remote Access -> 右鍵 Server -> Properties -> Security
將 Authentication provider 和 Accounting provider 都設為 RADIUS Accounting -> Configure…
`),a(sn.$$.fragment),oi=g(`
按 New…
`),a(an.$$.fragment),li=g(`
Server name 輸入 Server 端的 IP Address，Shared secret 輸入在 Server 端設定好的密碼，Accounting provider 的 Configure 也照樣設定
`),a(mn.$$.fragment),$i=g(`
按 OK 後就設定完成
`),a(pn.$$.fragment),fs=u(),Te=c("h2"),Te.innerHTML=Lm,us=u(),M=c("p"),gi=g(`在 Windows Server 端的操作：打開 MMC -> 導入 Certificates -> Computer Account -> Local Computer
`),a(on.$$.fragment),fi=g(`
Trusted Root Certificates Authorities -> Certificates -> 選擇要讓外部電腦驗證的根憑證 -> 右鍵 All Tasks -> Export…
`),a(ln.$$.fragment),ui=g(`
檔案格式選 DER 或 Base-64 則一即可
`),a($n.$$.fragment),di=g(`
在外部電腦端的操作：打開 MMC -> 導入 Ceritficates -> Computer Account -> Local Computer -> Trusted Root Certificates Authorities -> Ceritficates -> 右鍵 All Tasks -> Import…
`),a(gn.$$.fragment),ci=g(`
選取剛剛自己導出的根憑證
`),a(fn.$$.fragment),hi=g(`
選擇 Place all ceritificates in the following store，並確認憑證倉庫為「Trusted Root Certificates Authorities」
`),a(un.$$.fragment),_i=g(`
最後按下 Finish，即安裝完成根憑證，瀏覽內部網站時不會再跳出憑證錯誤等訊息
`),a(dn.$$.fragment),ds=u(),ye=c("h2"),ye.innerHTML=bm,cs=u(),cn=c("p"),vi=g(`打開 AD AC，到 domain (local) -> System -> Password Settings Container -> 右鍵 Password Settings
`),a(hn.$$.fragment),hs=u(),Cr=new zi(!1),Sr=u(),R=c("p"),a(_n.$$.fragment),Ci=g(`
回到 Users -> 選擇自己要套用設定的使用者或群組 -> 右鍵 Properties -> Password Settings -> Assign…
`),a(vn.$$.fragment),Si=g(`
選 Advenced…
`),a(Cn.$$.fragment),wi=g(`
選 Find Now -> 選擇自己建立的規則
`),a(Sn.$$.fragment),ki=g(`
若新輸入的密碼不到 8 個字：
`),a(wn.$$.fragment),Pi=u(),a(kn.$$.fragment),Ai=g(`
若有至少 8 個字：
`),a(Pn.$$.fragment),Hi=u(),a(An.$$.fragment),_s=u(),Re=c("h2"),Re.innerHTML=Em,vs=u(),T=c("p"),Ti=g(`安裝服務：
`),a(Hn.$$.fragment),yi=u(),a(Tn.$$.fragment),Ri=u(),a(yn.$$.fragment),xi=g(`
使用 Internet Explorer 可瀏覽其 RDWeb (在沒有 SSL 簽證的狀況下)：
`),a(Rn.$$.fragment),Mi=u(),a(xn.$$.fragment),Ni=g(`
也可透過網域使用者直接遠端 Server：
`),a(Mn.$$.fragment),Di=u(),a(Nn.$$.fragment),Li=g(`
若簽證了可使用 Edge 正常預覽：
`),a(Dn.$$.fragment),Cs=u(),xe=c("h2"),xe.innerHTML=Fm,Ss=u(),Ln=c("p"),Ln.innerHTML=Im,ws=u(),Me=c("h2"),Me.innerHTML=Om,ks=u(),Q=c("p"),bi=g(`先到已安裝 Main CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 Properties
`),a(bn.$$.fragment),Ei=g(`
點選 Extensions -> Select extension 選擇 CDP -> 點選 http 開頭的項目 -> 勾選第三跟第四個選項
`),a(En.$$.fragment),Fi=g(`
Select extension 換選擇 AIA -> 點選 http 開頭的項目 -> 勾選第一個選項 -> 點擊 Apply
`),a(Fn.$$.fragment),Ps=u(),ae=c("p"),Ii=g(`接著轉到需要安裝 Sub CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 All Tasks -> Renew CA Certificate…
`),a(In.$$.fragment),Oi=g(`
確認 Computer Name 跟 Parent CA 都正確後，點擊 OK
`),a(On.$$.fragment),As=u(),X=c("p"),Wi=g(`回到 Main CA Server -> Pending Requests -> Issue 從 Sub CA 發起的請求
`),a(Wn.$$.fragment),Gi=g(`
Issued Certidicates -> 選擇剛剛 Issue 的 CA -> Details -> Copy to File…
`),a(Gn.$$.fragment),Bi=g(`
選擇 DER encoded 的 X.509 -> Next -> 儲存於自己指定的位置 -> 複製到 Sub CA Server
`),a(Bn.$$.fragment),Hs=u(),z=c("p"),Ui=g(`再回到 Sub CA Server，點選 Server 後右鍵 All Tasks -> Install CA Certificate…
`),a(Un.$$.fragment),Ji=g(`
右下角選擇 X.509 類型的 CA -> 選擇剛剛簽好的 CA
`),a(Jn.$$.fragment),Vi=g(`
安裝好後，Sub CA Server 圖標會有綠色勾勾，代表正常運作`),Ts=u(),Ne=c("h3"),Ne.innerHTML=Wm,ys=u(),Y=c("p"),a(Vn.$$.fragment),Ki=g(`
此錯誤為無法從 Root CA 的 CRL 發布點下載撤銷憑證名單，可先嘗試透過在 hosts 內增加對 Root CA Server 的記錄 (可能需要執行 `),dr=c("code"),dr.textContent=Gm,qi=g(` 保證系統會透過 hosts 內的記錄找尋)
`),a(Kn.$$.fragment),Rs=u(),qn=c("p"),qn.textContent=Bm,xs=u(),wr=new zi(!1),kr=Jm(),this.h()},l(e){A=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(A)!=="svelte-i2sykg"&&(A.innerHTML=te),Z=d(e),O=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(O)!=="svelte-1xaqksb"&&(O.innerHTML=x),W=d(e),G=h(e,"P",{});var r=k(G);Ns=f(r,"GPO -> User Configuration -> Policies -> Administrative Templetes -> Control Panel -> 設定 Prohibit access to Control Panel and PC settings 為 "),nr=h(r,"STRONG",{"data-svelte-h":!0}),_(nr)!=="svelte-tra0oh"&&(nr.textContent=tm),Ds=d(r),i(be.$$.fragment,r),r.forEach(t),yr=d(e),me=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(me)!=="svelte-epwre2"&&(me.innerHTML=nm),Rr=d(e),J=h(e,"P",{});var jn=k(J);Ls=f(jn,`GPO -> User Configuration -> Administrative Templetes -> System -> 設定 Don’t run specified Windows applications
`),i(Ee.$$.fragment,jn),bs=f(jn,`
設定為 `),rr=h(jn,"STRONG",{"data-svelte-h":!0}),_(rr)!=="svelte-tra0oh"&&(rr.textContent=rm),Es=f(jn,`，並點選 List of disallowed applications，在 Value 欄位設定要禁用的應用程式
`),i(Fe.$$.fragment,jn),jn.forEach(t),xr=d(e),pe=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(pe)!=="svelte-lnk77j"&&(pe.innerHTML=sm),Mr=d(e),ne=h(e,"P",{});var Pr=k(ne);Fs=f(Pr,"GPO -> Computer Configuration -> Policies -> Administrative Templetes -> System -> Logon -> 設定 Block user from showing account details on sign-in 為 "),sr=h(Pr,"STRONG",{"data-svelte-h":!0}),_(sr)!=="svelte-tra0oh"&&(sr.textContent=am),Is=d(Pr),i(Ie.$$.fragment,Pr),Pr.forEach(t),Nr=d(e),oe=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(oe)!=="svelte-k62u4a"&&(oe.innerHTML=im),Dr=d(e),re=h(e,"P",{});var Ar=k(re);Os=f(Ar,"Local GPO -> Computer Configuration -> Administrative Templates -> Network -> Lanman Workstation -> 設定 Enable insecure guest logons 為 "),ar=h(Ar,"STRONG",{"data-svelte-h":!0}),_(ar)!=="svelte-tra0oh"&&(ar.textContent=mm),Ws=d(Ar),i(Oe.$$.fragment,Ar),Ar.forEach(t),Lr=d(e),le=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(le)!=="svelte-19caf4p"&&(le.innerHTML=pm),br=d(e),We=h(e,"P",{});var ji=k(We);Gs=f(ji,`若要指定特別使用者套用 Group Policy (刪除 Authentication Users)，至少要保留一台 Computer (最好是 Server 和 Client 都保留)
`),i(Ge.$$.fragment,ji),ji.forEach(t),Er=d(e),$e=h(e,"H3",{id:!0,"data-svelte-h":!0}),_($e)!=="svelte-1bqfzki"&&($e.innerHTML=om),Fr=d(e),V=h(e,"P",{});var Qn=k(V);Bs=f(Qn,"GPO -> Computer Configuration -> Administrative Templates -> Windows Components -> Windows Update -> 設定 Remove access to use all Windows Update features 為 "),ir=h(Qn,"STRONG",{"data-svelte-h":!0}),_(ir)!=="svelte-tra0oh"&&(ir.textContent=lm),Us=d(Qn),i(Be.$$.fragment,Qn),Js=f(Qn,`
效果：
`),i(Ue.$$.fragment,Qn),Qn.forEach(t),Ir=d(e),ge=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(ge)!=="svelte-1ygr0y3"&&(ge.innerHTML=$m),Or=d(e),fe=h(e,"H4",{id:!0,"data-svelte-h":!0}),_(fe)!=="svelte-zysikv"&&(fe.innerHTML=gm),Wr=d(e),se=h(e,"P",{});var Hr=k(se);Vs=f(Hr,`在 Primary DNS 上設定當記錄發生變化時通知 Secondary DNS
`),i(Je.$$.fragment,Hr),Ks=f(Hr,`
設定 Secondary DNS 可以接收 Notify
`),i(Ve.$$.fragment,Hr),Hr.forEach(t),Gr=d(e),ue=h(e,"H4",{id:!0,"data-svelte-h":!0}),_(ue)!=="svelte-1pq0ti3"&&(ue.innerHTML=fm),Br=d(e),Ke=h(e,"P",{});var Qi=k(Ke);i(qe.$$.fragment,Qi),qs=f(Qi,`
Refresh interval：Secondary DNS 多久向 Primary DNS 伺服器同步
Retry interval：當 Secondary DNS 向 Primary DNS 同步但無法連線到 Primary DNS，多久後重試
Expires after：當 Secondary DNS 無法連線到 Primary DNS 會一直重試，如果重試超過到期時間就放棄重試
Minimum TTL：當其它 DNS 伺服器查詢這個網域的記錄時，資料儲存在對方伺服器快取中的時間 (若在到期前若對方伺服器又收到相同查詢就會直接回應快取中的資料)`),Qi.forEach(t),Ur=d(e),de=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(de)!=="svelte-jb9b1l"&&(de.innerHTML=um),Jr=d(e),H=h(e,"P",{});var y=k(H);js=f(y,`進入 Control Panel -> Windows Defender Firewall -> Advenced settings
`),i(je.$$.fragment,y),Qs=f(y,`
選 Inbound rules -> New Rule
`),i(Qe.$$.fragment,y),Xs=d(y),i(Xe.$$.fragment,y),Zs=d(y),i(Ze.$$.fragment,y),zs=d(y),i(ze.$$.fragment,y),Ys=f(y,`
選擇 ICMP：
`),i(Ye.$$.fragment,y),ea=d(y),i(et.$$.fragment,y),ta=d(y),i(tt.$$.fragment,y),na=d(y),i(nt.$$.fragment,y),ra=f(y,`
即完成 ICMP 設定
`),i(rt.$$.fragment,y),y.forEach(t),Vr=d(e),ce=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(ce)!=="svelte-1hgj8bt"&&(ce.innerHTML=dm),Kr=d(e),he=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(he)!=="svelte-1bn527i"&&(he.innerHTML=cm),qr=d(e),K=h(e,"P",{});var Xn=k(K);sa=f(Xn,`打開 Group Policy Management -> Create a GPO in this domain, and Link it here
`),i(st.$$.fragment,Xn),aa=f(Xn,`
選擇 Computer Configuration -> Policies -> Windows Settings -> Security Settings -> Public Keys -> Certificate Services Client - Auto-Enrollmemt
設定 Configuration Model 為 `),mr=h(Xn,"STRONG",{"data-svelte-h":!0}),_(mr)!=="svelte-tra0oh"&&(mr.textContent=hm),ia=d(Xn),i(at.$$.fragment,Xn),Xn.forEach(t),jr=d(e),_e=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(_e)!=="svelte-12ij8jf"&&(_e.innerHTML=_m),Qr=d(e),N=h(e,"P",{});var I=k(N);ma=f(I,`選擇 Automatic Certification Settings
右鍵 -> New -> Automatic Certificate Request
`),i(it.$$.fragment,I),pa=f(I,`
選擇 Computer
`),i(mt.$$.fragment,I),oa=d(I),i(pt.$$.fragment,I),la=d(I),i(ot.$$.fragment,I),$a=f(I,`
輸入 `),pr=h(I,"CODE",{"data-svelte-h":!0}),_(pr)!=="svelte-1fy3f7c"&&(pr.textContent=vm),ga=f(I,` 後，即完成設定
`),i(lt.$$.fragment,I),I.forEach(t),Xr=d(e),ve=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(ve)!=="svelte-zkmn7l"&&(ve.innerHTML=Cm),Zr=d(e),$t=h(e,"P",{});var Xi=k($t);fa=f(Xi,`安裝 File Server Resource Manager
`),i(gt.$$.fragment,Xi),Xi.forEach(t),zr=d(e),Ce=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ce)!=="svelte-ch0v1b"&&(Ce.innerHTML=Sm),Yr=d(e),q=h(e,"P",{});var Zn=k(q);ua=f(Zn,`選擇 Quota Management -> Quotas
`),i(ft.$$.fragment,Zn),da=f(Zn,`
右鍵 Create Quota
`),i(ut.$$.fragment,Zn),ca=f(Zn,`
選好要套用的共享資料夾，如果在系統給的選項內沒有題目的條件就用 Custom Properties
`),i(dt.$$.fragment,Zn),Zn.forEach(t),es=d(e),Se=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(Se)!=="svelte-5xvxel"&&(Se.innerHTML=wm),ts=d(e),B=h(e,"P",{});var De=k(B);or=h(De,"STRONG",{"data-svelte-h":!0}),_(or)!=="svelte-p7pb6r"&&(or.textContent=km),ha=f(De,`
選擇 File Screening Management -> File Groups
`),i(ct.$$.fragment,De),_a=f(De,`
右鍵 Create File Group
`),i(ht.$$.fragment,De),va=f(De,`
將此群組包含的檔案類型都加到 Files to include 內 (註：＊.exe 代表封鎖全部附檔名為 exe 的檔案)
`),i(_t.$$.fragment,De),De.forEach(t),ns=d(e),E=h(e,"P",{});var ee=k(E);lr=h(ee,"STRONG",{"data-svelte-h":!0}),_(lr)!=="svelte-1ikqcpl"&&(lr.textContent=Pm),Ca=f(ee,`
選擇 File Screening Management -> File Screen Templates
`),i(vt.$$.fragment,ee),Sa=f(ee,`
右鍵 Create File Screen Template
`),i(Ct.$$.fragment,ee),wa=d(ee),$r=h(ee,"STRONG",{"data-svelte-h":!0}),_($r)!=="svelte-36j3yp"&&($r.textContent=Am),ka=d(ee),i(St.$$.fragment,ee),ee.forEach(t),rs=d(e),U=h(e,"P",{});var Le=k(U);gr=h(Le,"STRONG",{"data-svelte-h":!0}),_(gr)!=="svelte-18l87u8"&&(gr.textContent=Hm),Pa=f(Le,`
選擇 File Screening Management -> File Screens
`),i(wt.$$.fragment,Le),Aa=f(Le,`
右鍵 Create File Screen
`),i(kt.$$.fragment,Le),Ha=f(Le,`
選好要套用的共享資料夾，並將選項選到剛剛設定的範本
`),i(Pt.$$.fragment,Le),Le.forEach(t),ss=d(e),we=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(we)!=="svelte-fuiknc"&&(we.innerHTML=Tm),as=d(e),j=h(e,"P",{});var zn=k(j);Ta=f(zn,`按一下 Windows Key + R，輸入 regedit 後 Enter
在「`),fr=h(zn,"STRONG",{"data-svelte-h":!0}),_(fr)!=="svelte-1f1gqr1"&&(fr.textContent=ym),ya=f(zn,"」下，找到「"),ur=h(zn,"STRONG",{"data-svelte-h":!0}),_(ur)!=="svelte-ldgmsq"&&(ur.textContent=Rm),Ra=f(zn,`」選項並編輯其機碼值為欲設定的 Port 後重啟即可
`),i(At.$$.fragment,zn),zn.forEach(t),is=d(e),ke=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(ke)!=="svelte-1i017zr"&&(ke.innerHTML=xm),ms=d(e),v=h(e,"P",{});var S=k(v);xa=f(S,`新增 VPN 規則，選擇 DirectAccess and VPN (RAS)
`),i(Ht.$$.fragment,S),Ma=f(S,`
重啟後點選 Remote Access Management Console 後再選 RRAS Management console
`),i(Tt.$$.fragment,S),Na=f(S,`
選擇伺服器，右鍵選擇 Configure and Enable Routing and Remote Access
`),i(yt.$$.fragment,S),Da=f(S,`
選擇 Custom configuration
`),i(Rt.$$.fragment,S),La=f(S,`
選擇 VPN Access 即可
`),i(xt.$$.fragment,S),ba=f(S,`
若無設定 DHCP：
設定 VPN 的 Static address pool，並輸入範圍可使用 VPN 的 IP 範圍
`),i(Mt.$$.fragment,S),Ea=f(S,`
(若有設定 DHCP 可直接略過到下一步驟)
回到 Server Manager，選 Tools -> Active Directory Users and Computers
`),i(Nt.$$.fragment,S),Fa=f(S,`
選取想要遠端存取的使用者，並右鍵選擇「Add to a group…」
`),i(Dt.$$.fragment,S),Ia=f(S,`
輸入 Remote 後選擇 Check Names
`),i(Lt.$$.fragment,S),Oa=f(S,`
選擇 Remote Desktop Users 後，按 OK
`),i(bt.$$.fragment,S),Wa=f(S,`
選擇 Network Policy Server
`),i(Et.$$.fragment,S),Ga=f(S,`
點開 Policies -> Network Policies -> New
`),i(Ft.$$.fragment,S),Ba=d(S),i(It.$$.fragment,S),Ua=f(S,`
設定後在 Client 端上可輸入在群組內使用者的帳號和密碼登入 VPN
若遇到登入失敗的問題或一直卡在連線中：
一樣到 Network Policy Server
`),i(Ot.$$.fragment,S),Ja=f(S,`
選擇剛剛建立的規則，按右鍵 -> Properties
`),i(Wt.$$.fragment,S),Va=f(S,`
Constraints -> Authentication Methods -> Add… -> 選 Microsoft: Secured password (EAP-MSCHAP v2) -> OK
`),i(Gt.$$.fragment,S),Ka=d(S),i(Bt.$$.fragment,S),S.forEach(t),ps=d(e),Pe=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(Pe)!=="svelte-1xtvju2"&&(Pe.innerHTML=Mm),os=d(e),Ae=h(e,"H4",{id:!0,"data-svelte-h":!0}),_(Ae)!=="svelte-1tqhik2"&&(Ae.innerHTML=Nm),ls=d(e),F=h(e,"P",{});var ie=k(F);qa=f(ie,`如果有 Web Server，SSTP 所使用的憑證需要和 Web Server 一樣
故要簽一張萬用域名(*)的憑證 (若 Web Server 和 SSTP 的 FQDN 不一樣的話)
`),i(Ut.$$.fragment,ie),ja=f(ie,`
簽好後到 Server Manager -> Tools -> Routing and Remote Access
`),i(Jt.$$.fragment,ie),Qa=f(ie,`
Server -> 右鍵 -> Properties
`),i(Vt.$$.fragment,ie),Xa=d(ie),i(Kt.$$.fragment,ie),ie.forEach(t),$s=d(e),_r=Yi(e,!1),vr=d(e),He=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(He)!=="svelte-u4b2z"&&(He.innerHTML=Dm),gs=d(e),C=h(e,"P",{});var w=k(C);Za=f(w,`若題目有要求用 AD 使用者帳號驗證，但 VPN 不是安裝在 Domain Contoller 上的時候就會需要 RADIUS
在 Domain Controller 上先安裝 Network Policy and Access Services
`),i(qt.$$.fragment,w),za=f(w,`
安裝後 -> 點選 Tools -> Network Policy Server -> NPS (Local)
確認選項是 VPN Connections 後，點選 Configure VPN or Dial-Up
`),i(jt.$$.fragment,w),Ya=f(w,`
選擇 Virtual Private Network (VPN) Connections
`),i(Qt.$$.fragment,w),ei=f(w,`
Next -> Add…
`),i(Xt.$$.fragment,w),ti=f(w,`
將被驗證方的資料輸入完後按 Verify…
`),i(Zt.$$.fragment,w),ni=f(w,`
再按 Resolve，系統會確定 Client 端是否在線，若在線下面的 IP address 會顯示
`),i(zt.$$.fragment,w),ri=f(w,`
將三個選項都確認無誤後再下一步
`),i(Yt.$$.fragment,w),si=f(w,`
接著設定可以使用 VPN 的群組
`),i(en.$$.fragment,w),ai=f(w,`
IP Fliter 可依需求設定，若無需設定直接 Next
`),i(tn.$$.fragment,w),ii=f(w,`
僅勾選 Strongest encryption
`),i(nn.$$.fragment,w),mi=f(w,`
Realm Name 可直接跳過
`),i(rn.$$.fragment,w),pi=f(w,`
RADIUS Server 端設定完成，轉到 Client 端
Server Manager -> Tools -> Routing and Remote Access -> 右鍵 Server -> Properties -> Security
將 Authentication provider 和 Accounting provider 都設為 RADIUS Accounting -> Configure…
`),i(sn.$$.fragment,w),oi=f(w,`
按 New…
`),i(an.$$.fragment,w),li=f(w,`
Server name 輸入 Server 端的 IP Address，Shared secret 輸入在 Server 端設定好的密碼，Accounting provider 的 Configure 也照樣設定
`),i(mn.$$.fragment,w),$i=f(w,`
按 OK 後就設定完成
`),i(pn.$$.fragment,w),w.forEach(t),fs=d(e),Te=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(Te)!=="svelte-mskw9o"&&(Te.innerHTML=Lm),us=d(e),M=h(e,"P",{});var b=k(M);gi=f(b,`在 Windows Server 端的操作：打開 MMC -> 導入 Certificates -> Computer Account -> Local Computer
`),i(on.$$.fragment,b),fi=f(b,`
Trusted Root Certificates Authorities -> Certificates -> 選擇要讓外部電腦驗證的根憑證 -> 右鍵 All Tasks -> Export…
`),i(ln.$$.fragment,b),ui=f(b,`
檔案格式選 DER 或 Base-64 則一即可
`),i($n.$$.fragment,b),di=f(b,`
在外部電腦端的操作：打開 MMC -> 導入 Ceritficates -> Computer Account -> Local Computer -> Trusted Root Certificates Authorities -> Ceritficates -> 右鍵 All Tasks -> Import…
`),i(gn.$$.fragment,b),ci=f(b,`
選取剛剛自己導出的根憑證
`),i(fn.$$.fragment,b),hi=f(b,`
選擇 Place all ceritificates in the following store，並確認憑證倉庫為「Trusted Root Certificates Authorities」
`),i(un.$$.fragment,b),_i=f(b,`
最後按下 Finish，即安裝完成根憑證，瀏覽內部網站時不會再跳出憑證錯誤等訊息
`),i(dn.$$.fragment,b),b.forEach(t),ds=d(e),ye=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(ye)!=="svelte-1s5aqjk"&&(ye.innerHTML=bm),cs=d(e),cn=h(e,"P",{});var Zi=k(cn);vi=f(Zi,`打開 AD AC，到 domain (local) -> System -> Password Settings Container -> 右鍵 Password Settings
`),i(hn.$$.fragment,Zi),Zi.forEach(t),hs=d(e),Cr=Yi(e,!1),Sr=d(e),R=h(e,"P",{});var L=k(R);i(_n.$$.fragment,L),Ci=f(L,`
回到 Users -> 選擇自己要套用設定的使用者或群組 -> 右鍵 Properties -> Password Settings -> Assign…
`),i(vn.$$.fragment,L),Si=f(L,`
選 Advenced…
`),i(Cn.$$.fragment,L),wi=f(L,`
選 Find Now -> 選擇自己建立的規則
`),i(Sn.$$.fragment,L),ki=f(L,`
若新輸入的密碼不到 8 個字：
`),i(wn.$$.fragment,L),Pi=d(L),i(kn.$$.fragment,L),Ai=f(L,`
若有至少 8 個字：
`),i(Pn.$$.fragment,L),Hi=d(L),i(An.$$.fragment,L),L.forEach(t),_s=d(e),Re=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(Re)!=="svelte-1oy4yin"&&(Re.innerHTML=Em),vs=d(e),T=h(e,"P",{});var D=k(T);Ti=f(D,`安裝服務：
`),i(Hn.$$.fragment,D),yi=d(D),i(Tn.$$.fragment,D),Ri=d(D),i(yn.$$.fragment,D),xi=f(D,`
使用 Internet Explorer 可瀏覽其 RDWeb (在沒有 SSL 簽證的狀況下)：
`),i(Rn.$$.fragment,D),Mi=d(D),i(xn.$$.fragment,D),Ni=f(D,`
也可透過網域使用者直接遠端 Server：
`),i(Mn.$$.fragment,D),Di=d(D),i(Nn.$$.fragment,D),Li=f(D,`
若簽證了可使用 Edge 正常預覽：
`),i(Dn.$$.fragment,D),D.forEach(t),Cs=d(e),xe=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(xe)!=="svelte-1y6z8ga"&&(xe.innerHTML=Fm),Ss=d(e),Ln=h(e,"P",{"data-svelte-h":!0}),_(Ln)!=="svelte-rfg8xo"&&(Ln.innerHTML=Im),ws=d(e),Me=h(e,"H2",{id:!0,"data-svelte-h":!0}),_(Me)!=="svelte-wp48zq"&&(Me.innerHTML=Om),ks=d(e),Q=h(e,"P",{});var Yn=k(Q);bi=f(Yn,`先到已安裝 Main CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 Properties
`),i(bn.$$.fragment,Yn),Ei=f(Yn,`
點選 Extensions -> Select extension 選擇 CDP -> 點選 http 開頭的項目 -> 勾選第三跟第四個選項
`),i(En.$$.fragment,Yn),Fi=f(Yn,`
Select extension 換選擇 AIA -> 點選 http 開頭的項目 -> 勾選第一個選項 -> 點擊 Apply
`),i(Fn.$$.fragment,Yn),Yn.forEach(t),Ps=d(e),ae=h(e,"P",{});var Tr=k(ae);Ii=f(Tr,`接著轉到需要安裝 Sub CA 的 Server，打開 Certification Authority -> 點選 Server 後右鍵 All Tasks -> Renew CA Certificate…
`),i(In.$$.fragment,Tr),Oi=f(Tr,`
確認 Computer Name 跟 Parent CA 都正確後，點擊 OK
`),i(On.$$.fragment,Tr),Tr.forEach(t),As=d(e),X=h(e,"P",{});var er=k(X);Wi=f(er,`回到 Main CA Server -> Pending Requests -> Issue 從 Sub CA 發起的請求
`),i(Wn.$$.fragment,er),Gi=f(er,`
Issued Certidicates -> 選擇剛剛 Issue 的 CA -> Details -> Copy to File…
`),i(Gn.$$.fragment,er),Bi=f(er,`
選擇 DER encoded 的 X.509 -> Next -> 儲存於自己指定的位置 -> 複製到 Sub CA Server
`),i(Bn.$$.fragment,er),er.forEach(t),Hs=d(e),z=h(e,"P",{});var cr=k(z);Ui=f(cr,`再回到 Sub CA Server，點選 Server 後右鍵 All Tasks -> Install CA Certificate…
`),i(Un.$$.fragment,cr),Ji=f(cr,`
右下角選擇 X.509 類型的 CA -> 選擇剛剛簽好的 CA
`),i(Jn.$$.fragment,cr),Vi=f(cr,`
安裝好後，Sub CA Server 圖標會有綠色勾勾，代表正常運作`),cr.forEach(t),Ts=d(e),Ne=h(e,"H3",{id:!0,"data-svelte-h":!0}),_(Ne)!=="svelte-1k9tv90"&&(Ne.innerHTML=Wm),ys=d(e),Y=h(e,"P",{});var hr=k(Y);i(Vn.$$.fragment,hr),Ki=f(hr,`
此錯誤為無法從 Root CA 的 CRL 發布點下載撤銷憑證名單，可先嘗試透過在 hosts 內增加對 Root CA Server 的記錄 (可能需要執行 `),dr=h(hr,"CODE",{"data-svelte-h":!0}),_(dr)!=="svelte-14xu26v"&&(dr.textContent=Gm),qi=f(hr,` 保證系統會透過 hosts 內的記錄找尋)
`),i(Kn.$$.fragment,hr),hr.forEach(t),Rs=d(e),qn=h(e,"P",{"data-svelte-h":!0}),_(qn)!=="svelte-vx6mvu"&&(qn.textContent=Bm),xs=d(e),wr=Yi(e,!1),kr=Jm(),this.h()},h(){P(A,"id","gpo-相關安全強化"),P(O,"id","禁止存取控制台設定"),P(me,"id","限制或禁止使用者使用特定應用程式"),P(pe,"id","設定在-logon-ui-看不到上個登入的使用者"),P(oe,"id","讓-windows-server-也能掛載-debian-smbd"),P(le,"id","gpo-個別使用者套用規則"),P($e,"id","禁止使用-windows-update"),P(ge,"id","dns"),P(fe,"id","通知-notify"),P(ue,"id","start-of-authority-record-soa"),P(de,"id","允許-icmp-協議"),P(ce,"id","讓網域內電腦自動信任-ca-憑證"),P(he,"id","允許自動信任設定"),P(_e,"id","設定自動信任的電腦"),P(ve,"id","共享資料夾安全設定-file-server-resource-manager"),P(Ce,"id","限制共享資料夾空間"),P(Se,"id","限制共享資料夾存放檔案類型"),P(we,"id","更改-remote-desktop-的-tcp-port-登錄檔修改"),P(ke,"id","vpn-設定"),P(Pe,"id","vpn-安全強化-sstp-設定"),P(Ae,"id","有-web-server--https"),_r.a=vr,P(He,"id","radius-驗證伺服器"),P(Te,"id","讓外部電腦信任根憑證-root-ca"),P(ye,"id","對單個使用者或群組做密碼限制-ad-ac"),Cr.a=Sr,P(Re,"id","遠端桌面服務-remote-desktop-service"),P(xe,"id","啟用-ip-forwarding-regedit"),P(Me,"id","次級憑證的簽證及安裝-sub-ca"),P(Ne,"id","error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline"),wr.a=kr},m(e,r){s(e,A,r),s(e,Z,r),s(e,O,r),s(e,W,r),s(e,G,r),n(G,Ns),n(G,nr),n(G,Ds),m(be,G,null),s(e,yr,r),s(e,me,r),s(e,Rr,r),s(e,J,r),n(J,Ls),m(Ee,J,null),n(J,bs),n(J,rr),n(J,Es),m(Fe,J,null),s(e,xr,r),s(e,pe,r),s(e,Mr,r),s(e,ne,r),n(ne,Fs),n(ne,sr),n(ne,Is),m(Ie,ne,null),s(e,Nr,r),s(e,oe,r),s(e,Dr,r),s(e,re,r),n(re,Os),n(re,ar),n(re,Ws),m(Oe,re,null),s(e,Lr,r),s(e,le,r),s(e,br,r),s(e,We,r),n(We,Gs),m(Ge,We,null),s(e,Er,r),s(e,$e,r),s(e,Fr,r),s(e,V,r),n(V,Bs),n(V,ir),n(V,Us),m(Be,V,null),n(V,Js),m(Ue,V,null),s(e,Ir,r),s(e,ge,r),s(e,Or,r),s(e,fe,r),s(e,Wr,r),s(e,se,r),n(se,Vs),m(Je,se,null),n(se,Ks),m(Ve,se,null),s(e,Gr,r),s(e,ue,r),s(e,Br,r),s(e,Ke,r),m(qe,Ke,null),n(Ke,qs),s(e,Ur,r),s(e,de,r),s(e,Jr,r),s(e,H,r),n(H,js),m(je,H,null),n(H,Qs),m(Qe,H,null),n(H,Xs),m(Xe,H,null),n(H,Zs),m(Ze,H,null),n(H,zs),m(ze,H,null),n(H,Ys),m(Ye,H,null),n(H,ea),m(et,H,null),n(H,ta),m(tt,H,null),n(H,na),m(nt,H,null),n(H,ra),m(rt,H,null),s(e,Vr,r),s(e,ce,r),s(e,Kr,r),s(e,he,r),s(e,qr,r),s(e,K,r),n(K,sa),m(st,K,null),n(K,aa),n(K,mr),n(K,ia),m(at,K,null),s(e,jr,r),s(e,_e,r),s(e,Qr,r),s(e,N,r),n(N,ma),m(it,N,null),n(N,pa),m(mt,N,null),n(N,oa),m(pt,N,null),n(N,la),m(ot,N,null),n(N,$a),n(N,pr),n(N,ga),m(lt,N,null),s(e,Xr,r),s(e,ve,r),s(e,Zr,r),s(e,$t,r),n($t,fa),m(gt,$t,null),s(e,zr,r),s(e,Ce,r),s(e,Yr,r),s(e,q,r),n(q,ua),m(ft,q,null),n(q,da),m(ut,q,null),n(q,ca),m(dt,q,null),s(e,es,r),s(e,Se,r),s(e,ts,r),s(e,B,r),n(B,or),n(B,ha),m(ct,B,null),n(B,_a),m(ht,B,null),n(B,va),m(_t,B,null),s(e,ns,r),s(e,E,r),n(E,lr),n(E,Ca),m(vt,E,null),n(E,Sa),m(Ct,E,null),n(E,wa),n(E,$r),n(E,ka),m(St,E,null),s(e,rs,r),s(e,U,r),n(U,gr),n(U,Pa),m(wt,U,null),n(U,Aa),m(kt,U,null),n(U,Ha),m(Pt,U,null),s(e,ss,r),s(e,we,r),s(e,as,r),s(e,j,r),n(j,Ta),n(j,fr),n(j,ya),n(j,ur),n(j,Ra),m(At,j,null),s(e,is,r),s(e,ke,r),s(e,ms,r),s(e,v,r),n(v,xa),m(Ht,v,null),n(v,Ma),m(Tt,v,null),n(v,Na),m(yt,v,null),n(v,Da),m(Rt,v,null),n(v,La),m(xt,v,null),n(v,ba),m(Mt,v,null),n(v,Ea),m(Nt,v,null),n(v,Fa),m(Dt,v,null),n(v,Ia),m(Lt,v,null),n(v,Oa),m(bt,v,null),n(v,Wa),m(Et,v,null),n(v,Ga),m(Ft,v,null),n(v,Ba),m(It,v,null),n(v,Ua),m(Ot,v,null),n(v,Ja),m(Wt,v,null),n(v,Va),m(Gt,v,null),n(v,Ka),m(Bt,v,null),s(e,ps,r),s(e,Pe,r),s(e,os,r),s(e,Ae,r),s(e,ls,r),s(e,F,r),n(F,qa),m(Ut,F,null),n(F,ja),m(Jt,F,null),n(F,Qa),m(Vt,F,null),n(F,Xa),m(Kt,F,null),s(e,$s,r),_r.m(qm,e,r),s(e,vr,r),s(e,He,r),s(e,gs,r),s(e,C,r),n(C,Za),m(qt,C,null),n(C,za),m(jt,C,null),n(C,Ya),m(Qt,C,null),n(C,ei),m(Xt,C,null),n(C,ti),m(Zt,C,null),n(C,ni),m(zt,C,null),n(C,ri),m(Yt,C,null),n(C,si),m(en,C,null),n(C,ai),m(tn,C,null),n(C,ii),m(nn,C,null),n(C,mi),m(rn,C,null),n(C,pi),m(sn,C,null),n(C,oi),m(an,C,null),n(C,li),m(mn,C,null),n(C,$i),m(pn,C,null),s(e,fs,r),s(e,Te,r),s(e,us,r),s(e,M,r),n(M,gi),m(on,M,null),n(M,fi),m(ln,M,null),n(M,ui),m($n,M,null),n(M,di),m(gn,M,null),n(M,ci),m(fn,M,null),n(M,hi),m(un,M,null),n(M,_i),m(dn,M,null),s(e,ds,r),s(e,ye,r),s(e,cs,r),s(e,cn,r),n(cn,vi),m(hn,cn,null),s(e,hs,r),Cr.m(jm,e,r),s(e,Sr,r),s(e,R,r),m(_n,R,null),n(R,Ci),m(vn,R,null),n(R,Si),m(Cn,R,null),n(R,wi),m(Sn,R,null),n(R,ki),m(wn,R,null),n(R,Pi),m(kn,R,null),n(R,Ai),m(Pn,R,null),n(R,Hi),m(An,R,null),s(e,_s,r),s(e,Re,r),s(e,vs,r),s(e,T,r),n(T,Ti),m(Hn,T,null),n(T,yi),m(Tn,T,null),n(T,Ri),m(yn,T,null),n(T,xi),m(Rn,T,null),n(T,Mi),m(xn,T,null),n(T,Ni),m(Mn,T,null),n(T,Di),m(Nn,T,null),n(T,Li),m(Dn,T,null),s(e,Cs,r),s(e,xe,r),s(e,Ss,r),s(e,Ln,r),s(e,ws,r),s(e,Me,r),s(e,ks,r),s(e,Q,r),n(Q,bi),m(bn,Q,null),n(Q,Ei),m(En,Q,null),n(Q,Fi),m(Fn,Q,null),s(e,Ps,r),s(e,ae,r),n(ae,Ii),m(In,ae,null),n(ae,Oi),m(On,ae,null),s(e,As,r),s(e,X,r),n(X,Wi),m(Wn,X,null),n(X,Gi),m(Gn,X,null),n(X,Bi),m(Bn,X,null),s(e,Hs,r),s(e,z,r),n(z,Ui),m(Un,z,null),n(z,Ji),m(Jn,z,null),n(z,Vi),s(e,Ts,r),s(e,Ne,r),s(e,ys,r),s(e,Y,r),m(Vn,Y,null),n(Y,Ki),n(Y,dr),n(Y,qi),m(Kn,Y,null),s(e,Rs,r),s(e,qn,r),s(e,xs,r),wr.m(Qm,e,r),s(e,kr,r),Ms=!0},p:Zm,i(e){Ms||(p(be.$$.fragment,e),p(Ee.$$.fragment,e),p(Fe.$$.fragment,e),p(Ie.$$.fragment,e),p(Oe.$$.fragment,e),p(Ge.$$.fragment,e),p(Be.$$.fragment,e),p(Ue.$$.fragment,e),p(Je.$$.fragment,e),p(Ve.$$.fragment,e),p(qe.$$.fragment,e),p(je.$$.fragment,e),p(Qe.$$.fragment,e),p(Xe.$$.fragment,e),p(Ze.$$.fragment,e),p(ze.$$.fragment,e),p(Ye.$$.fragment,e),p(et.$$.fragment,e),p(tt.$$.fragment,e),p(nt.$$.fragment,e),p(rt.$$.fragment,e),p(st.$$.fragment,e),p(at.$$.fragment,e),p(it.$$.fragment,e),p(mt.$$.fragment,e),p(pt.$$.fragment,e),p(ot.$$.fragment,e),p(lt.$$.fragment,e),p(gt.$$.fragment,e),p(ft.$$.fragment,e),p(ut.$$.fragment,e),p(dt.$$.fragment,e),p(ct.$$.fragment,e),p(ht.$$.fragment,e),p(_t.$$.fragment,e),p(vt.$$.fragment,e),p(Ct.$$.fragment,e),p(St.$$.fragment,e),p(wt.$$.fragment,e),p(kt.$$.fragment,e),p(Pt.$$.fragment,e),p(At.$$.fragment,e),p(Ht.$$.fragment,e),p(Tt.$$.fragment,e),p(yt.$$.fragment,e),p(Rt.$$.fragment,e),p(xt.$$.fragment,e),p(Mt.$$.fragment,e),p(Nt.$$.fragment,e),p(Dt.$$.fragment,e),p(Lt.$$.fragment,e),p(bt.$$.fragment,e),p(Et.$$.fragment,e),p(Ft.$$.fragment,e),p(It.$$.fragment,e),p(Ot.$$.fragment,e),p(Wt.$$.fragment,e),p(Gt.$$.fragment,e),p(Bt.$$.fragment,e),p(Ut.$$.fragment,e),p(Jt.$$.fragment,e),p(Vt.$$.fragment,e),p(Kt.$$.fragment,e),p(qt.$$.fragment,e),p(jt.$$.fragment,e),p(Qt.$$.fragment,e),p(Xt.$$.fragment,e),p(Zt.$$.fragment,e),p(zt.$$.fragment,e),p(Yt.$$.fragment,e),p(en.$$.fragment,e),p(tn.$$.fragment,e),p(nn.$$.fragment,e),p(rn.$$.fragment,e),p(sn.$$.fragment,e),p(an.$$.fragment,e),p(mn.$$.fragment,e),p(pn.$$.fragment,e),p(on.$$.fragment,e),p(ln.$$.fragment,e),p($n.$$.fragment,e),p(gn.$$.fragment,e),p(fn.$$.fragment,e),p(un.$$.fragment,e),p(dn.$$.fragment,e),p(hn.$$.fragment,e),p(_n.$$.fragment,e),p(vn.$$.fragment,e),p(Cn.$$.fragment,e),p(Sn.$$.fragment,e),p(wn.$$.fragment,e),p(kn.$$.fragment,e),p(Pn.$$.fragment,e),p(An.$$.fragment,e),p(Hn.$$.fragment,e),p(Tn.$$.fragment,e),p(yn.$$.fragment,e),p(Rn.$$.fragment,e),p(xn.$$.fragment,e),p(Mn.$$.fragment,e),p(Nn.$$.fragment,e),p(Dn.$$.fragment,e),p(bn.$$.fragment,e),p(En.$$.fragment,e),p(Fn.$$.fragment,e),p(In.$$.fragment,e),p(On.$$.fragment,e),p(Wn.$$.fragment,e),p(Gn.$$.fragment,e),p(Bn.$$.fragment,e),p(Un.$$.fragment,e),p(Jn.$$.fragment,e),p(Vn.$$.fragment,e),p(Kn.$$.fragment,e),Ms=!0)},o(e){o(be.$$.fragment,e),o(Ee.$$.fragment,e),o(Fe.$$.fragment,e),o(Ie.$$.fragment,e),o(Oe.$$.fragment,e),o(Ge.$$.fragment,e),o(Be.$$.fragment,e),o(Ue.$$.fragment,e),o(Je.$$.fragment,e),o(Ve.$$.fragment,e),o(qe.$$.fragment,e),o(je.$$.fragment,e),o(Qe.$$.fragment,e),o(Xe.$$.fragment,e),o(Ze.$$.fragment,e),o(ze.$$.fragment,e),o(Ye.$$.fragment,e),o(et.$$.fragment,e),o(tt.$$.fragment,e),o(nt.$$.fragment,e),o(rt.$$.fragment,e),o(st.$$.fragment,e),o(at.$$.fragment,e),o(it.$$.fragment,e),o(mt.$$.fragment,e),o(pt.$$.fragment,e),o(ot.$$.fragment,e),o(lt.$$.fragment,e),o(gt.$$.fragment,e),o(ft.$$.fragment,e),o(ut.$$.fragment,e),o(dt.$$.fragment,e),o(ct.$$.fragment,e),o(ht.$$.fragment,e),o(_t.$$.fragment,e),o(vt.$$.fragment,e),o(Ct.$$.fragment,e),o(St.$$.fragment,e),o(wt.$$.fragment,e),o(kt.$$.fragment,e),o(Pt.$$.fragment,e),o(At.$$.fragment,e),o(Ht.$$.fragment,e),o(Tt.$$.fragment,e),o(yt.$$.fragment,e),o(Rt.$$.fragment,e),o(xt.$$.fragment,e),o(Mt.$$.fragment,e),o(Nt.$$.fragment,e),o(Dt.$$.fragment,e),o(Lt.$$.fragment,e),o(bt.$$.fragment,e),o(Et.$$.fragment,e),o(Ft.$$.fragment,e),o(It.$$.fragment,e),o(Ot.$$.fragment,e),o(Wt.$$.fragment,e),o(Gt.$$.fragment,e),o(Bt.$$.fragment,e),o(Ut.$$.fragment,e),o(Jt.$$.fragment,e),o(Vt.$$.fragment,e),o(Kt.$$.fragment,e),o(qt.$$.fragment,e),o(jt.$$.fragment,e),o(Qt.$$.fragment,e),o(Xt.$$.fragment,e),o(Zt.$$.fragment,e),o(zt.$$.fragment,e),o(Yt.$$.fragment,e),o(en.$$.fragment,e),o(tn.$$.fragment,e),o(nn.$$.fragment,e),o(rn.$$.fragment,e),o(sn.$$.fragment,e),o(an.$$.fragment,e),o(mn.$$.fragment,e),o(pn.$$.fragment,e),o(on.$$.fragment,e),o(ln.$$.fragment,e),o($n.$$.fragment,e),o(gn.$$.fragment,e),o(fn.$$.fragment,e),o(un.$$.fragment,e),o(dn.$$.fragment,e),o(hn.$$.fragment,e),o(_n.$$.fragment,e),o(vn.$$.fragment,e),o(Cn.$$.fragment,e),o(Sn.$$.fragment,e),o(wn.$$.fragment,e),o(kn.$$.fragment,e),o(Pn.$$.fragment,e),o(An.$$.fragment,e),o(Hn.$$.fragment,e),o(Tn.$$.fragment,e),o(yn.$$.fragment,e),o(Rn.$$.fragment,e),o(xn.$$.fragment,e),o(Mn.$$.fragment,e),o(Nn.$$.fragment,e),o(Dn.$$.fragment,e),o(bn.$$.fragment,e),o(En.$$.fragment,e),o(Fn.$$.fragment,e),o(In.$$.fragment,e),o(On.$$.fragment,e),o(Wn.$$.fragment,e),o(Gn.$$.fragment,e),o(Bn.$$.fragment,e),o(Un.$$.fragment,e),o(Jn.$$.fragment,e),o(Vn.$$.fragment,e),o(Kn.$$.fragment,e),Ms=!1},d(e){e&&(t(A),t(Z),t(O),t(W),t(G),t(yr),t(me),t(Rr),t(J),t(xr),t(pe),t(Mr),t(ne),t(Nr),t(oe),t(Dr),t(re),t(Lr),t(le),t(br),t(We),t(Er),t($e),t(Fr),t(V),t(Ir),t(ge),t(Or),t(fe),t(Wr),t(se),t(Gr),t(ue),t(Br),t(Ke),t(Ur),t(de),t(Jr),t(H),t(Vr),t(ce),t(Kr),t(he),t(qr),t(K),t(jr),t(_e),t(Qr),t(N),t(Xr),t(ve),t(Zr),t($t),t(zr),t(Ce),t(Yr),t(q),t(es),t(Se),t(ts),t(B),t(ns),t(E),t(rs),t(U),t(ss),t(we),t(as),t(j),t(is),t(ke),t(ms),t(v),t(ps),t(Pe),t(os),t(Ae),t(ls),t(F),t($s),_r.d(),t(vr),t(He),t(gs),t(C),t(fs),t(Te),t(us),t(M),t(ds),t(ye),t(cs),t(cn),t(hs),Cr.d(),t(Sr),t(R),t(_s),t(Re),t(vs),t(T),t(Cs),t(xe),t(Ss),t(Ln),t(ws),t(Me),t(ks),t(Q),t(Ps),t(ae),t(As),t(X),t(Hs),t(z),t(Ts),t(Ne),t(ys),t(Y),t(Rs),t(qn),t(xs),t(kr),wr.d()),l(be),l(Ee),l(Fe),l(Ie),l(Oe),l(Ge),l(Be),l(Ue),l(Je),l(Ve),l(qe),l(je),l(Qe),l(Xe),l(Ze),l(ze),l(Ye),l(et),l(tt),l(nt),l(rt),l(st),l(at),l(it),l(mt),l(pt),l(ot),l(lt),l(gt),l(ft),l(ut),l(dt),l(ct),l(ht),l(_t),l(vt),l(Ct),l(St),l(wt),l(kt),l(Pt),l(At),l(Ht),l(Tt),l(yt),l(Rt),l(xt),l(Mt),l(Nt),l(Dt),l(Lt),l(bt),l(Et),l(Ft),l(It),l(Ot),l(Wt),l(Gt),l(Bt),l(Ut),l(Jt),l(Vt),l(Kt),l(qt),l(jt),l(Qt),l(Xt),l(Zt),l(zt),l(Yt),l(en),l(tn),l(nn),l(rn),l(sn),l(an),l(mn),l(pn),l(on),l(ln),l($n),l(gn),l(fn),l(un),l(dn),l(hn),l(_n),l(vn),l(Cn),l(Sn),l(wn),l(kn),l(Pn),l(An),l(Hn),l(Tn),l(yn),l(Rn),l(xn),l(Mn),l(Nn),l(Dn),l(bn),l(En),l(Fn),l(In),l(On),l(Wn),l(Gn),l(Bn),l(Un),l(Jn),l(Vn),l(Kn)}}}function rp(tr){let A,te;const Z=[tr[0],Km];let O={$$slots:{default:[np]},$$scope:{ctx:tr}};for(let x=0;x<Z.length;x+=1)O=em(O,Z[x]);return A=new ep({props:O}),{c(){a(A.$$.fragment)},l(x){i(A.$$.fragment,x)},m(x,W){m(A,x,W),te=!0},p(x,[W]){const G=W&1?tp(Z,[W&1&&Vm(x[0]),W&0&&Vm(Km)]):{};W&2&&(G.$$scope={dirty:W,ctx:x}),A.$set(G)},i(x){te||(p(A.$$.fragment,x),te=!0)},o(x){o(A.$$.fragment,x),te=!1},d(x){l(A,x)}}}const Km={title:"Windows Server",summary:"Hardening write up",image:"/winsrv.jpg",alt:"Shellkai Huang",created:"2023-02-06T00:00:00.000Z",updated:"2024-09-22T00:00:00.000Z",tags:["Windows","OS"],images:[],slug:"/winsrv/+page.svelte.md",path:"/winsrv",toc:[{depth:2,slug:"gpo-相關安全強化",title:"GPO 相關安全強化"},{depth:3,slug:"禁止存取控制台設定",title:"禁止存取控制台設定"},{depth:3,slug:"限制或禁止使用者使用特定應用程式",title:"限制或禁止使用者使用特定應用程式"},{depth:3,slug:"設定在-logon-ui-看不到上個登入的使用者",title:"設定在 Logon UI 看不到上個登入的使用者"},{depth:3,slug:"讓-windows-server-也能掛載-debian-smbd",title:"讓 Windows Server 也能掛載 Debian SMBD"},{depth:3,slug:"gpo-個別使用者套用規則",title:"GPO 個別使用者套用規則"},{depth:3,slug:"禁止使用-windows-update",title:"禁止使用 Windows Update"},{depth:2,slug:"dns",title:"DNS"},{depth:4,slug:"通知-notify",title:"通知 (Notify)"},{depth:4,slug:"start-of-authority-record-soa",title:"Start of Authority Record (SOA)"},{depth:2,slug:"允許-icmp-協議",title:"允許 ICMP 協議"},{depth:2,slug:"讓網域內電腦自動信任-ca-憑證",title:"讓網域內電腦自動信任 CA 憑證"},{depth:3,slug:"允許自動信任設定",title:"允許自動信任設定"},{depth:3,slug:"設定自動信任的電腦",title:"設定自動信任的電腦"},{depth:2,slug:"共享資料夾安全設定-file-server-resource-manager",title:"共享資料夾安全設定 (File Server Resource Manager)"},{depth:3,slug:"限制共享資料夾空間",title:"限制共享資料夾空間"},{depth:3,slug:"限制共享資料夾存放檔案類型",title:"限制共享資料夾存放檔案類型"},{depth:2,slug:"更改-remote-desktop-的-tcp-port-登錄檔修改",title:"更改 Remote Desktop 的 TCP Port (登錄檔修改)"},{depth:2,slug:"vpn-設定",title:"VPN 設定"},{depth:3,slug:"vpn-安全強化-sstp-設定",title:"VPN 安全強化 (SSTP) 設定"},{depth:4,slug:"有-web-server--https",title:"有 Web Server + HTTPS"},{depth:3,slug:"radius-驗證伺服器",title:"RADIUS 驗證伺服器"},{depth:2,slug:"讓外部電腦信任根憑證-root-ca",title:"讓外部電腦信任根憑證 (Root CA)"},{depth:2,slug:"對單個使用者或群組做密碼限制-ad-ac",title:"對單個使用者或群組做密碼限制 (AD AC)"},{depth:2,slug:"遠端桌面服務-remote-desktop-service",title:"遠端桌面服務 (Remote Desktop Service)"},{depth:2,slug:"啟用-ip-forwarding-regedit",title:"啟用 IP Forwarding (Regedit)"},{depth:2,slug:"次級憑證的簽證及安裝-sub-ca",title:"次級憑證的簽證及安裝 (Sub CA)"},{depth:3,slug:"error-the-revocation-function-was-unable-to-check-revocation-because-the-revocation-server-was-offline",title:"error: The revocation function was unable to check revocation because the revocation server was offline"}]};function sp(tr,A,te){return tr.$$set=Z=>{te(0,A=em(em({},A),Um(Z)))},A=Um(A),[A]}class op extends zm{constructor(A){super(),Ym(this,A,sp,rp,Xm,{})}}export{op as component};
