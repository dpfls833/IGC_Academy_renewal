  // Main Visual
  
  var slideIndex = 1;
  var timer;//setTimeout 제어를 위한 전역변수
  
  
  window.onload = function() {//윈도우가 로딩 된 이후 스크립트 실행
      showSlides();//인수 없이 호출
  }
  
  
  function plusSlides(n) {
      clearTimeout(timer);//타이머 종료
      slideIndex = slideIndex + (n-1);//showSlides() 함수에서 1을 추가 함으로 여기선 이런 식으로 처리해야 맞음
      showSlides();//인수 없이 호출
  };
  

  function currentSlide(n) {
      clearTimeout(timer);//타이머 종료
      slideIndex = n;//함수 호출 전 선언
      showSlides();//인수 없이 호출
  };
 

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("roll");
      var dots = document.getElementsByClassName("line");
      if (slideIndex > slides.length) { slideIndex = 1; }//slideIndex 값으로 체크
      if (slideIndex < 1) { slideIndex = slides.length; }//slideIndex 값으로 체크
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    
      slideIndex++;//자동 슬라이드를 위해 1추가
      timer = setTimeout(showSlides, 10000);//10초마다 showSlides 함수 호출
  };

  