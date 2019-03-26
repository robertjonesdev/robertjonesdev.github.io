// Source: https://www.w3schools.com/howto/howto_js_typewriter.asp
    var i = 0;
    var txt = 'Hello. I am Robert.';
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
      }
    }
