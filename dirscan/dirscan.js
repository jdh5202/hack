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

const item = ['swagger-ui.html','v2/api-docs','actuator','actuator/info','actuator/helath','editor/popup/image.html','editor/popup/image.html','cheditor/','core/editor/','board/cheditor/','js/cheditor/','cheditor4/','ko/cheditor4/','cheditor5/','cheditor/example/newpost.html','cheditor/example/modifiy.html','cheditor/example/multi.html','cheditor/imageUpload/upload.jsp','ckeditor/','ckfinder/','ckfinder/ckfinder.html','ckeditor/upload.jsp','ckeditor/_samples/','ckeditor/samples/','ckeditor/_samples/index.html','ckeditor/samples/index.html','skins/ckeditor/','_sys/_plugin/cke','namo/','namo/index.html','namo/manage/index.html','crosseditor/','crosseditor/manager/','crosseditor/index.html','crosseditor/manage/index.html','crosseditor/manage/jsp/manager_setting.jsp','crosseditor/binary/upload/devshell.jsp','crosseditor/binary/upload/cmd.jspx','resources/crosseditor/','resources/crosseditor/index.html','resources/component/crosseditor/index.html','DEXTUpload/','dext5/','dext5upload/','dext5upload/sample/','com/dext5upload/','dext5upload/sample/index.html','dext5Upload/sample/html/sample_upload.html','dext5editor/admin/jsp/login.jsp','dext5editor/admin/jsp/uploader_setting.jsp','samples/index.html','aspupload/','aspupload/file_upload.html','fck/editor/','FCKeditor/','js/fckeditor/','feditor/editor/fckeditor.html','fckeditor/editor/filemanager/browser/default/browser.html','fckeditor/editor/filemanager/connectors/test.html','fckeditor/editor/filemanager/connectors/uploadtest.html','editor/filemanager/browser/default/browser.html','editor/editor/filemanager/browser/default/browser.html','HtmlEditor/_samples/default.html','icons/','js/se2/SmartEditor2.html','nse/SmartEditor2.html','SmartEditor2.html','SmartEditorBasic/','SmartEditor2/','SmartEditorBasic/SEditorDemo.html','SEditor/popup/quick_photo/imgupload.jsp','smarteditor/photo_uploader/popup/file_uploader_html5.php','SE2/photo_uploader/popup/file_uploader_html5.php','smarteditor2/photo_uploader/popup/file_uploader_html5.php','smarteditor/popup/quick_photo/FileUploader_html5.php','plugin/smarteditor2/photo_uploader/popup/file_uploader_html5.php','install','ROOT','add','balancer','dav','deploy','examples','examples/jsp/index.html','examples/jsp/snp/snoop.jsp','examples/jsp/source.jsp','examples/servlet/HelloWorldExample','examples/servlet/SnoopServlet','examples/servlet/TroubleShooter','examples/servlet/default/jsp/snp/snoop.jsp','examples/servlet/default/jsp/source.jsp','examples/servlet/org.apache.catalina.INVOKER.HelloWorldExample','examples/servlet/org.apache.catalina.INVOKER.SnoopServlet','examples/servlet/org.apache.catalina.INVOKER.TroubleShooter','examples/servlet/org.apache.catalina.servlets.DefaultServlet/jsp/snp/snoop.jsp','examples/servlet/org.apache.catalina.servlets.DefaultServlet/jsp/source.jsp','examples/servlet/org.apache.catalina.servlets.WebdavServlet/jsp/snp/snoop.jsp','examples/servlet/org.apache.catalina.servlets.WebdavServlet/jsp/source.jsp','examples/servlet/snoop','examples/servlets/servlet/SessionExample','examples/servlets/index.html','host-manager','host-manager/add','host-manager/host-manager.xml','host-manager/html/','host-manager/list','host-manager/remove','host-manager/start','host-manager/stop','html','install','j4p','jmxproxy','jsp-examples','list','manager','manager/deploy','manager/html','manager/html','manager/install','manager/jmxproxy','manager/jmxproxy','manager/list','manager/manager.xml','manager/reload','manager/remove','manager/resources','manager/roles','manager/save','manager/serverinfo','manager/sessions','manager/start','manager/status.xsd','manager/status','manager/stop','manager/undeploy','reload','remove','resources','roles','save','serverinfo','servlet/default/','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.INVOKER.org.apache.catalina.servlets.WebdavServlet/','servlet/org.apache.catalina.servlets.DefaultServlet/','servlet/org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.servlets.HTMLManagerServlet','servlet/org.apache.catalina.servlets.InvokerServlet/org.apache.catalina.servlets.DefaultServlet/tomcat.gif','servlet/org.apache.catalina.servlets.InvokerServlet/org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.servlets.ManagerServlet','servlet/org.apache.catalina.servlets.SnoopAllServlet','servlet/org.apache.catalina.servlets.WebdavServlet/','servlets-examples','sessions','start','status','stop','tomcat-docs','undeploy','webdav','webdav/index.html','webdav/servlet/org.apache.catalina.servlets.WebdavServlet/','webdav/servlet/webdav/','admin','admin-console','docs/','examples/websocket/index.xhtml','host-manager/html','invoker/JMXInvokerServlet','jmx-console','jmx-console/HtmlAdaptor','server-manager/html','status','tomcat/manager/html','web-console','web-console/Invoker']



let i = 1;
let speed = 1500;

let timer = setInterval(function(){

  if(i>item.length){
    clearInterval(timer);
  }else{
    sumOfFetch(item[i-1]);
    i++;
  }

}, speed)
