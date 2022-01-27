// head.html, tail.html 페이지 불러오기
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  };


// 스크롤값에 따라 TOP 버튼 생성
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn_top").style.display = "block";
  } else {
    document.getElementById("btn_top").style.display = "none";
  }
};

// TOP 버튼 클릭시 도큐먼트 최상단으로 위치 이동
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


// 서브페이지 링크 이동 시 Loading 페이지 구현
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
};

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader_bg").style.display = "none";
};


// 검색 버튼 클릭 시 Overlay 생성
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
};

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
};