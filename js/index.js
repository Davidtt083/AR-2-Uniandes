


  window.onload = function () {

    document
      .querySelector(".say-hi-button2")
      .addEventListener("click", function () {
        const element = document.querySelector("#bowser-model");
        const element2 = document.querySelector("#mode-oficina-01");
        const element3 = document.querySelector("#m-mono-01");
        const element4 = document.querySelector("#m-mono-02");
        const element5 = document.querySelector("#m-mono-03");
        const element6 = document.querySelector("#m-mono-04");
        if (element.object3D.visible === true) {

          element2.object3D.visible = true;
          element6.object3D.visible = true;
          element.object3D.visible = false;
          element3.object3D.visible = false;
          element4.object3D.visible = false;
          element5.object3D.visible = false;
        }
      });


    document
      .querySelector(".say-hi-button3")
      .addEventListener("click", function () {
        const element = document.querySelector("#mode-oficina-01");
        const element2 = document.querySelector("#m-mono-04");
        const element3 = document.querySelector("#m-mono-disp");
        const element4 = document.querySelector("#m-mono-carrito");
        const element5 = document.querySelector("#m-producto");

        if (element.object3D.visible === true) {

          element3.object3D.visible = true;
          element4.object3D.visible = true;
          element5.object3D.visible = true;
          element.object3D.visible = false;
          element2.object3D.visible = false;

        }
      });
  };




  function play() {
    var audio = document.getElementById("audio");
    if (audio.paused)
      audio.play();
    else
      audio.pause();
    var audioh1 = document.getElementById("audio2");
    if (audioh1.play)
      audioh1.pause();
  }


  function play2() {
    var audio = document.getElementById("audio2");
    if (audio.paused)
      audio.play();
    else
      audio.pause();

  }


  function play3() {
    var audio = document.getElementById("audio3");
    if (audio.paused)
      audio.play();
    else
      audio.pause();

  }


  function siguiente() {
    var e = document.getElementById("bs0");
    var f = document.getElementById("bs");
    var g = document.getElementById("bs-2");
    var h = document.getElementById("bs-3");
    var i = document.getElementById("b-modal-01");
    var j = document.getElementById("b-modal-02");
    e.style.display = 'none';
    f.style.display = 'none';
    i.style.display = 'none';
    g.classList.remove('hide');
    g.classList.add('col-sm');
    h.classList.remove('hide');
    h.classList.add('col-sm');
    j.classList.remove('hide');
    j.classList.add('buttons-modal');

    var audioh1 = document.getElementById("audio");
    if (audioh1.play)
      audioh1.pause();

  }

  function siguiente2() {
    var e = document.getElementById("bs-2");
    var f = document.getElementById("bs-3");
    var g = document.getElementById("bs-4");
    var h = document.getElementById("bs-5");
    var i = document.getElementById("b-modal-02");
    var j = document.getElementById("b-modal-03");
    e.style.display = 'none';
    f.style.display = 'none';
    i.style.display = 'none';
    g.classList.remove('hide');
    g.classList.add('col-sm');
    h.classList.remove('hide');
    h.classList.add('col-sm');
    j.classList.remove('hide');
    j.classList.add('buttons-modal');

    var audioh1 = document.getElementById("audio2");
    if (audioh1.play)
      audioh1.pause();

  }



  function cerrar(){
    
    window.opener = self;
  window.close();      
  }

  function comenzar() {
    var h = document.getElementById("fullh");
    h.classList.remove("d-flex");
    h.style.display = "none";
  }

  setTimeout(() => {
    const box = document.getElementById('com');

    // 👇️ removes element from DOM
    box.style.display = 'inline';

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 8000); // 👈️ time in milliseconds