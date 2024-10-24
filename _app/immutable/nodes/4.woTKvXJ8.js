import{s as Bs,a as ai,e as vs,n as Ws}from"../chunks/scheduler.BWDpjmD3.js";import{S as Js,i as Ks,k as c,l as u,m as f,n as g,o as $,p as v,e as o,s as a,t as m,H as k,c as r,q as p,f as i,a as L,b as h,d as n,r as b,u as H,g as l,h as s}from"../chunks/index.Cp4SeObe.js";import{P as Gs,g as Us,a as ws}from"../chunks/post_layout.BnlSLxll.js";import{I as w}from"../chunks/footer.BH4J_is4.js";import{T as Vs}from"../chunks/table.Bh6zlIo4.js";function Qs(W){let _,P="<tr><th>參數</th> <th>說明</th> <th>是否立即採用</th></tr>",S,d,x="<tr><td>/</td> <td>最長路徑</td> <td>否</td></tr> <tr><td>= /</td> <td>精準匹配</td> <td>是</td></tr> <tr><td>^~ /</td> <td>類似最長路徑，但會馬上採用</td> <td>是</td></tr> <tr><td>~ /</td> <td>正規表示法，區分大小寫</td> <td>是</td></tr> <tr><td>~* /</td> <td>正規表示法，不區分大小寫</td> <td>是</td></tr>";return{c(){_=o("thead"),_.innerHTML=P,S=a(),d=o("tbody"),d.innerHTML=x},l(C){_=r(C,"THEAD",{"data-svelte-h":!0}),p(_)!=="svelte-10be3iz"&&(_.innerHTML=P),S=i(C),d=r(C,"TBODY",{"data-svelte-h":!0}),p(d)!=="svelte-1hqfv7t"&&(d.innerHTML=x)},m(C,q){l(C,_,q),l(C,S,q),l(C,d,q)},p:Ws,d(C){C&&(n(_),n(S),n(d))}}}function Xs(W){let _,P='<a href="#windows-server-簽署-enterprise-ca">Windows Server 簽署 (Enterprise CA)</a>',S,d,x,C,q,$e,Zl,ve,Yl,we,ea,_e,ta,Ce,na,xe,la,ke,aa,bt,ii="*",ia,be,sa,He,oa,Ht,si="使用 Chrome Engine 的瀏覽器會出現安全性錯誤",ra,Tt,oi="http://[hostname].[domain]/certsrv",pa,Te,da,Le,ma,Se,ha,ye,ca,Fe,ua,Ee,fa,Me,ga,Pe,$a,Ne,va,De,Wn,J,ri='<a href="#debian-簽證使用-windows-server">Debian (簽證使用 Windows Server)</a>',Jn,Ae,pi=`安裝 OpenSSL：<code>apt install openssl</code> <strong>生成帶 SAN 值 CA 憑證的兩種方式
方式 1：</strong>
一行指令生成帶 SAN 值 CA 請求 (CR)：`,Kn,Qt,Cs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>openssl req -new -newkey rsa:2048 -nodes -keyout [keyname].key -out [csrname].csr -subj "/CN=[domainname]/" -addext "subjectAltName = DNS:[dnsname].[domainname],DNS:＊.[domain],DNS:[dnsname]"</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Xt,qe,di=`<strong>方式 2：</strong>
建立一個設定 CA 的資料夾並更換目前路徑：
<code>mkdir /tmp/CA/</code> <code>cd /tmp/CA</code>
生成包含 SAN 的 CA 設定檔並編輯：
<code>touch san.conf</code> <code>vim san.conf</code>
在 san.conf 內寫入以下資料：`,Gn,Zt,xs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>[ req ]
default_bits       = 2048
distinguished_name = req_distinguished_name
req_extensions     = req_ext
[ req_distinguished_name ]
commonName                 = Common Name (e.g. server FQDN or YOUR name)
[alt_names]
DNS.1   = [ur_dns_server.1]
DNS.2   = [ur_dns_server.2]</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Yt,Oe,mi=`儲存後用 OpenSSL 建立 CA 憑證請求：
<code>openssl req -out [urcsrname].csr -newkey rsa:2048 -nodes -keyout [urkeyname].key -config san.cnf</code>
將 key 放至 apache2 資料夾內：<code>mv [urkeyname].key /etc/apache2</code>
將憑證請求放至與 Windows Server 端的共享資料夾內：<code>mv [urcsrname].csr /share</code>
在 Windows Server 操作簽署完憑證後，將 Windows 用的 cer 格式轉為 Linux 用的 crt 格式，並將生成結果存於 apache2 資料夾內：`,Un,en,ks=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>openssl x509 -in /share/[urcername].cer -out /etc/apache2/[urcrtname].crt -inform DER</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,tn,K,hi='<a href="#預設-html-網頁設定">預設 html 網頁設定</a>',Vn,nn,bs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>vim /var/www/html/index.html</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,ln,G,ci='<a href="#web-server-apache2">Web Server (apache2)</a>',Qn,Re,ui=`安裝 apache2：<code>apt install apache2</code>
重啟 apache2 服務：<code>service apache2 restart</code>`,Xn,U,fi='<a href="#啟用-https-ssl">啟用 https (SSL)</a>',Zn,je,gi="啟用 SSL & ReWrite Engine",Yn,an,Hs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>a2enmod ssl
a2enmod rewrite</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,sn,Ie,$i=`編輯 apache2 的設定檔：
<code>vim /etc/apache2/apache2.conf</code>
在文件末端加入以下資料：`,el,on,Ts=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory /var/www/html&gt;
AllowOverride All
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,rn,ze,vi=`編輯 apache2 的網站設定檔：<code>vim /etc/apache2/sites-avaliable/000-default.conf</code>
寫入以下資料：`,tl,pn,Ls=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;VirtualHost *:443&gt;
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog $&#123;APACHE_LOG_DIR&#125;/error.log
        CustomLog $&#123;APACHE_LOG_DIR&#125;/access.log combined
        SSLEngine on
        SSLCertificateFile /etc/apache2/[urcrtfile].crt
        SSLCertificateKeyFile /etc/apache2/[urkeyfile].key
&lt;/VirtualHost&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,dn,Lt,Be,nl,V,wi='<a href="#網址重新導向">網址重新導向</a>',ll,mn,Ss=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 將 http://www.wsdomain.com.tw/outside 重新導向至 http://outside.out</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,hn,A,wa,St,_i="vim /etc/apache2/sites-avaliable/000-default.conf",_a,yt,Ci="Redirect /outside http://www.outside.out",Ca,We,al,cn,ys=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>// 將 http://www.wsdomain.com.tw 重新導向至 https://www.wsdomain.com.tw</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,un,Je,xi="編輯 apache2 的網站設定檔：<code>vim /etc/apache2/sites-avaliable/000-default.conf</code>加入 <code>Redirect / https://www.wsdomain.com.tw</code>",il,Q,ki='<a href="#站台登入驗證">站台登入驗證</a>',sl,y,xa,Ft,bi="touch /etc/apache2/.htpasswd",ka,Et,Hi="htpasswd /etc/apache2/.htpasswd [username]",ba,Ke,Ha,Mt,Ti="vim /etc/apache2/sites-avaliable/000-default.conf",Ta,ol,fn,Fs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory /var/www/html&gt;
AuthType Basic
AuthName [loginmessage]
AuthUserFile /etc/apache2/.htpasswd
Require valid-user
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,gn,X,Li='<a href="#使用者個人網頁模組-userdir">使用者個人網頁模組 (userdir)</a>',rl,M,La,Pt,Si="a2enmod userdir",Sa,Nt,yi="vim /etc/apache2/mods-enabled/userdir.conf",ya,Ge,Fa,Dt,Fi="chmod -R 755 /[homedir]/[webdir]",pl,Z,Ei='<a href="#更換-port">更換 Port</a>',dl,F,Ea,At,Mi="vim /etc/apache2/port.conf",Ma,Ue,Pa,qt,Pi="vim /etc/apache2/sites-avaliable/000-default.conf",Na,Ve,Da,ml,Y,Ni='<a href="#更換站台">更換站台</a>',hl,Qe,Di=`先關閉預設站台：<code>a2dissite 000-default.conf</code>
再啟用你要的站台：<code>a2ensite [ursitename]</code>`,cl,ee,Ai='<a href="#預設檔案">預設檔案</a>',ul,Xe,qi="若網頁檔名不是 index.html 或 index.htm 需要設定預設檔案名稱，開啟設定檔：<code>vim /etc/apache2/apache2.conf</code>",fl,$n,Es=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory $PATH$&gt;
    DirectoryIndex [filename]
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,vn,Ot,Ze,gl,te,Oi='<a href="#403-forbidden-解決">403 Forbidden 解決</a>',$l,I,Aa,Ye,qa,Rt,Ri="vim /etc/apache2/apache2.conf",vl,wn,Ms=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>&lt;Directory $PATH$&gt;
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
&lt;/Directory&gt;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,_n,ne,et,Oa,jt,ji="service apache2 restart",wl,le,Ii='<a href="#web-server-nginx">Web Server (Nginx)</a>',_l,tt,zi=`安裝 Nginx：<code>apt install nginx</code>
重啟 Nginx 服務：<code>service nginx restart</code>`,Cl,ae,Bi='<a href="#nginxconf-檢查">nginx.conf 檢查</a>',xl,nt,Wi="<code>nginx -t</code>",kl,ie,Ji='<a href="#限制-ip-存取站台">限制 IP 存取站台</a>',bl,lt,Ki=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
編輯 server 區域下的 location 區域：`,Hl,Cn,Ps=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code># 黑名單設定方法
location / &#123;
deny 192.168.10.55;
deny 192.168.1.0/24;
&#125;
# 白名單設定方法
location / &#123;
allow 192.168.10.55;
allow 192.168.1.0/24;
deny all; #需要禁止全部 IP 存取才可設定白名單 (預設為 allow all)
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,xn,z,Ra,at,ja,it,Tl,se,Gi='<a href="#站台登入驗證-1">站台登入驗證</a>',Ll,st,Ui=`安裝 apache2-utils (會使用到 htpasswd 指令)：<code>apt install apache2-utils</code>
建立給 Nginx 驗證登入使用者資訊的文件：<code>touch /etc/nginx/.htpasswd</code>
新增使用者到 htpasswd：
<code>htpasswd /etc/nginx/.htpasswd [username]</code>
新增後，編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
加入登入功能到 location 區塊，其中 auth_basic 是要求登入時會顯示的訊息：`,Sl,kn,Ns=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>location / &#123;
        auth_basic "[loginmessage]";
        auth_basic_user_file /etc/nginx/.htpasswd;
        &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,bn,oe,Vi='<a href="#啟用-https-ssl-1">啟用 https (SSL)</a>',yl,ot,Qi=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
在 server 區塊下設定 SSL：`,Fl,Hn,Ds=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>server &#123;
    # SSL configuratuion
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;
    ssl_certificate /etc/nginx/[urcrtfile].crt;
    ssl_certificate_key /etc/nginx/[urkeyfile].key;
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Tn,re,rt,Ia,pt,El,pe,Xi='<a href="#網址重新導向-1">網址重新導向</a>',Ml,dt,Zi=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
在 location 區塊下設定：`,Pl,Ln,As=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code># 當存取 test.com 時會重新導向至 redirect.com
location / &#123;
    return 301 http://redirect.com;
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Sn,de,mt,za,ht,Nl,me,Yi='<a href="#http-to-https-重新導向">http to https 重新導向</a>',Dl,N,Ba,ct,Wa,It,es="return",Ja,zt,ts="注意：不是寫在 location 區塊內",Ka,Al,yn,qs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>return 301 https://$host$request_uri;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Fn,he,ns='<a href="#負載平衡分流-load-balance">負載平衡/分流 (Load Balance)</a>',ql,ut,ls=`編輯 Nginx 的網站設定檔：<code>vim /etc/nginx/sites-available/default</code>
新增 upstream 區塊並編輯 server 區塊：`,Ol,En,Os=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF"><div class='code-container'><code>upstream [load_balance_URL] &#123;
    server [server1]:[port];
    server [server2]:[port];
    ...
&#125;
location / &#123;
    proxy_pass http://[load_balance_URL];
&#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash= was not set up for Shiki to use, and so there is no code highlighting -->`,Mn,Bt,ft,Rl,T,Ga,Wt,as="access_log /var/log/nginx/access.log upstreamlog;",Ua,gt,Va,Jt,is="upstreamlog",Qa,Kt,ss="tail -f /var/log/nginx/access.log",Xa,$t,Za,jl,ce,os='<a href="#更換站台-1">更換站台</a>',Il,E,Ya,Gt,rs="vim /etc/nginx/nginx.conf",ei,Ut,ps="include /etc/nginx/sites-enables/*;",ti,vt,ni,Vt,ds="include",li,zl,ue,ms='<a href="#location-匹配選擇機制">location (匹配選擇機制)</a>',Bl,wt,hs="僅使用<code>/</code>表示一般配置 (最長路徑)，會<strong>搜尋全部的 location 後才挑選出最符合請求路徑的配置檔</strong> (有可能被其它規則攔截)",Wl,Pn,Rs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>
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
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,Nn,_t,cs="使用<code>= /</code>代表精準匹配，需<strong>完全符合且匹配，確認後立即採用</strong>",Jl,Dn,js=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 只能 http://www.domain.com 才能符合，後面不能帶任何字元，e.g. http://www.domain.com (O), http://www.domain.com/abc (X)
    location = / &#123;
        ....
    &#125;

    # 來自 http://www.domain.com/news/taiwan/taipei 的要求會立即採用此配置
    location = /news/taiwan/taipei &#123;
        ....
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,An,Ct,us="使用<code>~ /</code>代表使用正規表示法來做匹配，會<strong>區分大小寫</strong>，若要<strong>不區分大小寫需使用</strong><code>~* /</code>，由於第一個匹配到的規則設定會立即採用，所以採用此種方式的配置其順序很重要",Kl,qn,Is=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 1. 來自 http://www.domain.com/images 開頭的要求會匹配此規則且立即採用該配置，但 http://www.domain.com/Images 開頭的要求則不符合該規則
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
    &#125;  </code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,On,xt,fs="使用<code>^~</code>代表排除正規表示法的匹配，類似於一般配置，不同的是一旦符合即馬上採用該配置",Gl,Rn,zs=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="="><div class='code-container'><code>    # 匹配到所有請求，但還不會馬上採用，會繼續往下搜尋是否有其它較長符合路徑的項目
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
    &#125;</code></div></pre><!-- Note from shiki-twoslash: the language bash== was not set up for Shiki to use, and so there is no code highlighting -->`,jn,fe,Ul;return C=new w({props:{src:"https://hackmd.io/_uploads/rJdQha3cn.png"}}),$e=new w({props:{src:"https://hackmd.io/_uploads/HJRbIwVpn.png"}}),ve=new w({props:{src:"https://hackmd.io/_uploads/H1-B26292.png"}}),we=new w({props:{src:"https://hackmd.io/_uploads/SJ6HnTnq3.png"}}),_e=new w({props:{src:"https://hackmd.io/_uploads/SJ28n625h.png"}}),Ce=new w({props:{src:"https://hackmd.io/_uploads/SyHwna29h.png"}}),xe=new w({props:{src:"https://hackmd.io/_uploads/SkBL8v4p3.png"}}),ke=new w({props:{src:"https://hackmd.io/_uploads/ByPO3Th9n.png"}}),be=new w({props:{src:"https://hackmd.io/_uploads/By9Fn63q2.png"}}),He=new w({props:{src:"https://hackmd.io/_uploads/S1Qchphcn.png"}}),Te=new w({props:{src:"https://hackmd.io/_uploads/BJ6jPDVpn.png"}}),Le=new w({props:{src:"https://hackmd.io/_uploads/rkNjhp352.png"}}),Se=new w({props:{src:"https://hackmd.io/_uploads/SJTo26n53.png"}}),ye=new w({props:{src:"https://hackmd.io/_uploads/SkLhhanqn.png"}}),Fe=new w({props:{src:"https://hackmd.io/_uploads/rkepnTn5n.png"}}),Ee=new w({props:{src:"https://hackmd.io/_uploads/BkdTh6nqn.png"}}),Me=new w({props:{src:"https://hackmd.io/_uploads/r1rA262q3.png"}}),Pe=new w({props:{src:"https://hackmd.io/_uploads/HJhA26h52.png"}}),Ne=new w({props:{src:"https://hackmd.io/_uploads/HJNJT63q2.png"}}),De=new w({props:{src:"https://hackmd.io/_uploads/Bknk6p352.png"}}),Be=new w({props:{src:"https://hackmd.io/_uploads/B1vgTT2cn.png"}}),We=new w({props:{src:"https://hackmd.io/_uploads/rJG-6p39h.png"}}),Ke=new w({props:{src:"https://hackmd.io/_uploads/SkdzaRyJA.png",alt:"image"}}),Ge=new w({props:{src:"https://hackmd.io/_uploads/SkPT4vlAT.png",alt:"image"}}),Ue=new w({props:{src:"https://hackmd.io/_uploads/rySLPmSmT.png",alt:"image.png"}}),Ve=new w({props:{src:"https://hackmd.io/_uploads/r1q8dmrXa.png",alt:"image.png"}}),Ze=new w({props:{src:"https://hackmd.io/_uploads/rka5bPgC6.png",alt:"image"}}),Ye=new w({props:{src:"https://hackmd.io/_uploads/S1RlxPg0a.png",alt:"image"}}),et=new w({props:{src:"https://hackmd.io/_uploads/HkNrQLRRp.png",alt:"image"}}),at=new w({props:{src:"https://hackmd.io/_uploads/SkdwHlNeT.png"}}),it=new w({props:{src:"https://hackmd.io/_uploads/rJwKoyVga.png"}}),rt=new w({props:{src:"https://hackmd.io/_uploads/ry9yNBNlp.png"}}),pt=new w({props:{src:"https://hackmd.io/_uploads/BkQEIB4lT.png"}}),mt=new w({props:{src:"https://hackmd.io/_uploads/r1ycdB4lT.png"}}),ht=new w({props:{src:"https://hackmd.io/_uploads/BynrFHVgT.png"}}),ct=new w({props:{src:"https://hackmd.io/_uploads/ryx5ruBd0.png",alt:"image"}}),ft=new w({props:{src:"https://hackmd.io/_uploads/ByAIZpGpp.png",alt:"image"}}),gt=new w({props:{src:"https://hackmd.io/_uploads/HJyGL6Maa.png",alt:"image"}}),$t=new w({props:{src:"https://hackmd.io/_uploads/S1IqXCGpa.png",alt:"image"}}),vt=new w({props:{src:"https://hackmd.io/_uploads/S1rkLCfa6.png",alt:"image"}}),fe=new Vs({props:{$$slots:{default:[Qs]},$$scope:{ctx:W}}}),{c(){_=o("h2"),_.innerHTML=P,S=a(),d=o("p"),x=m(`安裝 CA Server 提供簽證服務
(選擇 Certification Authority 及 Certification Authority Web Enrollment)
`),c(C.$$.fragment),q=m(`
使用MMC請求CA簽證
`),c($e.$$.fragment),Zl=m(`
選擇Computer account
`),c(ve.$$.fragment),Yl=m(`
點開 Personal > Certificates
再按右鍵選擇 All Tasks > Advanced Operations > Create Custom Request
`),c(we.$$.fragment),ea=m(`
選擇 Proceed without enrollment policy
`),c(_e.$$.fragment),ta=a(),c(Ce.$$.fragment),na=m(`
設定簽證資訊：Details > Properties
`),c(xe.$$.fragment),la=a(),c(ke.$$.fragment),aa=m(`
到 Subject 欄位加入 Common name 和 DNS (`),bt=o("code"),bt.textContent=ii,ia=m(`為目的網域之萬用類型)
`),c(be.$$.fragment),sa=m(`
到 Private Key 欄位點開 Key options
將 Key Size 設為 2048 並勾選 Make private key exportable
`),c(He.$$.fragment),oa=m(`
使用 Internet Explorer 進行簽證 (`),Ht=o("strong"),Ht.textContent=si,ra=m(`)
前往`),Tt=o("code"),Tt.textContent=oi,pa=m(`並輸入帳號密碼
選擇 Request a certificate
`),c(Te.$$.fragment),da=m(`
選擇 advanced certificate request
`),c(Le.$$.fragment),ma=m(`
選擇  Submit a certificate request using a base64-encoded CMC or PKCS #10 file, or submit a renewal request by using a base-64-encoded PKCS #7 file.
`),c(Se.$$.fragment),ha=m(`
打開剛剛建立好的請求檔案
`),c(ye.$$.fragment),ca=m(`
複製並貼至 Internet Explorer 內
並將 Certificate Template 類型選擇 Web Server 後按 Submit
`),c(Fe.$$.fragment),ua=m(`
生成完畢後，選擇 Download certificate 來下載簽證
`),c(Ee.$$.fragment),fa=m(`
到 IIS 的 Server Certificate 並選擇 Complete Certificate Request
`),c(Me.$$.fragment),ga=m(`
導入剛剛下載的簽證，並設定一個 Friendly name
`),c(Pe.$$.fragment),$a=m(`
設定 https 的網站，導入簽證
`),c(Ne.$$.fragment),va=m(`
即完成了簽證，前往目標網站時不會出現安全性錯誤
`),c(De.$$.fragment),Wn=a(),J=o("h2"),J.innerHTML=ri,Jn=a(),Ae=o("p"),Ae.innerHTML=pi,Kn=a(),Qt=new k(!1),Xt=a(),qe=o("p"),qe.innerHTML=di,Gn=a(),Zt=new k(!1),Yt=a(),Oe=o("p"),Oe.innerHTML=mi,Un=a(),en=new k(!1),tn=a(),K=o("h2"),K.innerHTML=hi,Vn=a(),nn=new k(!1),ln=a(),G=o("h2"),G.innerHTML=ci,Qn=a(),Re=o("p"),Re.innerHTML=ui,Xn=a(),U=o("h3"),U.innerHTML=fi,Zn=a(),je=o("p"),je.textContent=gi,Yn=a(),an=new k(!1),sn=a(),Ie=o("p"),Ie.innerHTML=$i,el=a(),on=new k(!1),rn=a(),ze=o("p"),ze.innerHTML=vi,tl=a(),pn=new k(!1),dn=a(),Lt=o("p"),c(Be.$$.fragment),nl=a(),V=o("h3"),V.innerHTML=wi,ll=a(),mn=new k(!1),hn=a(),A=o("p"),wa=m("編輯 apache2 的網站設定檔："),St=o("code"),St.textContent=_i,_a=m("加入 "),yt=o("code"),yt.textContent=Ci,Ca=a(),c(We.$$.fragment),al=a(),cn=new k(!1),un=a(),Je=o("p"),Je.innerHTML=xi,il=a(),Q=o("h3"),Q.innerHTML=ki,sl=a(),y=o("p"),xa=m("建立給 apache2 驗證登入使用者資訊的文件："),Ft=o("code"),Ft.textContent=bi,ka=m(`
新增使用者到 htpasswd：
`),Et=o("code"),Et.textContent=Hi,ba=a(),c(Ke.$$.fragment),Ha=m(`
新增後，編輯 apache2 的網站設定檔：`),Mt=o("code"),Mt.textContent=Ti,Ta=m(`
加入登入功能，其中 AuthName 是要求登入時會顯示的訊息`),ol=a(),fn=new k(!1),gn=a(),X=o("h3"),X.innerHTML=Li,rl=a(),M=o("p"),La=m("啟用模組："),Pt=o("code"),Pt.textContent=Si,Sa=m(`
編輯模組設定檔：`),Nt=o("code"),Nt.textContent=yi,ya=a(),c(Ge.$$.fragment),Fa=m(`
其中第一行的意思是站台會存取使用者目錄中 html 資料夾內的檔案，若使用者目錄中沒有此資料夾則網頁會顯示「Not Found」，預設值是 public_html
第二行是不為哪些使用者啟用站台，預設值是 root 使用者
若啟用了該模組，也要記得將目錄的權限更改為755：`),Dt=o("code"),Dt.textContent=Fi,pl=a(),Z=o("h3"),Z.innerHTML=Ei,dl=a(),F=o("p"),Ea=m("編輯 Port 設定檔："),At=o("code"),At.textContent=Mi,Ma=a(),c(Ue.$$.fragment),Pa=m(`
如果要改 http 的 Port：將 80 改成你要的 Port
如果要改 https 的 Port：將 443 (兩個) 改成你要的 Port
最後編輯網站設定檔：`),qt=o("code"),qt.textContent=Pi,Na=a(),c(Ve.$$.fragment),Da=m(`
將最上方的 80 改成你要的 Port`),ml=a(),Y=o("h3"),Y.innerHTML=Ni,hl=a(),Qe=o("p"),Qe.innerHTML=Di,cl=a(),ee=o("h3"),ee.innerHTML=Ai,ul=a(),Xe=o("p"),Xe.innerHTML=qi,fl=a(),$n=new k(!1),vn=a(),Ot=o("p"),c(Ze.$$.fragment),gl=a(),te=o("h3"),te.innerHTML=Oi,$l=a(),I=o("p"),Aa=m(`在更改站台路徑後可能會出現 403 Forbidden 的問題
`),c(Ye.$$.fragment),qa=m(`
開啟設定檔：`),Rt=o("code"),Rt.textContent=Ri,vl=a(),wn=new k(!1),_n=a(),ne=o("p"),c(et.$$.fragment),Oa=m(`
設定後重啟 apache2：`),jt=o("code"),jt.textContent=ji,wl=a(),le=o("h2"),le.innerHTML=Ii,_l=a(),tt=o("p"),tt.innerHTML=zi,Cl=a(),ae=o("h3"),ae.innerHTML=Bi,xl=a(),nt=o("p"),nt.innerHTML=Wi,kl=a(),ie=o("h3"),ie.innerHTML=Ji,bl=a(),lt=o("p"),lt.innerHTML=Ki,Hl=a(),Cn=new k(!1),xn=a(),z=o("p"),Ra=m(`註：這裡設定有先後的層級之分，若在白名單內把deny all寫在allow的前面會使allow設定不運作
若站台存取遭拒會顯示：
`),c(at.$$.fragment),ja=a(),c(it.$$.fragment),Tl=a(),se=o("h3"),se.innerHTML=Gi,Ll=a(),st=o("p"),st.innerHTML=Ui,Sl=a(),kn=new k(!1),bn=a(),oe=o("h3"),oe.innerHTML=Vi,yl=a(),ot=o("p"),ot.innerHTML=Qi,Fl=a(),Hn=new k(!1),Tn=a(),re=o("p"),c(rt.$$.fragment),Ia=a(),c(pt.$$.fragment),El=a(),pe=o("h3"),pe.innerHTML=Xi,Ml=a(),dt=o("p"),dt.innerHTML=Zi,Pl=a(),Ln=new k(!1),Sn=a(),de=o("p"),c(mt.$$.fragment),za=a(),c(ht.$$.fragment),Nl=a(),me=o("h3"),me.innerHTML=Yi,Dl=a(),N=o("p"),Ba=m(`與前面重新導向相似，但是需要將 http 和 https 站台分開來寫
`),c(ct.$$.fragment),Wa=m(`
在 http 的站台內寫 `),It=o("code"),It.textContent=es,Ja=m(` 到 https
`),zt=o("strong"),zt.textContent=ts,Ka=m(`
若一個站台對到多個 DNS 紀錄可以寫為`),Al=a(),yn=new k(!1),Fn=a(),he=o("h3"),he.innerHTML=ns,ql=a(),ut=o("p"),ut.innerHTML=ls,Ol=a(),En=new k(!1),Mn=a(),Bt=o("p"),c(ft.$$.fragment),Rl=a(),T=o("p"),Ga=m("若要監察存取紀錄可以在站台檔案的開頭新增 log 格式，並在 server 區塊新增 "),Wt=o("code"),Wt.textContent=as,Ua=m(`：
`),c(gt.$$.fragment),Va=m(`
註：最後的`),Jt=o("code"),Jt.textContent=is,Qa=m(`指的是給 log 的格式名稱
再用指令`),Kt=o("code"),Kt.textContent=ss,Xa=m(` 實時監察站台存取紀錄：
`),c($t.$$.fragment),Za=m(`
只要出現設定檔中的多個 IP 就代表負載設定成功`),jl=a(),ce=o("h3"),ce.innerHTML=os,Il=a(),E=o("p"),Ya=m("編輯 Nginx 設定檔："),Gt=o("code"),Gt.textContent=rs,ei=m(`
找到 `),Ut=o("code"),Ut.textContent=ps,ti=a(),c(vt.$$.fragment),ni=m(`
可以自行新增或編輯，讓 `),Vt=o("code"),Vt.textContent=ds,li=m(" 後面接自己站台的路徑，並把預設站台移除"),zl=a(),ue=o("h3"),ue.innerHTML=ms,Bl=a(),wt=o("p"),wt.innerHTML=hs,Wl=a(),Pn=new k(!1),Nn=a(),_t=o("p"),_t.innerHTML=cs,Jl=a(),Dn=new k(!1),An=a(),Ct=o("p"),Ct.innerHTML=us,Kl=a(),qn=new k(!1),On=a(),xt=o("p"),xt.innerHTML=fs,Gl=a(),Rn=new k(!1),jn=a(),c(fe.$$.fragment),this.h()},l(e){_=r(e,"H2",{id:!0,"data-svelte-h":!0}),p(_)!=="svelte-fp9yc5"&&(_.innerHTML=P),S=i(e),d=r(e,"P",{});var t=L(d);x=h(t,`安裝 CA Server 提供簽證服務
(選擇 Certification Authority 及 Certification Authority Web Enrollment)
`),u(C.$$.fragment,t),q=h(t,`
使用MMC請求CA簽證
`),u($e.$$.fragment,t),Zl=h(t,`
選擇Computer account
`),u(ve.$$.fragment,t),Yl=h(t,`
點開 Personal > Certificates
再按右鍵選擇 All Tasks > Advanced Operations > Create Custom Request
`),u(we.$$.fragment,t),ea=h(t,`
選擇 Proceed without enrollment policy
`),u(_e.$$.fragment,t),ta=i(t),u(Ce.$$.fragment,t),na=h(t,`
設定簽證資訊：Details > Properties
`),u(xe.$$.fragment,t),la=i(t),u(ke.$$.fragment,t),aa=h(t,`
到 Subject 欄位加入 Common name 和 DNS (`),bt=r(t,"CODE",{"data-svelte-h":!0}),p(bt)!=="svelte-1xg83ew"&&(bt.textContent=ii),ia=h(t,`為目的網域之萬用類型)
`),u(be.$$.fragment,t),sa=h(t,`
到 Private Key 欄位點開 Key options
將 Key Size 設為 2048 並勾選 Make private key exportable
`),u(He.$$.fragment,t),oa=h(t,`
使用 Internet Explorer 進行簽證 (`),Ht=r(t,"STRONG",{"data-svelte-h":!0}),p(Ht)!=="svelte-iwo5gz"&&(Ht.textContent=si),ra=h(t,`)
前往`),Tt=r(t,"CODE",{"data-svelte-h":!0}),p(Tt)!=="svelte-13zni43"&&(Tt.textContent=oi),pa=h(t,`並輸入帳號密碼
選擇 Request a certificate
`),u(Te.$$.fragment,t),da=h(t,`
選擇 advanced certificate request
`),u(Le.$$.fragment,t),ma=h(t,`
選擇  Submit a certificate request using a base64-encoded CMC or PKCS #10 file, or submit a renewal request by using a base-64-encoded PKCS #7 file.
`),u(Se.$$.fragment,t),ha=h(t,`
打開剛剛建立好的請求檔案
`),u(ye.$$.fragment,t),ca=h(t,`
複製並貼至 Internet Explorer 內
並將 Certificate Template 類型選擇 Web Server 後按 Submit
`),u(Fe.$$.fragment,t),ua=h(t,`
生成完畢後，選擇 Download certificate 來下載簽證
`),u(Ee.$$.fragment,t),fa=h(t,`
到 IIS 的 Server Certificate 並選擇 Complete Certificate Request
`),u(Me.$$.fragment,t),ga=h(t,`
導入剛剛下載的簽證，並設定一個 Friendly name
`),u(Pe.$$.fragment,t),$a=h(t,`
設定 https 的網站，導入簽證
`),u(Ne.$$.fragment,t),va=h(t,`
即完成了簽證，前往目標網站時不會出現安全性錯誤
`),u(De.$$.fragment,t),t.forEach(n),Wn=i(e),J=r(e,"H2",{id:!0,"data-svelte-h":!0}),p(J)!=="svelte-1rb0la7"&&(J.innerHTML=ri),Jn=i(e),Ae=r(e,"P",{"data-svelte-h":!0}),p(Ae)!=="svelte-11vzsag"&&(Ae.innerHTML=pi),Kn=i(e),Qt=b(e,!1),Xt=i(e),qe=r(e,"P",{"data-svelte-h":!0}),p(qe)!=="svelte-1byt50y"&&(qe.innerHTML=di),Gn=i(e),Zt=b(e,!1),Yt=i(e),Oe=r(e,"P",{"data-svelte-h":!0}),p(Oe)!=="svelte-1ypaz3v"&&(Oe.innerHTML=mi),Un=i(e),en=b(e,!1),tn=i(e),K=r(e,"H2",{id:!0,"data-svelte-h":!0}),p(K)!=="svelte-1g4mnaq"&&(K.innerHTML=hi),Vn=i(e),nn=b(e,!1),ln=i(e),G=r(e,"H2",{id:!0,"data-svelte-h":!0}),p(G)!=="svelte-czte7a"&&(G.innerHTML=ci),Qn=i(e),Re=r(e,"P",{"data-svelte-h":!0}),p(Re)!=="svelte-1t8euxs"&&(Re.innerHTML=ui),Xn=i(e),U=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(U)!=="svelte-1afepzh"&&(U.innerHTML=fi),Zn=i(e),je=r(e,"P",{"data-svelte-h":!0}),p(je)!=="svelte-1bj1fjz"&&(je.textContent=gi),Yn=i(e),an=b(e,!1),sn=i(e),Ie=r(e,"P",{"data-svelte-h":!0}),p(Ie)!=="svelte-wm8zjk"&&(Ie.innerHTML=$i),el=i(e),on=b(e,!1),rn=i(e),ze=r(e,"P",{"data-svelte-h":!0}),p(ze)!=="svelte-iuw89k"&&(ze.innerHTML=vi),tl=i(e),pn=b(e,!1),dn=i(e),Lt=r(e,"P",{});var In=L(Lt);u(Be.$$.fragment,In),In.forEach(n),nl=i(e),V=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(V)!=="svelte-me9s10"&&(V.innerHTML=wi),ll=i(e),mn=b(e,!1),hn=i(e),A=r(e,"P",{});var kt=L(A);wa=h(kt,"編輯 apache2 的網站設定檔："),St=r(kt,"CODE",{"data-svelte-h":!0}),p(St)!=="svelte-1lg9tco"&&(St.textContent=_i),_a=h(kt,"加入 "),yt=r(kt,"CODE",{"data-svelte-h":!0}),p(yt)!=="svelte-1osjzt4"&&(yt.textContent=Ci),Ca=i(kt),u(We.$$.fragment,kt),kt.forEach(n),al=i(e),cn=b(e,!1),un=i(e),Je=r(e,"P",{"data-svelte-h":!0}),p(Je)!=="svelte-iqaaqz"&&(Je.innerHTML=xi),il=i(e),Q=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(Q)!=="svelte-q70sp3"&&(Q.innerHTML=ki),sl=i(e),y=r(e,"P",{});var O=L(y);xa=h(O,"建立給 apache2 驗證登入使用者資訊的文件："),Ft=r(O,"CODE",{"data-svelte-h":!0}),p(Ft)!=="svelte-z1llyw"&&(Ft.textContent=bi),ka=h(O,`
新增使用者到 htpasswd：
`),Et=r(O,"CODE",{"data-svelte-h":!0}),p(Et)!=="svelte-1ye8t5"&&(Et.textContent=Hi),ba=i(O),u(Ke.$$.fragment,O),Ha=h(O,`
新增後，編輯 apache2 的網站設定檔：`),Mt=r(O,"CODE",{"data-svelte-h":!0}),p(Mt)!=="svelte-1lg9tco"&&(Mt.textContent=Ti),Ta=h(O,`
加入登入功能，其中 AuthName 是要求登入時會顯示的訊息`),O.forEach(n),ol=i(e),fn=b(e,!1),gn=i(e),X=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(X)!=="svelte-1smh9sa"&&(X.innerHTML=Li),rl=i(e),M=r(e,"P",{});var B=L(M);La=h(B,"啟用模組："),Pt=r(B,"CODE",{"data-svelte-h":!0}),p(Pt)!=="svelte-zymyuo"&&(Pt.textContent=Si),Sa=h(B,`
編輯模組設定檔：`),Nt=r(B,"CODE",{"data-svelte-h":!0}),p(Nt)!=="svelte-1lanh7d"&&(Nt.textContent=yi),ya=i(B),u(Ge.$$.fragment,B),Fa=h(B,`
其中第一行的意思是站台會存取使用者目錄中 html 資料夾內的檔案，若使用者目錄中沒有此資料夾則網頁會顯示「Not Found」，預設值是 public_html
第二行是不為哪些使用者啟用站台，預設值是 root 使用者
若啟用了該模組，也要記得將目錄的權限更改為755：`),Dt=r(B,"CODE",{"data-svelte-h":!0}),p(Dt)!=="svelte-16n9ba8"&&(Dt.textContent=Fi),B.forEach(n),pl=i(e),Z=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(Z)!=="svelte-1k2hrhy"&&(Z.innerHTML=Ei),dl=i(e),F=r(e,"P",{});var R=L(F);Ea=h(R,"編輯 Port 設定檔："),At=r(R,"CODE",{"data-svelte-h":!0}),p(At)!=="svelte-2fua5s"&&(At.textContent=Mi),Ma=i(R),u(Ue.$$.fragment,R),Pa=h(R,`
如果要改 http 的 Port：將 80 改成你要的 Port
如果要改 https 的 Port：將 443 (兩個) 改成你要的 Port
最後編輯網站設定檔：`),qt=r(R,"CODE",{"data-svelte-h":!0}),p(qt)!=="svelte-1lg9tco"&&(qt.textContent=Pi),Na=i(R),u(Ve.$$.fragment,R),Da=h(R,`
將最上方的 80 改成你要的 Port`),R.forEach(n),ml=i(e),Y=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(Y)!=="svelte-gq3x42"&&(Y.innerHTML=Ni),hl=i(e),Qe=r(e,"P",{"data-svelte-h":!0}),p(Qe)!=="svelte-1e9ab83"&&(Qe.innerHTML=Di),cl=i(e),ee=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(ee)!=="svelte-129yhep"&&(ee.innerHTML=Ai),ul=i(e),Xe=r(e,"P",{"data-svelte-h":!0}),p(Xe)!=="svelte-13zi9ur"&&(Xe.innerHTML=qi),fl=i(e),$n=b(e,!1),vn=i(e),Ot=r(e,"P",{});var gs=L(Ot);u(Ze.$$.fragment,gs),gs.forEach(n),gl=i(e),te=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(te)!=="svelte-p1ypgn"&&(te.innerHTML=Oi),$l=i(e),I=r(e,"P",{});var zn=L(I);Aa=h(zn,`在更改站台路徑後可能會出現 403 Forbidden 的問題
`),u(Ye.$$.fragment,zn),qa=h(zn,`
開啟設定檔：`),Rt=r(zn,"CODE",{"data-svelte-h":!0}),p(Rt)!=="svelte-2i1yor"&&(Rt.textContent=Ri),zn.forEach(n),vl=i(e),wn=b(e,!1),_n=i(e),ne=r(e,"P",{});var Vl=L(ne);u(et.$$.fragment,Vl),Oa=h(Vl,`
設定後重啟 apache2：`),jt=r(Vl,"CODE",{"data-svelte-h":!0}),p(jt)!=="svelte-175m26"&&(jt.textContent=ji),Vl.forEach(n),wl=i(e),le=r(e,"H2",{id:!0,"data-svelte-h":!0}),p(le)!=="svelte-1hkupka"&&(le.innerHTML=Ii),_l=i(e),tt=r(e,"P",{"data-svelte-h":!0}),p(tt)!=="svelte-vhz1f4"&&(tt.innerHTML=zi),Cl=i(e),ae=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(ae)!=="svelte-1s452vj"&&(ae.innerHTML=Bi),xl=i(e),nt=r(e,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-1hzw9l6"&&(nt.innerHTML=Wi),kl=i(e),ie=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(ie)!=="svelte-1qqr7ic"&&(ie.innerHTML=Ji),bl=i(e),lt=r(e,"P",{"data-svelte-h":!0}),p(lt)!=="svelte-ptd6cj"&&(lt.innerHTML=Ki),Hl=i(e),Cn=b(e,!1),xn=i(e),z=r(e,"P",{});var Bn=L(z);Ra=h(Bn,`註：這裡設定有先後的層級之分，若在白名單內把deny all寫在allow的前面會使allow設定不運作
若站台存取遭拒會顯示：
`),u(at.$$.fragment,Bn),ja=i(Bn),u(it.$$.fragment,Bn),Bn.forEach(n),Tl=i(e),se=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(se)!=="svelte-2ju6fb"&&(se.innerHTML=Gi),Ll=i(e),st=r(e,"P",{"data-svelte-h":!0}),p(st)!=="svelte-1uftmpj"&&(st.innerHTML=Ui),Sl=i(e),kn=b(e,!1),bn=i(e),oe=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(oe)!=="svelte-1gspjf5"&&(oe.innerHTML=Vi),yl=i(e),ot=r(e,"P",{"data-svelte-h":!0}),p(ot)!=="svelte-9v15ui"&&(ot.innerHTML=Qi),Fl=i(e),Hn=b(e,!1),Tn=i(e),re=r(e,"P",{});var Ql=L(re);u(rt.$$.fragment,Ql),Ia=i(Ql),u(pt.$$.fragment,Ql),Ql.forEach(n),El=i(e),pe=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(pe)!=="svelte-v7fgf4"&&(pe.innerHTML=Xi),Ml=i(e),dt=r(e,"P",{"data-svelte-h":!0}),p(dt)!=="svelte-1thil54"&&(dt.innerHTML=Zi),Pl=i(e),Ln=b(e,!1),Sn=i(e),de=r(e,"P",{});var Xl=L(de);u(mt.$$.fragment,Xl),za=i(Xl),u(ht.$$.fragment,Xl),Xl.forEach(n),Nl=i(e),me=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(me)!=="svelte-1gnl6cu"&&(me.innerHTML=Yi),Dl=i(e),N=r(e,"P",{});var ge=L(N);Ba=h(ge,`與前面重新導向相似，但是需要將 http 和 https 站台分開來寫
`),u(ct.$$.fragment,ge),Wa=h(ge,`
在 http 的站台內寫 `),It=r(ge,"CODE",{"data-svelte-h":!0}),p(It)!=="svelte-1x48b96"&&(It.textContent=es),Ja=h(ge,` 到 https
`),zt=r(ge,"STRONG",{"data-svelte-h":!0}),p(zt)!=="svelte-1jfvoe2"&&(zt.textContent=ts),Ka=h(ge,`
若一個站台對到多個 DNS 紀錄可以寫為`),ge.forEach(n),Al=i(e),yn=b(e,!1),Fn=i(e),he=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(he)!=="svelte-gumo5e"&&(he.innerHTML=ns),ql=i(e),ut=r(e,"P",{"data-svelte-h":!0}),p(ut)!=="svelte-8sojpg"&&(ut.innerHTML=ls),Ol=i(e),En=b(e,!1),Mn=i(e),Bt=r(e,"P",{});var $s=L(Bt);u(ft.$$.fragment,$s),$s.forEach(n),Rl=i(e),T=r(e,"P",{});var D=L(T);Ga=h(D,"若要監察存取紀錄可以在站台檔案的開頭新增 log 格式，並在 server 區塊新增 "),Wt=r(D,"CODE",{"data-svelte-h":!0}),p(Wt)!=="svelte-7rufrc"&&(Wt.textContent=as),Ua=h(D,`：
`),u(gt.$$.fragment,D),Va=h(D,`
註：最後的`),Jt=r(D,"CODE",{"data-svelte-h":!0}),p(Jt)!=="svelte-jx4t1d"&&(Jt.textContent=is),Qa=h(D,`指的是給 log 的格式名稱
再用指令`),Kt=r(D,"CODE",{"data-svelte-h":!0}),p(Kt)!=="svelte-cw2vgg"&&(Kt.textContent=ss),Xa=h(D,` 實時監察站台存取紀錄：
`),u($t.$$.fragment,D),Za=h(D,`
只要出現設定檔中的多個 IP 就代表負載設定成功`),D.forEach(n),jl=i(e),ce=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(ce)!=="svelte-12gthyy"&&(ce.innerHTML=os),Il=i(e),E=r(e,"P",{});var j=L(E);Ya=h(j,"編輯 Nginx 設定檔："),Gt=r(j,"CODE",{"data-svelte-h":!0}),p(Gt)!=="svelte-ijz9n"&&(Gt.textContent=rs),ei=h(j,`
找到 `),Ut=r(j,"CODE",{"data-svelte-h":!0}),p(Ut)!=="svelte-cuvryw"&&(Ut.textContent=ps),ti=i(j),u(vt.$$.fragment,j),ni=h(j,`
可以自行新增或編輯，讓 `),Vt=r(j,"CODE",{"data-svelte-h":!0}),p(Vt)!=="svelte-1pwnvq6"&&(Vt.textContent=ds),li=h(j," 後面接自己站台的路徑，並把預設站台移除"),j.forEach(n),zl=i(e),ue=r(e,"H3",{id:!0,"data-svelte-h":!0}),p(ue)!=="svelte-1eyry6s"&&(ue.innerHTML=ms),Bl=i(e),wt=r(e,"P",{"data-svelte-h":!0}),p(wt)!=="svelte-1ty9fel"&&(wt.innerHTML=hs),Wl=i(e),Pn=b(e,!1),Nn=i(e),_t=r(e,"P",{"data-svelte-h":!0}),p(_t)!=="svelte-ebm0tg"&&(_t.innerHTML=cs),Jl=i(e),Dn=b(e,!1),An=i(e),Ct=r(e,"P",{"data-svelte-h":!0}),p(Ct)!=="svelte-196y3so"&&(Ct.innerHTML=us),Kl=i(e),qn=b(e,!1),On=i(e),xt=r(e,"P",{"data-svelte-h":!0}),p(xt)!=="svelte-1npotiy"&&(xt.innerHTML=fs),Gl=i(e),Rn=b(e,!1),jn=i(e),u(fe.$$.fragment,e),this.h()},h(){H(_,"id","windows-server-簽署-enterprise-ca"),H(J,"id","debian-簽證使用-windows-server"),Qt.a=Xt,Zt.a=Yt,en.a=tn,H(K,"id","預設-html-網頁設定"),nn.a=ln,H(G,"id","web-server-apache2"),H(U,"id","啟用-https-ssl"),an.a=sn,on.a=rn,pn.a=dn,H(V,"id","網址重新導向"),mn.a=hn,cn.a=un,H(Q,"id","站台登入驗證"),fn.a=gn,H(X,"id","使用者個人網頁模組-userdir"),H(Z,"id","更換-port"),H(Y,"id","更換站台"),H(ee,"id","預設檔案"),$n.a=vn,H(te,"id","403-forbidden-解決"),wn.a=_n,H(le,"id","web-server-nginx"),H(ae,"id","nginxconf-檢查"),H(ie,"id","限制-ip-存取站台"),Cn.a=xn,H(se,"id","站台登入驗證-1"),kn.a=bn,H(oe,"id","啟用-https-ssl-1"),Hn.a=Tn,H(pe,"id","網址重新導向-1"),Ln.a=Sn,H(me,"id","http-to-https-重新導向"),yn.a=Fn,H(he,"id","負載平衡分流-load-balance"),En.a=Mn,H(ce,"id","更換站台-1"),H(ue,"id","location-匹配選擇機制"),Pn.a=Nn,Dn.a=An,qn.a=On,Rn.a=jn},m(e,t){l(e,_,t),l(e,S,t),l(e,d,t),s(d,x),f(C,d,null),s(d,q),f($e,d,null),s(d,Zl),f(ve,d,null),s(d,Yl),f(we,d,null),s(d,ea),f(_e,d,null),s(d,ta),f(Ce,d,null),s(d,na),f(xe,d,null),s(d,la),f(ke,d,null),s(d,aa),s(d,bt),s(d,ia),f(be,d,null),s(d,sa),f(He,d,null),s(d,oa),s(d,Ht),s(d,ra),s(d,Tt),s(d,pa),f(Te,d,null),s(d,da),f(Le,d,null),s(d,ma),f(Se,d,null),s(d,ha),f(ye,d,null),s(d,ca),f(Fe,d,null),s(d,ua),f(Ee,d,null),s(d,fa),f(Me,d,null),s(d,ga),f(Pe,d,null),s(d,$a),f(Ne,d,null),s(d,va),f(De,d,null),l(e,Wn,t),l(e,J,t),l(e,Jn,t),l(e,Ae,t),l(e,Kn,t),Qt.m(Cs,e,t),l(e,Xt,t),l(e,qe,t),l(e,Gn,t),Zt.m(xs,e,t),l(e,Yt,t),l(e,Oe,t),l(e,Un,t),en.m(ks,e,t),l(e,tn,t),l(e,K,t),l(e,Vn,t),nn.m(bs,e,t),l(e,ln,t),l(e,G,t),l(e,Qn,t),l(e,Re,t),l(e,Xn,t),l(e,U,t),l(e,Zn,t),l(e,je,t),l(e,Yn,t),an.m(Hs,e,t),l(e,sn,t),l(e,Ie,t),l(e,el,t),on.m(Ts,e,t),l(e,rn,t),l(e,ze,t),l(e,tl,t),pn.m(Ls,e,t),l(e,dn,t),l(e,Lt,t),f(Be,Lt,null),l(e,nl,t),l(e,V,t),l(e,ll,t),mn.m(Ss,e,t),l(e,hn,t),l(e,A,t),s(A,wa),s(A,St),s(A,_a),s(A,yt),s(A,Ca),f(We,A,null),l(e,al,t),cn.m(ys,e,t),l(e,un,t),l(e,Je,t),l(e,il,t),l(e,Q,t),l(e,sl,t),l(e,y,t),s(y,xa),s(y,Ft),s(y,ka),s(y,Et),s(y,ba),f(Ke,y,null),s(y,Ha),s(y,Mt),s(y,Ta),l(e,ol,t),fn.m(Fs,e,t),l(e,gn,t),l(e,X,t),l(e,rl,t),l(e,M,t),s(M,La),s(M,Pt),s(M,Sa),s(M,Nt),s(M,ya),f(Ge,M,null),s(M,Fa),s(M,Dt),l(e,pl,t),l(e,Z,t),l(e,dl,t),l(e,F,t),s(F,Ea),s(F,At),s(F,Ma),f(Ue,F,null),s(F,Pa),s(F,qt),s(F,Na),f(Ve,F,null),s(F,Da),l(e,ml,t),l(e,Y,t),l(e,hl,t),l(e,Qe,t),l(e,cl,t),l(e,ee,t),l(e,ul,t),l(e,Xe,t),l(e,fl,t),$n.m(Es,e,t),l(e,vn,t),l(e,Ot,t),f(Ze,Ot,null),l(e,gl,t),l(e,te,t),l(e,$l,t),l(e,I,t),s(I,Aa),f(Ye,I,null),s(I,qa),s(I,Rt),l(e,vl,t),wn.m(Ms,e,t),l(e,_n,t),l(e,ne,t),f(et,ne,null),s(ne,Oa),s(ne,jt),l(e,wl,t),l(e,le,t),l(e,_l,t),l(e,tt,t),l(e,Cl,t),l(e,ae,t),l(e,xl,t),l(e,nt,t),l(e,kl,t),l(e,ie,t),l(e,bl,t),l(e,lt,t),l(e,Hl,t),Cn.m(Ps,e,t),l(e,xn,t),l(e,z,t),s(z,Ra),f(at,z,null),s(z,ja),f(it,z,null),l(e,Tl,t),l(e,se,t),l(e,Ll,t),l(e,st,t),l(e,Sl,t),kn.m(Ns,e,t),l(e,bn,t),l(e,oe,t),l(e,yl,t),l(e,ot,t),l(e,Fl,t),Hn.m(Ds,e,t),l(e,Tn,t),l(e,re,t),f(rt,re,null),s(re,Ia),f(pt,re,null),l(e,El,t),l(e,pe,t),l(e,Ml,t),l(e,dt,t),l(e,Pl,t),Ln.m(As,e,t),l(e,Sn,t),l(e,de,t),f(mt,de,null),s(de,za),f(ht,de,null),l(e,Nl,t),l(e,me,t),l(e,Dl,t),l(e,N,t),s(N,Ba),f(ct,N,null),s(N,Wa),s(N,It),s(N,Ja),s(N,zt),s(N,Ka),l(e,Al,t),yn.m(qs,e,t),l(e,Fn,t),l(e,he,t),l(e,ql,t),l(e,ut,t),l(e,Ol,t),En.m(Os,e,t),l(e,Mn,t),l(e,Bt,t),f(ft,Bt,null),l(e,Rl,t),l(e,T,t),s(T,Ga),s(T,Wt),s(T,Ua),f(gt,T,null),s(T,Va),s(T,Jt),s(T,Qa),s(T,Kt),s(T,Xa),f($t,T,null),s(T,Za),l(e,jl,t),l(e,ce,t),l(e,Il,t),l(e,E,t),s(E,Ya),s(E,Gt),s(E,ei),s(E,Ut),s(E,ti),f(vt,E,null),s(E,ni),s(E,Vt),s(E,li),l(e,zl,t),l(e,ue,t),l(e,Bl,t),l(e,wt,t),l(e,Wl,t),Pn.m(Rs,e,t),l(e,Nn,t),l(e,_t,t),l(e,Jl,t),Dn.m(js,e,t),l(e,An,t),l(e,Ct,t),l(e,Kl,t),qn.m(Is,e,t),l(e,On,t),l(e,xt,t),l(e,Gl,t),Rn.m(zs,e,t),l(e,jn,t),f(fe,e,t),Ul=!0},p(e,t){const In={};t&2&&(In.$$scope={dirty:t,ctx:e}),fe.$set(In)},i(e){Ul||(g(C.$$.fragment,e),g($e.$$.fragment,e),g(ve.$$.fragment,e),g(we.$$.fragment,e),g(_e.$$.fragment,e),g(Ce.$$.fragment,e),g(xe.$$.fragment,e),g(ke.$$.fragment,e),g(be.$$.fragment,e),g(He.$$.fragment,e),g(Te.$$.fragment,e),g(Le.$$.fragment,e),g(Se.$$.fragment,e),g(ye.$$.fragment,e),g(Fe.$$.fragment,e),g(Ee.$$.fragment,e),g(Me.$$.fragment,e),g(Pe.$$.fragment,e),g(Ne.$$.fragment,e),g(De.$$.fragment,e),g(Be.$$.fragment,e),g(We.$$.fragment,e),g(Ke.$$.fragment,e),g(Ge.$$.fragment,e),g(Ue.$$.fragment,e),g(Ve.$$.fragment,e),g(Ze.$$.fragment,e),g(Ye.$$.fragment,e),g(et.$$.fragment,e),g(at.$$.fragment,e),g(it.$$.fragment,e),g(rt.$$.fragment,e),g(pt.$$.fragment,e),g(mt.$$.fragment,e),g(ht.$$.fragment,e),g(ct.$$.fragment,e),g(ft.$$.fragment,e),g(gt.$$.fragment,e),g($t.$$.fragment,e),g(vt.$$.fragment,e),g(fe.$$.fragment,e),Ul=!0)},o(e){$(C.$$.fragment,e),$($e.$$.fragment,e),$(ve.$$.fragment,e),$(we.$$.fragment,e),$(_e.$$.fragment,e),$(Ce.$$.fragment,e),$(xe.$$.fragment,e),$(ke.$$.fragment,e),$(be.$$.fragment,e),$(He.$$.fragment,e),$(Te.$$.fragment,e),$(Le.$$.fragment,e),$(Se.$$.fragment,e),$(ye.$$.fragment,e),$(Fe.$$.fragment,e),$(Ee.$$.fragment,e),$(Me.$$.fragment,e),$(Pe.$$.fragment,e),$(Ne.$$.fragment,e),$(De.$$.fragment,e),$(Be.$$.fragment,e),$(We.$$.fragment,e),$(Ke.$$.fragment,e),$(Ge.$$.fragment,e),$(Ue.$$.fragment,e),$(Ve.$$.fragment,e),$(Ze.$$.fragment,e),$(Ye.$$.fragment,e),$(et.$$.fragment,e),$(at.$$.fragment,e),$(it.$$.fragment,e),$(rt.$$.fragment,e),$(pt.$$.fragment,e),$(mt.$$.fragment,e),$(ht.$$.fragment,e),$(ct.$$.fragment,e),$(ft.$$.fragment,e),$(gt.$$.fragment,e),$($t.$$.fragment,e),$(vt.$$.fragment,e),$(fe.$$.fragment,e),Ul=!1},d(e){e&&(n(_),n(S),n(d),n(Wn),n(J),n(Jn),n(Ae),n(Kn),Qt.d(),n(Xt),n(qe),n(Gn),Zt.d(),n(Yt),n(Oe),n(Un),en.d(),n(tn),n(K),n(Vn),nn.d(),n(ln),n(G),n(Qn),n(Re),n(Xn),n(U),n(Zn),n(je),n(Yn),an.d(),n(sn),n(Ie),n(el),on.d(),n(rn),n(ze),n(tl),pn.d(),n(dn),n(Lt),n(nl),n(V),n(ll),mn.d(),n(hn),n(A),n(al),cn.d(),n(un),n(Je),n(il),n(Q),n(sl),n(y),n(ol),fn.d(),n(gn),n(X),n(rl),n(M),n(pl),n(Z),n(dl),n(F),n(ml),n(Y),n(hl),n(Qe),n(cl),n(ee),n(ul),n(Xe),n(fl),$n.d(),n(vn),n(Ot),n(gl),n(te),n($l),n(I),n(vl),wn.d(),n(_n),n(ne),n(wl),n(le),n(_l),n(tt),n(Cl),n(ae),n(xl),n(nt),n(kl),n(ie),n(bl),n(lt),n(Hl),Cn.d(),n(xn),n(z),n(Tl),n(se),n(Ll),n(st),n(Sl),kn.d(),n(bn),n(oe),n(yl),n(ot),n(Fl),Hn.d(),n(Tn),n(re),n(El),n(pe),n(Ml),n(dt),n(Pl),Ln.d(),n(Sn),n(de),n(Nl),n(me),n(Dl),n(N),n(Al),yn.d(),n(Fn),n(he),n(ql),n(ut),n(Ol),En.d(),n(Mn),n(Bt),n(Rl),n(T),n(jl),n(ce),n(Il),n(E),n(zl),n(ue),n(Bl),n(wt),n(Wl),Pn.d(),n(Nn),n(_t),n(Jl),Dn.d(),n(An),n(Ct),n(Kl),qn.d(),n(On),n(xt),n(Gl),Rn.d(),n(jn)),v(C),v($e),v(ve),v(we),v(_e),v(Ce),v(xe),v(ke),v(be),v(He),v(Te),v(Le),v(Se),v(ye),v(Fe),v(Ee),v(Me),v(Pe),v(Ne),v(De),v(Be),v(We),v(Ke),v(Ge),v(Ue),v(Ve),v(Ze),v(Ye),v(et),v(at),v(it),v(rt),v(pt),v(mt),v(ht),v(ct),v(ft),v(gt),v($t),v(vt),v(fe,e)}}}function Zs(W){let _,P;const S=[W[0],_s];let d={$$slots:{default:[Xs]},$$scope:{ctx:W}};for(let x=0;x<S.length;x+=1)d=ai(d,S[x]);return _=new Gs({props:d}),{c(){c(_.$$.fragment)},l(x){u(_.$$.fragment,x)},m(x,C){f(_,x,C),P=!0},p(x,[C]){const q=C&1?Us(S,[C&1&&ws(x[0]),C&0&&ws(_s)]):{};C&2&&(q.$$scope={dirty:C,ctx:x}),_.$set(q)},i(x){P||(g(_.$$.fragment,x),P=!0)},o(x){$(_.$$.fragment,x),P=!1},d(x){v(_,x)}}}const _s={title:"Web",summary:"Self-Signed Certificate + OpenSSL + ADCS + Nginx & Apache2",image:"/badssl.png",alt:"Shellkai Huang",created:"2023-03-14T00:00:00.000Z",updated:"2024-09-22T00:00:00.000Z",tags:["Web","SSL","OS","Nginx","Apache2"],images:[],slug:"/certificate-ca-server/+page.svelte.md",path:"/certificate-ca-server",toc:[{depth:2,slug:"windows-server-簽署-enterprise-ca",title:"Windows Server 簽署 (Enterprise CA)"},{depth:2,slug:"debian-簽證使用-windows-server",title:"Debian (簽證使用 Windows Server)"},{depth:2,slug:"預設-html-網頁設定",title:"預設 html 網頁設定"},{depth:2,slug:"web-server-apache2",title:"Web Server (apache2)"},{depth:3,slug:"啟用-https-ssl",title:"啟用 https (SSL)"},{depth:3,slug:"網址重新導向",title:"網址重新導向"},{depth:3,slug:"站台登入驗證",title:"站台登入驗證"},{depth:3,slug:"使用者個人網頁模組-userdir",title:"使用者個人網頁模組 (userdir)"},{depth:3,slug:"更換-port",title:"更換 Port"},{depth:3,slug:"更換站台",title:"更換站台"},{depth:3,slug:"預設檔案",title:"預設檔案"},{depth:3,slug:"403-forbidden-解決",title:"403 Forbidden 解決"},{depth:2,slug:"web-server-nginx",title:"Web Server (Nginx)"},{depth:3,slug:"nginxconf-檢查",title:"nginx.conf 檢查"},{depth:3,slug:"限制-ip-存取站台",title:"限制 IP 存取站台"},{depth:3,slug:"站台登入驗證-1",title:"站台登入驗證"},{depth:3,slug:"啟用-https-ssl-1",title:"啟用 https (SSL)"},{depth:3,slug:"網址重新導向-1",title:"網址重新導向"},{depth:3,slug:"http-to-https-重新導向",title:"http to https 重新導向"},{depth:3,slug:"負載平衡分流-load-balance",title:"負載平衡/分流 (Load Balance)"},{depth:3,slug:"更換站台-1",title:"更換站台"},{depth:3,slug:"location-匹配選擇機制",title:"location (匹配選擇機制)"}]};function Ys(W,_,P){return W.$$set=S=>{P(0,_=ai(ai({},_),vs(S)))},_=vs(_),[_]}class io extends Js{constructor(_){super(),Ks(this,_,Ys,Zs,Bs,{})}}export{io as component};
