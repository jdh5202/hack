function userInfo(suburl) {
const url = location.origin + '/' + suburl;
return fetch(url).then( (res) => { return res; } );
}

async function sumOfFetch(array) {

const user = await userInfo(array);
if (user.status === 200) {
console.log(user)
}
}

const item = ['install','ROOT','add','balancer','dav','deploy','examples','examples/jsp/index.html','examples/jsp/snp/snoop.jsp','examples/jsp/source.jsp','examples/servlet/HelloWorldExample','examples/servlet/SnoopServlet','examples/servlet/TroubleShooter','examples/servlet/default/jsp/snp/snoop.jsp','examples/servlet/default/jsp/source.jsp','examples/servlet/org.apache.catalina.INVOKER.HelloWorldExample','examples/servlet/org.apache.catalina.INVOKER.SnoopServlet','examples/servlet/org.apache.catalina.INVOKER.TroubleShooter','examples/servlet/org.apache.catalina.servlets.DefaultServlet/jsp/snp/snoop.jsp','examples/servlet/org.apache.catalina.servlets.DefaultServlet/jsp/source.jsp','examples/servlet/org.apache.catalina.servlets.WebdavServlet/jsp/snp/snoop.jsp','examples/servlet/org.apache.catalina.servlets.WebdavServlet/jsp/source.jsp','examples/servlet/snoop','examples/servlets/servlet/SessionExample','examples/servlets/index.html','host-manager','host-manager/add','host-manager/host-manager.xml','host-manager/html/','host-manager/list','host-manager/remove','host-manager/start','host-manager/stop','html','install','j4p','jmxproxy','jsp-examples','list','manager','manager/deploy','manager/html','manager/html','manager/install','manager/jmxproxy','manager/jmxproxy','manager/list','manager/manager.xml','manager/reload','manager/remove','manager/resources','manager/roles','manager/save','manager/serverinfo','manager/sessions','manager/start','manager/status.xsd','manager/status','manager/stop','manager/undeploy','reload','remove','resources','roles','save','serverinfo','servlet/default/','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.WebdavServlet/','servlet/org.apache.catalina.servlets.DefaultServlet/','servlet/org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.servlets.HTMLManagerServlet','servlet/org.apache.catalina.servlets.InvokerServlet/org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.servlets.InvokerServlet/org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.servlets.ManagerServlet','servlet/org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.servlets.WebdavServlet/','servlets-examples','sessions','start','status','stop','tomcat-docs','undeploy','webdav','webdav/index.html','webdav/servlet/org.apache.catalina.servlets.WebdavServlet/','webdav/servlet/webdav/','admin','admin-console','docs/','examples/websocket/index.xhtml','host-manager/html','invoker/JMXInvokerServlet','jmx-console','jmx-console/HtmlAdaptor','server-manager/html','status','tomcat/manager/html','web-console','web-console/Invoker']

let i = 1;
let timer = setInterval(function(){

  if(i>item.length){
    clearInterval(timer);
  }else{
    sumOfFetch(item[i-1]);
    i++;
  }

}, 1500)
