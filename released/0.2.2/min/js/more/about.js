/* Property of A+A (juridically known as Allan Rope and Armand Grillet). ALL RIGHTS RESERVED.
See our Terms of Service in the "About" section for further information. */
window.onload=function(){a=document.getElementsByTagName("head")[0];b=document.getElementById("window-close");c.setAttribute("rel","stylesheet");c.setAttribute("type","text/css");-1!=navigator.appVersion.indexOf("Mac")?(c.setAttribute("href","../css/more/more-frame-mac.css"),b.setAttribute("class","cta little-icon-mac-close")):(-1!=navigator.appVersion.indexOf("Win")?c.setAttribute("href","../css/more/more-frame-windows.css"):c.setAttribute("href","../css/more/more-frame-others.css"),b.setAttribute("class",
"cta little-icon-win-close"));a.appendChild(c);$(b).on("click",function(){chrome.app.window.current().close()})};var a,c=document.createElement("link"),b;