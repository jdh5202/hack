 // 주석 제거
 document.write(document.querySelectorAll("html")[0].outerHTML.replaceAll('<!--','').replaceAll('-->','').replaceAll('/*','').replaceAll('*/','') );
 
 // 숨겨진 요소 확인
 let obj = document.querySelectorAll('*');
 let len = obj.length;
     for( let i=0; i<len; i++) {
 
         if ( obj[i].style.display == "none" ) 
         { 
           console.log(obj[i]);
           obj[i].style.display='block';
         } else if ( obj[i].style.visibility == "hidden" ) 
         {
           console.log(obj[i]);
           obj[i].style.visibility="visible";
         }
     }
 
 // 페이지 내 url 추출
 let html = document.getElementsByTagName("HTML")[0].innerHTML;
 let url_regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
 let url = html.match(url_regex);
 console.table(url);
