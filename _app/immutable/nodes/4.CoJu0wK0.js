import{s as Ci,f as Ki,u as Gi,g as Vi,h as Ui,a as as,e as vi,n as Qi}from"../chunks/scheduler.Dcat6gDS.js";import{S as xi,i as ki,e as o,c as r,a as y,d as n,u as b,g as l,h as i,n as u,o as f,k as g,l as $,m as v,p as w,s as a,t as m,H,q as d,f as s,b as c,r as L}from"../chunks/index.C3VxCKWp.js";import{P as Xi,g as Zi,a as wi}from"../chunks/post_layout.CF0splBa.js";import{I as x}from"../chunks/footer.CYBsMadM.js";function Yi(E){let h,T,k;const p=E[1].default,C=Ki(p,E,E[0],null);return{c(){h=o("div"),T=o("table"),C&&C.c(),this.h()},l(_){h=r(_,"DIV",{class:!0});var S=y(h);T=r(S,"TABLE",{class:!0});var I=y(T);C&&C.l(I),I.forEach(n),S.forEach(n),this.h()},h(){b(T,"class","table w-full"),b(h,"class","overflow-x-auto mb-4")},m(_,S){l(_,h,S),i(h,T),C&&C.m(T,null),k=!0},p(_,[S]){C&&C.p&&(!k||S&1)&&Gi(C,p,_,_[0],k?Ui(p,_[0],S,null):Vi(_[0]),null)},i(_){k||(u(C,_),k=!0)},o(_){f(C,_),k=!1},d(_){_&&n(h),C&&C.d(_)}}}function eo(E,h,T){let{$$slots:k={},$$scope:p}=h;return E.$$set=C=>{"$$scope"in C&&T(0,p=C.$$scope)},[p,k]}class to extends xi{constructor(h){super(),ki(this,h,eo,Yi,Ci,{})}}function no(E){let h,T="<tr><th>參數</th> <th>說明</th> <th>是否立即採用</th></tr>",k,p,C="<tr><td>/</td> <td>最長路徑</td> <td>否</td></tr> <tr><td>= /</td> <td>精準匹配</td> <td>是</td></tr> <tr><td>^~ /</td> <td>類似最長路徑，但會馬上採用</td> <td>是</td></tr> <tr><td>~ /</td> <td>正規表示法，區分大小寫</td> <td>是</td></tr> <tr><td>~* /</td> <td>正規表示法，不區分大小寫</td> <td>是</td></tr>";return{c(){h=o("thead"),h.innerHTML=T,k=a(),p=o("tbody"),p.innerHTML=C},l(_){h=r(_,"THEAD",{"data-svelte-h":!0}),d(h)!=="svelte-10be3iz"&&(h.innerHTML=T),k=s(_),p=r(_,"TBODY",{"data-svelte-h":!0}),d(p)!=="svelte-1hqfv7t"&&(p.innerHTML=C)},m(_,S){l(_,h,S),l(_,k,S),l(_,p,S)},p:Qi,d(_){_&&(n(h),n(k),n(p))}}}function lo(E){let h,T='<a href="#windows-server-簽署-enterprise-ca">Windows Server 簽署 (Enterprise CA)</a>',k,p,C,_,S,I,Zl,ve,Yl,we,ea,_e,ta,Ce,na,xe,la,ke,aa,bt,ss="*",sa,be,ia,He,oa,Ht,is="使用 Chrome Engine 的瀏覽器會出現安全性錯誤",ra,Lt,os="http://[hostname].[domain]/certsrv",pa,Le,da,Te,ma,Se,ca,ye,ha,Fe,ua,Ee,fa,Me,ga,Pe,$a,Ne,va,De,Wn,K,rs='<a href="#debian-簽證使用-windows-server">Debian (簽證使用 Windows Server)</a>',Jn,Ae,ps=`安裝 OpenSSL：<code>apt install openssl</code> <strong>生成帶 SAN 值 CA 憑證的兩種方式
方式 1：</strong>
一行指令生成帶 SAN 值 CA 請求 (CR)：`,Kn,Qt,bi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>openssl req -new -newkey rsa:2048 -nodes -keyout [keyname].key -out [csrname].csr -subj "/CN=[domainname]/" -addext "subjectAltName = DNS:[dnsname].[domainname],DNS:＊.[domain],DNS:[dnsname]"</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Xt,qe,ds=`<strong>方式 2：</strong>
建立一個設定 CA 的資料夾並更換目前路徑：
<code>mkdir /tmp/CA/</code> <code>cd /tmp/CA</code>
生成包含 SAN 的 CA 設定檔並編輯：
<code>touch san.conf</code> <code>vim san.conf</code>
在 san.conf 內寫入以下資料：`,Gn,Zt,Hi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>[ req ]
default_bits       = 2048
distinguished_name = req_distinguished_name
req_extensions     = req_ext
[ req_distinguished_name ]
commonName                 = Common Name (e.g. server FQDN or YOUR name)
[alt_names]
DNS.1   = [ur_dns_server.1]
DNS.2   = [ur_dns_server.2]</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Yt,Oe,ms=`儲存後用 OpenSSL 建立 CA 憑證請求：
<code>openssl req -out [urcsrname].csr -newkey rsa:2048 -nodes -keyout [urkeyname].key -config san.cnf</code>
將 key 放至 apache2 資料夾內：<code>mv [urkeyname].key /etc/apache2</code>
將憑證請求放至與 Windows Server 端的共享資料夾內：<code>mv [urcsrname].csr /share</code>
在 Windows Server 操作簽署完憑證後，將 Windows 用的 cer 格式轉為 Linux 用的 crt 格式，並將生成結果存於 apache2 資料夾內：`,Vn,en,Li=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>openssl x509 -in /share/[urcername].cer -out /etc/apache2/[urcrtname].crt -inform DER</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,tn,G,cs='<a href="#預設-html-網頁設定">預設 html 網頁設定</a>',Un,nn,Ti=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>vim /var/www/html/index.html</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,ln,V,hs='<a href="#web-server-apache2">Web Server (apache2)</a>',Qn,Ie,us=`安裝 apache2：<code>apt install apache2</code>
重啟 apache2 服務：<code>service apache2 restart</code>`,Xn,U,fs='<a href="#啟用-https-ssl">啟用 https (SSL)</a>',Zn,Re,gs="啟用 SSL & ReWrite Engine",Yn,an,Si=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>a2enmod ssl
a2enmod rewrite</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,sn,je,$s=`編輯 apache2 的設定檔：
<code>vim /etc/apache2/apache2.conf</code>
在文件末端加入以下資料：`,el,on,yi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory /var/www/html&gt;
AllowOverride All
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,rn,ze,vs=`編輯 apache2 的網站設定檔：<code>vim /etc/apache2/sites-avaliable/000-default.conf</code>
寫入以下資料：`,tl,pn,Fi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;VirtualHost *:443&gt;
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog $&#123;APACHE_LOG_DIR&#125;/error.log
        CustomLog $&#123;APACHE_LOG_DIR&#125;/access.log combined
        SSLEngine on
        SSLCertificateFile /etc/apache2/[urcrtfile].crt
        SSLCertificateKeyFile /etc/apache2/[urkeyfile].key
&lt;/VirtualHost&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,dn,Tt,Be,nl,Q,ws='<a href="#網址重新導向">網址重新導向</a>',ll,mn,Ei=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 將 http://www.wsdomain.com.tw/outside 重新導向至 http://outside.out</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,cn,O,wa,St,_s="vim /etc/apache2/sites-avaliable/000-default.conf",_a,yt,Cs="Redirect /outside http://www.outside.out",Ca,We,al,hn,Mi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 將 http://www.wsdomain.com.tw 重新導向至 https://www.wsdomain.com.tw</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,un,Je,xs="編輯 apache2 的網站設定檔：<code>vim /etc/apache2/sites-avaliable/000-default.conf</code>加入 <code>Redirect / https://www.wsdomain.com.tw</code>",sl,X,ks='<a href="#站台登入驗證">站台登入驗證</a>',il,M,xa,Ft,bs="touch /etc/apache2/.htpasswd",ka,Et,Hs="htpasswd /etc/apache2/.htpasswd [username]",ba,Ke,Ha,Mt,Ls="vim /etc/apache2/sites-avaliable/000-default.conf",La,ol,fn,Pi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory /var/www/html&gt;
AuthType Basic
AuthName [loginmessage]
AuthUserFile /etc/apache2/.htpasswd
Require valid-user
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,gn,Z,Ts='<a href="#使用者個人網頁模組-userdir">使用者個人網頁模組 (userdir)</a>',rl,D,Ta,Pt,Ss="a2enmod userdir",Sa,Nt,ys="vim /etc/apache2/mods-enabled/userdir.conf",ya,Ge,Fa,Dt,Fs="chmod -R 755 /[homedir]/[webdir]",pl,Y,Es='<a href="#更換-port">更換 Port</a>',dl,P,Ea,At,Ms="vim /etc/apache2/port.conf",Ma,Ve,Pa,qt,Ps="vim /etc/apache2/sites-avaliable/000-default.conf",Na,Ue,Da,ml,ee,Ns='<a href="#更換站台">更換站台</a>',cl,Qe,Ds=`先關閉預設站台：<code>a2dissite 000-default.conf</code>
再啟用你要的站台：<code>a2ensite [ursitename]</code>`,hl,te,As='<a href="#預設檔案">預設檔案</a>',ul,Xe,qs="若網頁檔名不是 index.html 或 index.htm 需要設定預設檔案名稱，開啟設定檔：<code>vim /etc/apache2/apache2.conf</code>",fl,$n,Ni=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory $PATH$&gt;
    DirectoryIndex [filename]
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,vn,Ot,Ze,gl,ne,Os='<a href="#403-forbidden-解決">403 Forbidden 解決</a>',$l,B,Aa,Ye,qa,It,Is="vim /etc/apache2/apache2.conf",vl,wn,Di=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory $PATH$&gt;
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,_n,le,et,Oa,Rt,Rs="service apache2 restart",wl,ae,js='<a href="#web-server-nginx">Web Server (Nginx)</a>',_l,tt,zs=`安裝 Nginx：<code>apt install nginx</code>
重啟 Nginx 服務：<code>service nginx restart</code>`,Cl,se,Bs='<a href="#nginxconf-檢查">nginx.conf 檢查</a>',xl,nt,Ws="<code>nginx -t</code>",kl,ie,Js='<a href="#限制-ip-存取站台">限制 IP 存取站台</a>',bl,lt,Ks=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
編輯 server 區域下的 location 區域：`,Hl,Cn,Ai=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code># 黑名單設定方法
location / &#123;
deny 192.168.10.55;
deny 192.168.1.0/24;
&#125;
# 白名單設定方法
location / &#123;
allow 192.168.10.55;
allow 192.168.1.0/24;
deny all; #需要禁止全部 IP 存取才可設定白名單 (預設為 allow all)
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,xn,W,Ia,at,Ra,st,Ll,oe,Gs='<a href="#站台登入驗證-1">站台登入驗證</a>',Tl,it,Vs=`安裝 apache2-utils (會使用到 htpasswd 指令)：<code>apt install apache2-utils</code>
建立給 Nginx 驗證登入使用者資訊的文件：<code>touch /etc/nginx/.htpasswd</code>
新增使用者到 htpasswd：
<code>htpasswd /etc/nginx/.htpasswd [username]</code>
新增後，編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
加入登入功能到 location 區塊，其中 auth_basic 是要求登入時會顯示的訊息：`,Sl,kn,qi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>location / &#123;
        auth_basic "[loginmessage]";
        auth_basic_user_file /etc/nginx/.htpasswd;
        &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,bn,re,Us='<a href="#啟用-https-ssl-1">啟用 https (SSL)</a>',yl,ot,Qs=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
在 server 區塊下設定 SSL：`,Fl,Hn,Oi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>server &#123;
    # SSL configuratuion
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    ssl_certificate /etc/nginx/[urcrtfile].crt;
    ssl_certificate_key /etc/nginx/[urkeyfile].key;
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Ln,pe,rt,ja,pt,El,de,Xs='<a href="#網址重新導向-1">網址重新導向</a>',Ml,dt,Zs=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
在 location 區塊下設定：`,Pl,Tn,Ii=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code># 當存取 test.com 時會重新導向至 redirect.com
location / &#123;
    return 301 http://redirect.com;
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Sn,me,mt,za,ct,Nl,ce,Ys='<a href="#http-to-https-重新導向">http to https 重新導向</a>',Dl,A,Ba,ht,Wa,jt,ei="return",Ja,zt,ti="注意：不是寫在 location 區塊內",Ka,Al,yn,Ri=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>return 301 https://$host$request_uri;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Fn,he,ni='<a href="#負載平衡分流-load-balance">負載平衡/分流 (Load Balance)</a>',ql,ut,li=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
新增 upstream 區塊並編輯 server 區塊：`,Ol,En,ji=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code>upstream [load_balance_URL] &#123;
    server [server1]:[port];
    server [server2]:[port];
    ...
&#125;
location / &#123;
    proxy_pass http://[load_balance_URL];
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash= was not set up for Shiki to use, and so there is no code highlighting -->`,Mn,Bt,ft,Il,F,Ga,Wt,ai="access_log /var/log/nginx/access.log upstreamlog;",Va,gt,Ua,Jt,si="upstreamlog",Qa,Kt,ii="tail -f /var/log/nginx/access.log",Xa,$t,Za,Rl,ue,oi='<a href="#更換站台-1">更換站台</a>',jl,N,Ya,Gt,ri="vim /etc/nginx/nginx.conf",es,Vt,pi="include /etc/nginx/sites-enables/*;",ts,vt,ns,Ut,di="include",ls,zl,fe,mi='<a href="#location-匹配選擇機制">location (匹配選擇機制)</a>',Bl,wt,ci="僅使用<code>/</code>表示一般配置 (最長路徑)，會<strong>搜尋全部的 location 後才挑選出最符合請求路徑的配置檔</strong> (有可能被其它規則攔截)",Wl,Pn,zi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>
    # 最基本的設定，會匹配到所有 http://www.domain.com 的請求，但是優先順序會被排到正規表示法和最長路徑之後
    # 例如 http://www.domain.com/abc 或 http://www.domain.com/bruh 兩者皆可符合該規則 
    location / &#123;
        ....
    &#125;

    # 匹配到以 /news 開頭的所有請求，但還不會馬上採用，會繼續往下搜尋是否有較長符合路徑的項目
    location /news &#123;
        ....
    &#125;

    # 匹配到以 /news/taiwan 開頭的所有請求，也是不會馬上採用，但若是有來自 http://www.domain.com/news/taiwan/... 開頭的請求，則會取代上面 /news 配置成為優先保留項再繼續往下搜尋
    location /news/taiwan &#123;
        ....
    &#125;

    # 匹配到以 /news/taiwan/keelung 開頭的所有請求，也是不會馬上採用，分為以下兩個情境
    # 1. 來自 http://www.domain.com/news/taiwan/hsinchu 開頭的請求，依然會採用上面 /news/taiwan 的配置然後繼續往下搜尋
    # 2. 來自 http://www.domain.com/news/taiwan/keelung 開頭的請求，則會取代上面 /news/taiwan 的配置成為新的優先保留項然後才再繼續往下搜尋
    location /news/taiwan/keelung &#123;
        ....
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Nn,_t,hi="使用<code>= /</code>代表精準匹配，需<strong>完全符合且匹配，確認後立即採用</strong>",Jl,Dn,Bi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 只能 http://www.domain.com 才能符合，後面不能帶任何字元，e.g. http://www.domain.com (O), http://www.domain.com/abc (X)
    location = / &#123;
        ....
    &#125;

    # 來自 http://www.domain.com/news/taiwan/taipei 的要求會立即採用此配置
    location = /news/taiwan/taipei &#123;
        ....
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,An,Ct,ui="使用<code>~ /</code>代表使用正規表示法來做匹配，會<strong>區分大小寫</strong>，若要<strong>不區分大小寫需使用</strong><code>~* /</code>，由於第一個匹配到的規則設定會立即採用，所以採用此種方式的配置其順序很重要",Kl,qn,Wi=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 1. 來自 http://www.domain.com/images 開頭的要求會匹配此規則且立即採用該配置，但 http://www.domain.com/Images 開頭的要求則不符合該規則
    location ~ ^/images &#123;
        ....
    &#125;

    # 來自 http://www.domain.com/images 和 http://www.domain.com/Images 開頭的要求皆能符合此規則且會立即採用該配置
    location ~* ^/images &#123;
        ....
    &#125;

    # 匹配所有以 .gif 和 .jpg 和 .jpeg 結尾的要求，這邊分兩個情境來說明
    # 1. 來自 http://www.domain.com/Images/dog.jpg 的請求雖然符合該配置的規則，但是卻會先被上面的 ~* ^/images 這條規則先攔截，因此該請求其實是到不了這條規則的
    # 2. 來自 http://www.domain.com/news/images/cat.gif 的請求符合該配置的規則且沒在其它地方被攔截，所以會立即採用該配置
    location ~* .(gif|jpg|jpeg)$ &#123;
        ....
    &#125;

    # 匹配所有 URI 路徑以 admin 和 swagger 和 api 開頭的要求，這邊分兩個情境來說明
    # 例如來自 http://www.domain.com/admin/... 或 http://www.domain.com/Admin/... 開頭的請求皆符合此規則且會立即採用該配置
    location ~* ^/(admin|swagger|api)/? &#123;
        ....
    &#125;  </code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,On,xt,fi="使用<code>^~</code>代表排除正規表示法的匹配，類似於一般配置，不同的是一旦符合即馬上採用該配置",Gl,In,Ji=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 匹配到所有請求，但還不會馬上採用，會繼續往下搜尋是否有其它較長符合路徑的項目
    location / &#123;
        ....
    &#125;

    # 匹配到以 /news 開頭的所有請求，但還不會馬上採用，會繼續往下搜尋是否有較長符合路徑的項目
    location /news &#123;
        ....
    &#125;

    # 匹配到以 /news/taiwan 開頭的所有請求，因為使用了 ^~ 所以如果有符合 /news/taiwan 開頭的 URI 會立即採用該配置，停止往下搜尋
    # 1. 來自 http://www.domain.com/news/taiwan/keelung/index 的請求符合該配置的規則，所以採用該配置
    # 2. 來自 http://www.domain.com/news/japan/osaka/index 的請求不符合該配置的規則，繼續往下搜尋
    location ^~ /news/taiwan &#123;
        ....
    &#125;

    # 匹配到以 /news/japan 開頭的所有請求，但還不會馬上採用，會繼續往下搜尋是否有較長符合路徑的項目
    location /news/japan &#123;
        ....
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Rn,ge,Vl;return _=new x({props:{src:"https://hackmd.io/_uploads/rJdQha3cn.png"}}),I=new x({props:{src:"https://hackmd.io/_uploads/HJRbIwVpn.png"}}),ve=new x({props:{src:"https://hackmd.io/_uploads/H1-B26292.png"}}),we=new x({props:{src:"https://hackmd.io/_uploads/SJ6HnTnq3.png"}}),_e=new x({props:{src:"https://hackmd.io/_uploads/SJ28n625h.png"}}),Ce=new x({props:{src:"https://hackmd.io/_uploads/SyHwna29h.png"}}),xe=new x({props:{src:"https://hackmd.io/_uploads/SkBL8v4p3.png"}}),ke=new x({props:{src:"https://hackmd.io/_uploads/ByPO3Th9n.png"}}),be=new x({props:{src:"https://hackmd.io/_uploads/By9Fn63q2.png"}}),He=new x({props:{src:"https://hackmd.io/_uploads/S1Qchphcn.png"}}),Le=new x({props:{src:"https://hackmd.io/_uploads/BJ6jPDVpn.png"}}),Te=new x({props:{src:"https://hackmd.io/_uploads/rkNjhp352.png"}}),Se=new x({props:{src:"https://hackmd.io/_uploads/SJTo26n53.png"}}),ye=new x({props:{src:"https://hackmd.io/_uploads/SkLhhanqn.png"}}),Fe=new x({props:{src:"https://hackmd.io/_uploads/rkepnTn5n.png"}}),Ee=new x({props:{src:"https://hackmd.io/_uploads/BkdTh6nqn.png"}}),Me=new x({props:{src:"https://hackmd.io/_uploads/r1rA262q3.png"}}),Pe=new x({props:{src:"https://hackmd.io/_uploads/HJhA26h52.png"}}),Ne=new x({props:{src:"https://hackmd.io/_uploads/HJNJT63q2.png"}}),De=new x({props:{src:"https://hackmd.io/_uploads/Bknk6p352.png"}}),Be=new x({props:{src:"https://hackmd.io/_uploads/B1vgTT2cn.png"}}),We=new x({props:{src:"https://hackmd.io/_uploads/rJG-6p39h.png"}}),Ke=new x({props:{src:"https://hackmd.io/_uploads/SkdzaRyJA.png",alt:"image"}}),Ge=new x({props:{src:"https://hackmd.io/_uploads/SkPT4vlAT.png",alt:"image"}}),Ve=new x({props:{src:"https://hackmd.io/_uploads/rySLPmSmT.png",alt:"image.png"}}),Ue=new x({props:{src:"https://hackmd.io/_uploads/r1q8dmrXa.png",alt:"image.png"}}),Ze=new x({props:{src:"https://hackmd.io/_uploads/rka5bPgC6.png",alt:"image"}}),Ye=new x({props:{src:"https://hackmd.io/_uploads/S1RlxPg0a.png",alt:"image"}}),et=new x({props:{src:"https://hackmd.io/_uploads/HkNrQLRRp.png",alt:"image"}}),at=new x({props:{src:"https://hackmd.io/_uploads/SkdwHlNeT.png"}}),st=new x({props:{src:"https://hackmd.io/_uploads/rJwKoyVga.png"}}),rt=new x({props:{src:"https://hackmd.io/_uploads/ry9yNBNlp.png"}}),pt=new x({props:{src:"https://hackmd.io/_uploads/BkQEIB4lT.png"}}),mt=new x({props:{src:"https://hackmd.io/_uploads/r1ycdB4lT.png"}}),ct=new x({props:{src:"https://hackmd.io/_uploads/BynrFHVgT.png"}}),ht=new x({props:{src:"https://hackmd.io/_uploads/ryx5ruBd0.png",alt:"image"}}),ft=new x({props:{src:"https://hackmd.io/_uploads/ByAIZpGpp.png",alt:"image"}}),gt=new x({props:{src:"https://hackmd.io/_uploads/HJyGL6Maa.png",alt:"image"}}),$t=new x({props:{src:"https://hackmd.io/_uploads/S1IqXCGpa.png",alt:"image"}}),vt=new x({props:{src:"https://hackmd.io/_uploads/S1rkLCfa6.png",alt:"image"}}),ge=new to({props:{$$slots:{default:[no]},$$scope:{ctx:E}}}),{c(){h=o("h2"),h.innerHTML=T,k=a(),p=o("p"),C=m(`安裝 CA Server 提供簽證服務
(選擇 Certification Authority 及 Certification Authority Web Enrollment)
`),g(_.$$.fragment),S=m(`
使用MMC請求CA簽證
`),g(I.$$.fragment),Zl=m(`
選擇Computer account
`),g(ve.$$.fragment),Yl=m(`
點開 Personal > Certificates
再按右鍵選擇 All Tasks > Advanced Operations > Create Custom Request
`),g(we.$$.fragment),ea=m(`
選擇 Proceed without enrollment policy
`),g(_e.$$.fragment),ta=a(),g(Ce.$$.fragment),na=m(`
設定簽證資訊：Details > Properties
`),g(xe.$$.fragment),la=a(),g(ke.$$.fragment),aa=m(`
到 Subject 欄位加入 Common name 和 DNS (`),bt=o("code"),bt.textContent=ss,sa=m(`為目的網域之萬用類型)
`),g(be.$$.fragment),ia=m(`
到 Private Key 欄位點開 Key options
將 Key Size 設為 2048 並勾選 Make private key exportable
`),g(He.$$.fragment),oa=m(`
使用 Internet Explorer 進行簽證 (`),Ht=o("strong"),Ht.textContent=is,ra=m(`)
前往`),Lt=o("code"),Lt.textContent=os,pa=m(`並輸入帳號密碼
選擇 Request a certificate
`),g(Le.$$.fragment),da=m(`
選擇 advanced certificate request
`),g(Te.$$.fragment),ma=m(`
選擇  Submit a certificate request using a base64-encoded CMC or PKCS #10 file, or submit a renewal request by using a base-64-encoded PKCS #7 file.
`),g(Se.$$.fragment),ca=m(`
打開剛剛建立好的請求檔案
`),g(ye.$$.fragment),ha=m(`
複製並貼至 Internet Explorer 內
並將 Certificate Template 類型選擇 Web Server 後按 Submit
`),g(Fe.$$.fragment),ua=m(`
生成完畢後，選擇 Download certificate 來下載簽證
`),g(Ee.$$.fragment),fa=m(`
到 IIS 的 Server Certificate 並選擇 Complete Certificate Request
`),g(Me.$$.fragment),ga=m(`
導入剛剛下載的簽證，並設定一個 Friendly name
`),g(Pe.$$.fragment),$a=m(`
設定 https 的網站，導入簽證
`),g(Ne.$$.fragment),va=m(`
即完成了簽證，前往目標網站時不會出現安全性錯誤
`),g(De.$$.fragment),Wn=a(),K=o("h2"),K.innerHTML=rs,Jn=a(),Ae=o("p"),Ae.innerHTML=ps,Kn=a(),Qt=new H(!1),Xt=a(),qe=o("p"),qe.innerHTML=ds,Gn=a(),Zt=new H(!1),Yt=a(),Oe=o("p"),Oe.innerHTML=ms,Vn=a(),en=new H(!1),tn=a(),G=o("h2"),G.innerHTML=cs,Un=a(),nn=new H(!1),ln=a(),V=o("h2"),V.innerHTML=hs,Qn=a(),Ie=o("p"),Ie.innerHTML=us,Xn=a(),U=o("h3"),U.innerHTML=fs,Zn=a(),Re=o("p"),Re.textContent=gs,Yn=a(),an=new H(!1),sn=a(),je=o("p"),je.innerHTML=$s,el=a(),on=new H(!1),rn=a(),ze=o("p"),ze.innerHTML=vs,tl=a(),pn=new H(!1),dn=a(),Tt=o("p"),g(Be.$$.fragment),nl=a(),Q=o("h3"),Q.innerHTML=ws,ll=a(),mn=new H(!1),cn=a(),O=o("p"),wa=m("編輯 apache2 的網站設定檔："),St=o("code"),St.textContent=_s,_a=m("加入 "),yt=o("code"),yt.textContent=Cs,Ca=a(),g(We.$$.fragment),al=a(),hn=new H(!1),un=a(),Je=o("p"),Je.innerHTML=xs,sl=a(),X=o("h3"),X.innerHTML=ks,il=a(),M=o("p"),xa=m("建立給 apache2 驗證登入使用者資訊的文件："),Ft=o("code"),Ft.textContent=bs,ka=m(`
新增使用者到 htpasswd：
`),Et=o("code"),Et.textContent=Hs,ba=a(),g(Ke.$$.fragment),Ha=m(`
新增後，編輯 apache2 的網站設定檔：`),Mt=o("code"),Mt.textContent=Ls,La=m(`
加入登入功能，其中 AuthName 是要求登入時會顯示的訊息`),ol=a(),fn=new H(!1),gn=a(),Z=o("h3"),Z.innerHTML=Ts,rl=a(),D=o("p"),Ta=m("啟用模組："),Pt=o("code"),Pt.textContent=Ss,Sa=m(`
編輯模組設定檔：`),Nt=o("code"),Nt.textContent=ys,ya=a(),g(Ge.$$.fragment),Fa=m(`
其中第一行的意思是站台會存取使用者目錄中 html 資料夾內的檔案，若使用者目錄中沒有此資料夾則網頁會顯示「Not Found」，預設值是 public_html
第二行是不為哪些使用者啟用站台，預設值是 root 使用者
若啟用了該模組，也要記得將目錄的權限更改為755：`),Dt=o("code"),Dt.textContent=Fs,pl=a(),Y=o("h3"),Y.innerHTML=Es,dl=a(),P=o("p"),Ea=m("編輯 Port 設定檔："),At=o("code"),At.textContent=Ms,Ma=a(),g(Ve.$$.fragment),Pa=m(`
如果要改 http 的 Port：將 80 改成你要的 Port
如果要改 https 的 Port：將 443 (兩個) 改成你要的 Port
最後編輯網站設定檔：`),qt=o("code"),qt.textContent=Ps,Na=a(),g(Ue.$$.fragment),Da=m(`
將最上方的 80 改成你要的 Port`),ml=a(),ee=o("h3"),ee.innerHTML=Ns,cl=a(),Qe=o("p"),Qe.innerHTML=Ds,hl=a(),te=o("h3"),te.innerHTML=As,ul=a(),Xe=o("p"),Xe.innerHTML=qs,fl=a(),$n=new H(!1),vn=a(),Ot=o("p"),g(Ze.$$.fragment),gl=a(),ne=o("h3"),ne.innerHTML=Os,$l=a(),B=o("p"),Aa=m(`在更改站台路徑後可能會出現 403 Forbidden 的問題
`),g(Ye.$$.fragment),qa=m(`
開啟設定檔：`),It=o("code"),It.textContent=Is,vl=a(),wn=new H(!1),_n=a(),le=o("p"),g(et.$$.fragment),Oa=m(`
設定後重啟 apache2：`),Rt=o("code"),Rt.textContent=Rs,wl=a(),ae=o("h2"),ae.innerHTML=js,_l=a(),tt=o("p"),tt.innerHTML=zs,Cl=a(),se=o("h3"),se.innerHTML=Bs,xl=a(),nt=o("p"),nt.innerHTML=Ws,kl=a(),ie=o("h3"),ie.innerHTML=Js,bl=a(),lt=o("p"),lt.innerHTML=Ks,Hl=a(),Cn=new H(!1),xn=a(),W=o("p"),Ia=m(`註：這裡設定有先後的層級之分，若在白名單內把deny all寫在allow的前面會使allow設定不運作
若站台存取遭拒會顯示：
`),g(at.$$.fragment),Ra=a(),g(st.$$.fragment),Ll=a(),oe=o("h3"),oe.innerHTML=Gs,Tl=a(),it=o("p"),it.innerHTML=Vs,Sl=a(),kn=new H(!1),bn=a(),re=o("h3"),re.innerHTML=Us,yl=a(),ot=o("p"),ot.innerHTML=Qs,Fl=a(),Hn=new H(!1),Ln=a(),pe=o("p"),g(rt.$$.fragment),ja=a(),g(pt.$$.fragment),El=a(),de=o("h3"),de.innerHTML=Xs,Ml=a(),dt=o("p"),dt.innerHTML=Zs,Pl=a(),Tn=new H(!1),Sn=a(),me=o("p"),g(mt.$$.fragment),za=a(),g(ct.$$.fragment),Nl=a(),ce=o("h3"),ce.innerHTML=Ys,Dl=a(),A=o("p"),Ba=m(`與前面重新導向相似，但是需要將 http 和 https 站台分開來寫
`),g(ht.$$.fragment),Wa=m(`
在 http 的站台內寫 `),jt=o("code"),jt.textContent=ei,Ja=m(` 到 https
`),zt=o("strong"),zt.textContent=ti,Ka=m(`
若一個站台對到多個 DNS 紀錄可以寫為`),Al=a(),yn=new H(!1),Fn=a(),he=o("h3"),he.innerHTML=ni,ql=a(),ut=o("p"),ut.innerHTML=li,Ol=a(),En=new H(!1),Mn=a(),Bt=o("p"),g(ft.$$.fragment),Il=a(),F=o("p"),Ga=m("若要監察存取紀錄可以在站台檔案的開頭新增 log 格式，並在 server 區塊新增 "),Wt=o("code"),Wt.textContent=ai,Va=m(`：
`),g(gt.$$.fragment),Ua=m(`
註：最後的`),Jt=o("code"),Jt.textContent=si,Qa=m(`指的是給 log 的格式名稱
再用指令`),Kt=o("code"),Kt.textContent=ii,Xa=m(` 實時監察站台存取紀錄：
`),g($t.$$.fragment),Za=m(`
只要出現設定檔中的多個 IP 就代表負載設定成功`),Rl=a(),ue=o("h3"),ue.innerHTML=oi,jl=a(),N=o("p"),Ya=m("編輯 Nginx 設定檔："),Gt=o("code"),Gt.textContent=ri,es=m(`
找到 `),Vt=o("code"),Vt.textContent=pi,ts=a(),g(vt.$$.fragment),ns=m(`
可以自行新增或編輯，讓 `),Ut=o("code"),Ut.textContent=di,ls=m(" 後面接自己站台的路徑，並把預設站台移除"),zl=a(),fe=o("h3"),fe.innerHTML=mi,Bl=a(),wt=o("p"),wt.innerHTML=ci,Wl=a(),Pn=new H(!1),Nn=a(),_t=o("p"),_t.innerHTML=hi,Jl=a(),Dn=new H(!1),An=a(),Ct=o("p"),Ct.innerHTML=ui,Kl=a(),qn=new H(!1),On=a(),xt=o("p"),xt.innerHTML=fi,Gl=a(),In=new H(!1),Rn=a(),g(ge.$$.fragment),this.h()},l(e){h=r(e,"H2",{id:!0,"data-svelte-h":!0}),d(h)!=="svelte-fp9yc5"&&(h.innerHTML=T),k=s(e),p=r(e,"P",{});var t=y(p);C=c(t,`安裝 CA Server 提供簽證服務
(選擇 Certification Authority 及 Certification Authority Web Enrollment)
`),$(_.$$.fragment,t),S=c(t,`
使用MMC請求CA簽證
`),$(I.$$.fragment,t),Zl=c(t,`
選擇Computer account
`),$(ve.$$.fragment,t),Yl=c(t,`
點開 Personal > Certificates
再按右鍵選擇 All Tasks > Advanced Operations > Create Custom Request
`),$(we.$$.fragment,t),ea=c(t,`
選擇 Proceed without enrollment policy
`),$(_e.$$.fragment,t),ta=s(t),$(Ce.$$.fragment,t),na=c(t,`
設定簽證資訊：Details > Properties
`),$(xe.$$.fragment,t),la=s(t),$(ke.$$.fragment,t),aa=c(t,`
到 Subject 欄位加入 Common name 和 DNS (`),bt=r(t,"CODE",{"data-svelte-h":!0}),d(bt)!=="svelte-1xg83ew"&&(bt.textContent=ss),sa=c(t,`為目的網域之萬用類型)
`),$(be.$$.fragment,t),ia=c(t,`
到 Private Key 欄位點開 Key options
將 Key Size 設為 2048 並勾選 Make private key exportable
`),$(He.$$.fragment,t),oa=c(t,`
使用 Internet Explorer 進行簽證 (`),Ht=r(t,"STRONG",{"data-svelte-h":!0}),d(Ht)!=="svelte-iwo5gz"&&(Ht.textContent=is),ra=c(t,`)
前往`),Lt=r(t,"CODE",{"data-svelte-h":!0}),d(Lt)!=="svelte-13zni43"&&(Lt.textContent=os),pa=c(t,`並輸入帳號密碼
選擇 Request a certificate
`),$(Le.$$.fragment,t),da=c(t,`
選擇 advanced certificate request
`),$(Te.$$.fragment,t),ma=c(t,`
選擇  Submit a certificate request using a base64-encoded CMC or PKCS #10 file, or submit a renewal request by using a base-64-encoded PKCS #7 file.
`),$(Se.$$.fragment,t),ca=c(t,`
打開剛剛建立好的請求檔案
`),$(ye.$$.fragment,t),ha=c(t,`
複製並貼至 Internet Explorer 內
並將 Certificate Template 類型選擇 Web Server 後按 Submit
`),$(Fe.$$.fragment,t),ua=c(t,`
生成完畢後，選擇 Download certificate 來下載簽證
`),$(Ee.$$.fragment,t),fa=c(t,`
到 IIS 的 Server Certificate 並選擇 Complete Certificate Request
`),$(Me.$$.fragment,t),ga=c(t,`
導入剛剛下載的簽證，並設定一個 Friendly name
`),$(Pe.$$.fragment,t),$a=c(t,`
設定 https 的網站，導入簽證
`),$(Ne.$$.fragment,t),va=c(t,`
即完成了簽證，前往目標網站時不會出現安全性錯誤
`),$(De.$$.fragment,t),t.forEach(n),Wn=s(e),K=r(e,"H2",{id:!0,"data-svelte-h":!0}),d(K)!=="svelte-1rb0la7"&&(K.innerHTML=rs),Jn=s(e),Ae=r(e,"P",{"data-svelte-h":!0}),d(Ae)!=="svelte-11vzsag"&&(Ae.innerHTML=ps),Kn=s(e),Qt=L(e,!1),Xt=s(e),qe=r(e,"P",{"data-svelte-h":!0}),d(qe)!=="svelte-1byt50y"&&(qe.innerHTML=ds),Gn=s(e),Zt=L(e,!1),Yt=s(e),Oe=r(e,"P",{"data-svelte-h":!0}),d(Oe)!=="svelte-1ypaz3v"&&(Oe.innerHTML=ms),Vn=s(e),en=L(e,!1),tn=s(e),G=r(e,"H2",{id:!0,"data-svelte-h":!0}),d(G)!=="svelte-1g4mnaq"&&(G.innerHTML=cs),Un=s(e),nn=L(e,!1),ln=s(e),V=r(e,"H2",{id:!0,"data-svelte-h":!0}),d(V)!=="svelte-czte7a"&&(V.innerHTML=hs),Qn=s(e),Ie=r(e,"P",{"data-svelte-h":!0}),d(Ie)!=="svelte-1t8euxs"&&(Ie.innerHTML=us),Xn=s(e),U=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(U)!=="svelte-1afepzh"&&(U.innerHTML=fs),Zn=s(e),Re=r(e,"P",{"data-svelte-h":!0}),d(Re)!=="svelte-1bj1fjz"&&(Re.textContent=gs),Yn=s(e),an=L(e,!1),sn=s(e),je=r(e,"P",{"data-svelte-h":!0}),d(je)!=="svelte-wm8zjk"&&(je.innerHTML=$s),el=s(e),on=L(e,!1),rn=s(e),ze=r(e,"P",{"data-svelte-h":!0}),d(ze)!=="svelte-iuw89k"&&(ze.innerHTML=vs),tl=s(e),pn=L(e,!1),dn=s(e),Tt=r(e,"P",{});var jn=y(Tt);$(Be.$$.fragment,jn),jn.forEach(n),nl=s(e),Q=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(Q)!=="svelte-me9s10"&&(Q.innerHTML=ws),ll=s(e),mn=L(e,!1),cn=s(e),O=r(e,"P",{});var kt=y(O);wa=c(kt,"編輯 apache2 的網站設定檔："),St=r(kt,"CODE",{"data-svelte-h":!0}),d(St)!=="svelte-1lg9tco"&&(St.textContent=_s),_a=c(kt,"加入 "),yt=r(kt,"CODE",{"data-svelte-h":!0}),d(yt)!=="svelte-1osjzt4"&&(yt.textContent=Cs),Ca=s(kt),$(We.$$.fragment,kt),kt.forEach(n),al=s(e),hn=L(e,!1),un=s(e),Je=r(e,"P",{"data-svelte-h":!0}),d(Je)!=="svelte-iqaaqz"&&(Je.innerHTML=xs),sl=s(e),X=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(X)!=="svelte-q70sp3"&&(X.innerHTML=ks),il=s(e),M=r(e,"P",{});var R=y(M);xa=c(R,"建立給 apache2 驗證登入使用者資訊的文件："),Ft=r(R,"CODE",{"data-svelte-h":!0}),d(Ft)!=="svelte-z1llyw"&&(Ft.textContent=bs),ka=c(R,`
新增使用者到 htpasswd：
`),Et=r(R,"CODE",{"data-svelte-h":!0}),d(Et)!=="svelte-1ye8t5"&&(Et.textContent=Hs),ba=s(R),$(Ke.$$.fragment,R),Ha=c(R,`
新增後，編輯 apache2 的網站設定檔：`),Mt=r(R,"CODE",{"data-svelte-h":!0}),d(Mt)!=="svelte-1lg9tco"&&(Mt.textContent=Ls),La=c(R,`
加入登入功能，其中 AuthName 是要求登入時會顯示的訊息`),R.forEach(n),ol=s(e),fn=L(e,!1),gn=s(e),Z=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(Z)!=="svelte-1smh9sa"&&(Z.innerHTML=Ts),rl=s(e),D=r(e,"P",{});var J=y(D);Ta=c(J,"啟用模組："),Pt=r(J,"CODE",{"data-svelte-h":!0}),d(Pt)!=="svelte-zymyuo"&&(Pt.textContent=Ss),Sa=c(J,`
編輯模組設定檔：`),Nt=r(J,"CODE",{"data-svelte-h":!0}),d(Nt)!=="svelte-1lanh7d"&&(Nt.textContent=ys),ya=s(J),$(Ge.$$.fragment,J),Fa=c(J,`
其中第一行的意思是站台會存取使用者目錄中 html 資料夾內的檔案，若使用者目錄中沒有此資料夾則網頁會顯示「Not Found」，預設值是 public_html
第二行是不為哪些使用者啟用站台，預設值是 root 使用者
若啟用了該模組，也要記得將目錄的權限更改為755：`),Dt=r(J,"CODE",{"data-svelte-h":!0}),d(Dt)!=="svelte-16n9ba8"&&(Dt.textContent=Fs),J.forEach(n),pl=s(e),Y=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(Y)!=="svelte-1k2hrhy"&&(Y.innerHTML=Es),dl=s(e),P=r(e,"P",{});var j=y(P);Ea=c(j,"編輯 Port 設定檔："),At=r(j,"CODE",{"data-svelte-h":!0}),d(At)!=="svelte-2fua5s"&&(At.textContent=Ms),Ma=s(j),$(Ve.$$.fragment,j),Pa=c(j,`
如果要改 http 的 Port：將 80 改成你要的 Port
如果要改 https 的 Port：將 443 (兩個) 改成你要的 Port
最後編輯網站設定檔：`),qt=r(j,"CODE",{"data-svelte-h":!0}),d(qt)!=="svelte-1lg9tco"&&(qt.textContent=Ps),Na=s(j),$(Ue.$$.fragment,j),Da=c(j,`
將最上方的 80 改成你要的 Port`),j.forEach(n),ml=s(e),ee=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(ee)!=="svelte-gq3x42"&&(ee.innerHTML=Ns),cl=s(e),Qe=r(e,"P",{"data-svelte-h":!0}),d(Qe)!=="svelte-1e9ab83"&&(Qe.innerHTML=Ds),hl=s(e),te=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(te)!=="svelte-129yhep"&&(te.innerHTML=As),ul=s(e),Xe=r(e,"P",{"data-svelte-h":!0}),d(Xe)!=="svelte-13zi9ur"&&(Xe.innerHTML=qs),fl=s(e),$n=L(e,!1),vn=s(e),Ot=r(e,"P",{});var gi=y(Ot);$(Ze.$$.fragment,gi),gi.forEach(n),gl=s(e),ne=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(ne)!=="svelte-p1ypgn"&&(ne.innerHTML=Os),$l=s(e),B=r(e,"P",{});var zn=y(B);Aa=c(zn,`在更改站台路徑後可能會出現 403 Forbidden 的問題
`),$(Ye.$$.fragment,zn),qa=c(zn,`
開啟設定檔：`),It=r(zn,"CODE",{"data-svelte-h":!0}),d(It)!=="svelte-2i1yor"&&(It.textContent=Is),zn.forEach(n),vl=s(e),wn=L(e,!1),_n=s(e),le=r(e,"P",{});var Ul=y(le);$(et.$$.fragment,Ul),Oa=c(Ul,`
設定後重啟 apache2：`),Rt=r(Ul,"CODE",{"data-svelte-h":!0}),d(Rt)!=="svelte-175m26"&&(Rt.textContent=Rs),Ul.forEach(n),wl=s(e),ae=r(e,"H2",{id:!0,"data-svelte-h":!0}),d(ae)!=="svelte-1hkupka"&&(ae.innerHTML=js),_l=s(e),tt=r(e,"P",{"data-svelte-h":!0}),d(tt)!=="svelte-vhz1f4"&&(tt.innerHTML=zs),Cl=s(e),se=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(se)!=="svelte-1s452vj"&&(se.innerHTML=Bs),xl=s(e),nt=r(e,"P",{"data-svelte-h":!0}),d(nt)!=="svelte-1hzw9l6"&&(nt.innerHTML=Ws),kl=s(e),ie=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(ie)!=="svelte-1qqr7ic"&&(ie.innerHTML=Js),bl=s(e),lt=r(e,"P",{"data-svelte-h":!0}),d(lt)!=="svelte-ptd6cj"&&(lt.innerHTML=Ks),Hl=s(e),Cn=L(e,!1),xn=s(e),W=r(e,"P",{});var Bn=y(W);Ia=c(Bn,`註：這裡設定有先後的層級之分，若在白名單內把deny all寫在allow的前面會使allow設定不運作
若站台存取遭拒會顯示：
`),$(at.$$.fragment,Bn),Ra=s(Bn),$(st.$$.fragment,Bn),Bn.forEach(n),Ll=s(e),oe=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(oe)!=="svelte-2ju6fb"&&(oe.innerHTML=Gs),Tl=s(e),it=r(e,"P",{"data-svelte-h":!0}),d(it)!=="svelte-1uftmpj"&&(it.innerHTML=Vs),Sl=s(e),kn=L(e,!1),bn=s(e),re=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(re)!=="svelte-1gspjf5"&&(re.innerHTML=Us),yl=s(e),ot=r(e,"P",{"data-svelte-h":!0}),d(ot)!=="svelte-9v15ui"&&(ot.innerHTML=Qs),Fl=s(e),Hn=L(e,!1),Ln=s(e),pe=r(e,"P",{});var Ql=y(pe);$(rt.$$.fragment,Ql),ja=s(Ql),$(pt.$$.fragment,Ql),Ql.forEach(n),El=s(e),de=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(de)!=="svelte-v7fgf4"&&(de.innerHTML=Xs),Ml=s(e),dt=r(e,"P",{"data-svelte-h":!0}),d(dt)!=="svelte-1thil54"&&(dt.innerHTML=Zs),Pl=s(e),Tn=L(e,!1),Sn=s(e),me=r(e,"P",{});var Xl=y(me);$(mt.$$.fragment,Xl),za=s(Xl),$(ct.$$.fragment,Xl),Xl.forEach(n),Nl=s(e),ce=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(ce)!=="svelte-1gnl6cu"&&(ce.innerHTML=Ys),Dl=s(e),A=r(e,"P",{});var $e=y(A);Ba=c($e,`與前面重新導向相似，但是需要將 http 和 https 站台分開來寫
`),$(ht.$$.fragment,$e),Wa=c($e,`
在 http 的站台內寫 `),jt=r($e,"CODE",{"data-svelte-h":!0}),d(jt)!=="svelte-1x48b96"&&(jt.textContent=ei),Ja=c($e,` 到 https
`),zt=r($e,"STRONG",{"data-svelte-h":!0}),d(zt)!=="svelte-1jfvoe2"&&(zt.textContent=ti),Ka=c($e,`
若一個站台對到多個 DNS 紀錄可以寫為`),$e.forEach(n),Al=s(e),yn=L(e,!1),Fn=s(e),he=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(he)!=="svelte-gumo5e"&&(he.innerHTML=ni),ql=s(e),ut=r(e,"P",{"data-svelte-h":!0}),d(ut)!=="svelte-8sojpg"&&(ut.innerHTML=li),Ol=s(e),En=L(e,!1),Mn=s(e),Bt=r(e,"P",{});var $i=y(Bt);$(ft.$$.fragment,$i),$i.forEach(n),Il=s(e),F=r(e,"P",{});var q=y(F);Ga=c(q,"若要監察存取紀錄可以在站台檔案的開頭新增 log 格式，並在 server 區塊新增 "),Wt=r(q,"CODE",{"data-svelte-h":!0}),d(Wt)!=="svelte-7rufrc"&&(Wt.textContent=ai),Va=c(q,`：
`),$(gt.$$.fragment,q),Ua=c(q,`
註：最後的`),Jt=r(q,"CODE",{"data-svelte-h":!0}),d(Jt)!=="svelte-jx4t1d"&&(Jt.textContent=si),Qa=c(q,`指的是給 log 的格式名稱
再用指令`),Kt=r(q,"CODE",{"data-svelte-h":!0}),d(Kt)!=="svelte-cw2vgg"&&(Kt.textContent=ii),Xa=c(q,` 實時監察站台存取紀錄：
`),$($t.$$.fragment,q),Za=c(q,`
只要出現設定檔中的多個 IP 就代表負載設定成功`),q.forEach(n),Rl=s(e),ue=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(ue)!=="svelte-12gthyy"&&(ue.innerHTML=oi),jl=s(e),N=r(e,"P",{});var z=y(N);Ya=c(z,"編輯 Nginx 設定檔："),Gt=r(z,"CODE",{"data-svelte-h":!0}),d(Gt)!=="svelte-ijz9n"&&(Gt.textContent=ri),es=c(z,`
找到 `),Vt=r(z,"CODE",{"data-svelte-h":!0}),d(Vt)!=="svelte-cuvryw"&&(Vt.textContent=pi),ts=s(z),$(vt.$$.fragment,z),ns=c(z,`
可以自行新增或編輯，讓 `),Ut=r(z,"CODE",{"data-svelte-h":!0}),d(Ut)!=="svelte-1pwnvq6"&&(Ut.textContent=di),ls=c(z," 後面接自己站台的路徑，並把預設站台移除"),z.forEach(n),zl=s(e),fe=r(e,"H3",{id:!0,"data-svelte-h":!0}),d(fe)!=="svelte-1eyry6s"&&(fe.innerHTML=mi),Bl=s(e),wt=r(e,"P",{"data-svelte-h":!0}),d(wt)!=="svelte-1ty9fel"&&(wt.innerHTML=ci),Wl=s(e),Pn=L(e,!1),Nn=s(e),_t=r(e,"P",{"data-svelte-h":!0}),d(_t)!=="svelte-ebm0tg"&&(_t.innerHTML=hi),Jl=s(e),Dn=L(e,!1),An=s(e),Ct=r(e,"P",{"data-svelte-h":!0}),d(Ct)!=="svelte-196y3so"&&(Ct.innerHTML=ui),Kl=s(e),qn=L(e,!1),On=s(e),xt=r(e,"P",{"data-svelte-h":!0}),d(xt)!=="svelte-1npotiy"&&(xt.innerHTML=fi),Gl=s(e),In=L(e,!1),Rn=s(e),$(ge.$$.fragment,e),this.h()},h(){b(h,"id","windows-server-簽署-enterprise-ca"),b(K,"id","debian-簽證使用-windows-server"),Qt.a=Xt,Zt.a=Yt,en.a=tn,b(G,"id","預設-html-網頁設定"),nn.a=ln,b(V,"id","web-server-apache2"),b(U,"id","啟用-https-ssl"),an.a=sn,on.a=rn,pn.a=dn,b(Q,"id","網址重新導向"),mn.a=cn,hn.a=un,b(X,"id","站台登入驗證"),fn.a=gn,b(Z,"id","使用者個人網頁模組-userdir"),b(Y,"id","更換-port"),b(ee,"id","更換站台"),b(te,"id","預設檔案"),$n.a=vn,b(ne,"id","403-forbidden-解決"),wn.a=_n,b(ae,"id","web-server-nginx"),b(se,"id","nginxconf-檢查"),b(ie,"id","限制-ip-存取站台"),Cn.a=xn,b(oe,"id","站台登入驗證-1"),kn.a=bn,b(re,"id","啟用-https-ssl-1"),Hn.a=Ln,b(de,"id","網址重新導向-1"),Tn.a=Sn,b(ce,"id","http-to-https-重新導向"),yn.a=Fn,b(he,"id","負載平衡分流-load-balance"),En.a=Mn,b(ue,"id","更換站台-1"),b(fe,"id","location-匹配選擇機制"),Pn.a=Nn,Dn.a=An,qn.a=On,In.a=Rn},m(e,t){l(e,h,t),l(e,k,t),l(e,p,t),i(p,C),v(_,p,null),i(p,S),v(I,p,null),i(p,Zl),v(ve,p,null),i(p,Yl),v(we,p,null),i(p,ea),v(_e,p,null),i(p,ta),v(Ce,p,null),i(p,na),v(xe,p,null),i(p,la),v(ke,p,null),i(p,aa),i(p,bt),i(p,sa),v(be,p,null),i(p,ia),v(He,p,null),i(p,oa),i(p,Ht),i(p,ra),i(p,Lt),i(p,pa),v(Le,p,null),i(p,da),v(Te,p,null),i(p,ma),v(Se,p,null),i(p,ca),v(ye,p,null),i(p,ha),v(Fe,p,null),i(p,ua),v(Ee,p,null),i(p,fa),v(Me,p,null),i(p,ga),v(Pe,p,null),i(p,$a),v(Ne,p,null),i(p,va),v(De,p,null),l(e,Wn,t),l(e,K,t),l(e,Jn,t),l(e,Ae,t),l(e,Kn,t),Qt.m(bi,e,t),l(e,Xt,t),l(e,qe,t),l(e,Gn,t),Zt.m(Hi,e,t),l(e,Yt,t),l(e,Oe,t),l(e,Vn,t),en.m(Li,e,t),l(e,tn,t),l(e,G,t),l(e,Un,t),nn.m(Ti,e,t),l(e,ln,t),l(e,V,t),l(e,Qn,t),l(e,Ie,t),l(e,Xn,t),l(e,U,t),l(e,Zn,t),l(e,Re,t),l(e,Yn,t),an.m(Si,e,t),l(e,sn,t),l(e,je,t),l(e,el,t),on.m(yi,e,t),l(e,rn,t),l(e,ze,t),l(e,tl,t),pn.m(Fi,e,t),l(e,dn,t),l(e,Tt,t),v(Be,Tt,null),l(e,nl,t),l(e,Q,t),l(e,ll,t),mn.m(Ei,e,t),l(e,cn,t),l(e,O,t),i(O,wa),i(O,St),i(O,_a),i(O,yt),i(O,Ca),v(We,O,null),l(e,al,t),hn.m(Mi,e,t),l(e,un,t),l(e,Je,t),l(e,sl,t),l(e,X,t),l(e,il,t),l(e,M,t),i(M,xa),i(M,Ft),i(M,ka),i(M,Et),i(M,ba),v(Ke,M,null),i(M,Ha),i(M,Mt),i(M,La),l(e,ol,t),fn.m(Pi,e,t),l(e,gn,t),l(e,Z,t),l(e,rl,t),l(e,D,t),i(D,Ta),i(D,Pt),i(D,Sa),i(D,Nt),i(D,ya),v(Ge,D,null),i(D,Fa),i(D,Dt),l(e,pl,t),l(e,Y,t),l(e,dl,t),l(e,P,t),i(P,Ea),i(P,At),i(P,Ma),v(Ve,P,null),i(P,Pa),i(P,qt),i(P,Na),v(Ue,P,null),i(P,Da),l(e,ml,t),l(e,ee,t),l(e,cl,t),l(e,Qe,t),l(e,hl,t),l(e,te,t),l(e,ul,t),l(e,Xe,t),l(e,fl,t),$n.m(Ni,e,t),l(e,vn,t),l(e,Ot,t),v(Ze,Ot,null),l(e,gl,t),l(e,ne,t),l(e,$l,t),l(e,B,t),i(B,Aa),v(Ye,B,null),i(B,qa),i(B,It),l(e,vl,t),wn.m(Di,e,t),l(e,_n,t),l(e,le,t),v(et,le,null),i(le,Oa),i(le,Rt),l(e,wl,t),l(e,ae,t),l(e,_l,t),l(e,tt,t),l(e,Cl,t),l(e,se,t),l(e,xl,t),l(e,nt,t),l(e,kl,t),l(e,ie,t),l(e,bl,t),l(e,lt,t),l(e,Hl,t),Cn.m(Ai,e,t),l(e,xn,t),l(e,W,t),i(W,Ia),v(at,W,null),i(W,Ra),v(st,W,null),l(e,Ll,t),l(e,oe,t),l(e,Tl,t),l(e,it,t),l(e,Sl,t),kn.m(qi,e,t),l(e,bn,t),l(e,re,t),l(e,yl,t),l(e,ot,t),l(e,Fl,t),Hn.m(Oi,e,t),l(e,Ln,t),l(e,pe,t),v(rt,pe,null),i(pe,ja),v(pt,pe,null),l(e,El,t),l(e,de,t),l(e,Ml,t),l(e,dt,t),l(e,Pl,t),Tn.m(Ii,e,t),l(e,Sn,t),l(e,me,t),v(mt,me,null),i(me,za),v(ct,me,null),l(e,Nl,t),l(e,ce,t),l(e,Dl,t),l(e,A,t),i(A,Ba),v(ht,A,null),i(A,Wa),i(A,jt),i(A,Ja),i(A,zt),i(A,Ka),l(e,Al,t),yn.m(Ri,e,t),l(e,Fn,t),l(e,he,t),l(e,ql,t),l(e,ut,t),l(e,Ol,t),En.m(ji,e,t),l(e,Mn,t),l(e,Bt,t),v(ft,Bt,null),l(e,Il,t),l(e,F,t),i(F,Ga),i(F,Wt),i(F,Va),v(gt,F,null),i(F,Ua),i(F,Jt),i(F,Qa),i(F,Kt),i(F,Xa),v($t,F,null),i(F,Za),l(e,Rl,t),l(e,ue,t),l(e,jl,t),l(e,N,t),i(N,Ya),i(N,Gt),i(N,es),i(N,Vt),i(N,ts),v(vt,N,null),i(N,ns),i(N,Ut),i(N,ls),l(e,zl,t),l(e,fe,t),l(e,Bl,t),l(e,wt,t),l(e,Wl,t),Pn.m(zi,e,t),l(e,Nn,t),l(e,_t,t),l(e,Jl,t),Dn.m(Bi,e,t),l(e,An,t),l(e,Ct,t),l(e,Kl,t),qn.m(Wi,e,t),l(e,On,t),l(e,xt,t),l(e,Gl,t),In.m(Ji,e,t),l(e,Rn,t),v(ge,e,t),Vl=!0},p(e,t){const jn={};t&2&&(jn.$$scope={dirty:t,ctx:e}),ge.$set(jn)},i(e){Vl||(u(_.$$.fragment,e),u(I.$$.fragment,e),u(ve.$$.fragment,e),u(we.$$.fragment,e),u(_e.$$.fragment,e),u(Ce.$$.fragment,e),u(xe.$$.fragment,e),u(ke.$$.fragment,e),u(be.$$.fragment,e),u(He.$$.fragment,e),u(Le.$$.fragment,e),u(Te.$$.fragment,e),u(Se.$$.fragment,e),u(ye.$$.fragment,e),u(Fe.$$.fragment,e),u(Ee.$$.fragment,e),u(Me.$$.fragment,e),u(Pe.$$.fragment,e),u(Ne.$$.fragment,e),u(De.$$.fragment,e),u(Be.$$.fragment,e),u(We.$$.fragment,e),u(Ke.$$.fragment,e),u(Ge.$$.fragment,e),u(Ve.$$.fragment,e),u(Ue.$$.fragment,e),u(Ze.$$.fragment,e),u(Ye.$$.fragment,e),u(et.$$.fragment,e),u(at.$$.fragment,e),u(st.$$.fragment,e),u(rt.$$.fragment,e),u(pt.$$.fragment,e),u(mt.$$.fragment,e),u(ct.$$.fragment,e),u(ht.$$.fragment,e),u(ft.$$.fragment,e),u(gt.$$.fragment,e),u($t.$$.fragment,e),u(vt.$$.fragment,e),u(ge.$$.fragment,e),Vl=!0)},o(e){f(_.$$.fragment,e),f(I.$$.fragment,e),f(ve.$$.fragment,e),f(we.$$.fragment,e),f(_e.$$.fragment,e),f(Ce.$$.fragment,e),f(xe.$$.fragment,e),f(ke.$$.fragment,e),f(be.$$.fragment,e),f(He.$$.fragment,e),f(Le.$$.fragment,e),f(Te.$$.fragment,e),f(Se.$$.fragment,e),f(ye.$$.fragment,e),f(Fe.$$.fragment,e),f(Ee.$$.fragment,e),f(Me.$$.fragment,e),f(Pe.$$.fragment,e),f(Ne.$$.fragment,e),f(De.$$.fragment,e),f(Be.$$.fragment,e),f(We.$$.fragment,e),f(Ke.$$.fragment,e),f(Ge.$$.fragment,e),f(Ve.$$.fragment,e),f(Ue.$$.fragment,e),f(Ze.$$.fragment,e),f(Ye.$$.fragment,e),f(et.$$.fragment,e),f(at.$$.fragment,e),f(st.$$.fragment,e),f(rt.$$.fragment,e),f(pt.$$.fragment,e),f(mt.$$.fragment,e),f(ct.$$.fragment,e),f(ht.$$.fragment,e),f(ft.$$.fragment,e),f(gt.$$.fragment,e),f($t.$$.fragment,e),f(vt.$$.fragment,e),f(ge.$$.fragment,e),Vl=!1},d(e){e&&(n(h),n(k),n(p),n(Wn),n(K),n(Jn),n(Ae),n(Kn),Qt.d(),n(Xt),n(qe),n(Gn),Zt.d(),n(Yt),n(Oe),n(Vn),en.d(),n(tn),n(G),n(Un),nn.d(),n(ln),n(V),n(Qn),n(Ie),n(Xn),n(U),n(Zn),n(Re),n(Yn),an.d(),n(sn),n(je),n(el),on.d(),n(rn),n(ze),n(tl),pn.d(),n(dn),n(Tt),n(nl),n(Q),n(ll),mn.d(),n(cn),n(O),n(al),hn.d(),n(un),n(Je),n(sl),n(X),n(il),n(M),n(ol),fn.d(),n(gn),n(Z),n(rl),n(D),n(pl),n(Y),n(dl),n(P),n(ml),n(ee),n(cl),n(Qe),n(hl),n(te),n(ul),n(Xe),n(fl),$n.d(),n(vn),n(Ot),n(gl),n(ne),n($l),n(B),n(vl),wn.d(),n(_n),n(le),n(wl),n(ae),n(_l),n(tt),n(Cl),n(se),n(xl),n(nt),n(kl),n(ie),n(bl),n(lt),n(Hl),Cn.d(),n(xn),n(W),n(Ll),n(oe),n(Tl),n(it),n(Sl),kn.d(),n(bn),n(re),n(yl),n(ot),n(Fl),Hn.d(),n(Ln),n(pe),n(El),n(de),n(Ml),n(dt),n(Pl),Tn.d(),n(Sn),n(me),n(Nl),n(ce),n(Dl),n(A),n(Al),yn.d(),n(Fn),n(he),n(ql),n(ut),n(Ol),En.d(),n(Mn),n(Bt),n(Il),n(F),n(Rl),n(ue),n(jl),n(N),n(zl),n(fe),n(Bl),n(wt),n(Wl),Pn.d(),n(Nn),n(_t),n(Jl),Dn.d(),n(An),n(Ct),n(Kl),qn.d(),n(On),n(xt),n(Gl),In.d(),n(Rn)),w(_),w(I),w(ve),w(we),w(_e),w(Ce),w(xe),w(ke),w(be),w(He),w(Le),w(Te),w(Se),w(ye),w(Fe),w(Ee),w(Me),w(Pe),w(Ne),w(De),w(Be),w(We),w(Ke),w(Ge),w(Ve),w(Ue),w(Ze),w(Ye),w(et),w(at),w(st),w(rt),w(pt),w(mt),w(ct),w(ht),w(ft),w(gt),w($t),w(vt),w(ge,e)}}}function ao(E){let h,T;const k=[E[0],_i];let p={$$slots:{default:[lo]},$$scope:{ctx:E}};for(let C=0;C<k.length;C+=1)p=as(p,k[C]);return h=new Xi({props:p}),{c(){g(h.$$.fragment)},l(C){$(h.$$.fragment,C)},m(C,_){v(h,C,_),T=!0},p(C,[_]){const S=_&1?Zi(k,[_&1&&wi(C[0]),_&0&&wi(_i)]):{};_&2&&(S.$$scope={dirty:_,ctx:C}),h.$set(S)},i(C){T||(u(h.$$.fragment,C),T=!0)},o(C){f(h.$$.fragment,C),T=!1},d(C){w(h,C)}}}const _i={title:"Web",summary:"Self-Signed Certificate + OpenSSL + ADCS + Nginx & Apache2",image:"/badssl.png",alt:"Shellkai Huang",created:"2023-03-14T00:00:00.000Z",updated:"2024-09-22T00:00:00.000Z",tags:["Web","SSL","OS","Nginx","Apache2"],images:[],slug:"/certificate-ca-server/+page.svelte.md",path:"/certificate-ca-server",toc:[{depth:2,slug:"windows-server-簽署-enterprise-ca",title:"Windows Server 簽署 (Enterprise CA)"},{depth:2,slug:"debian-簽證使用-windows-server",title:"Debian (簽證使用 Windows Server)"},{depth:2,slug:"預設-html-網頁設定",title:"預設 html 網頁設定"},{depth:2,slug:"web-server-apache2",title:"Web Server (apache2)"},{depth:3,slug:"啟用-https-ssl",title:"啟用 https (SSL)"},{depth:3,slug:"網址重新導向",title:"網址重新導向"},{depth:3,slug:"站台登入驗證",title:"站台登入驗證"},{depth:3,slug:"使用者個人網頁模組-userdir",title:"使用者個人網頁模組 (userdir)"},{depth:3,slug:"更換-port",title:"更換 Port"},{depth:3,slug:"更換站台",title:"更換站台"},{depth:3,slug:"預設檔案",title:"預設檔案"},{depth:3,slug:"403-forbidden-解決",title:"403 Forbidden 解決"},{depth:2,slug:"web-server-nginx",title:"Web Server (Nginx)"},{depth:3,slug:"nginxconf-檢查",title:"nginx.conf 檢查"},{depth:3,slug:"限制-ip-存取站台",title:"限制 IP 存取站台"},{depth:3,slug:"站台登入驗證-1",title:"站台登入驗證"},{depth:3,slug:"啟用-https-ssl-1",title:"啟用 https (SSL)"},{depth:3,slug:"網址重新導向-1",title:"網址重新導向"},{depth:3,slug:"http-to-https-重新導向",title:"http to https 重新導向"},{depth:3,slug:"負載平衡分流-load-balance",title:"負載平衡/分流 (Load Balance)"},{depth:3,slug:"更換站台-1",title:"更換站台"},{depth:3,slug:"location-匹配選擇機制",title:"location (匹配選擇機制)"}]};function so(E,h,T){return E.$$set=k=>{T(0,h=as(as({},h),vi(k)))},h=vi(h),[h]}class mo extends xi{constructor(h){super(),ki(this,h,so,ao,Ci,{})}}export{mo as component};
