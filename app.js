
function adjustPianoSize() {
  const piano = document.querySelector('.wrapper');
  const windowWidth = window.innerWidth;

  if (windowWidth < 815) {
    // Dispositivo móvil
    piano.style.width = `${windowWidth}px`;
  } else {
    // Dispositivo de escritorio
    piano.style.width = ''; // Eliminar estilo inline para que se ajuste al contenedor
  }
}

// Llamar a la función cuando se carga la página y cuando se cambia el tamaño de la ventana
window.addEventListener('DOMContentLoaded', adjustPianoSize);
window.addEventListener('resize', adjustPianoSize);
    // Definir las escalas musicales con los nombres de los archivos de sonido
    const scale1 = {
      C: 'C.mp3',
      D: 'G.mp3',
      E: 'F.mp3',
      F: 'C.mp3'
    };
  
    const scale2 = {
      C: 'C3.mp3',
      D: 'Am.mp3',
      E: 'Dm.mp3',
      F: 'F.mp3'

      
    };

    const scale3 = {
      C: 'C2.mp3',
      D: '',
      E: '',
      F: ''
    };

    const scale4 = {
      C: 'C1.mp3',
      D: '',
      E: '',
      F: ''
    };

    const scale5 = {
      C: 'Dm.mp3',
      D: '',
      E: 'G.mp3',
      F: 'C.mp3'
    };

    const scale6 = {
      C: 'Dm.mp3',
      D: 'Am.mp3',
      E: 'C.mp3',
      F: 'F.mp3',
    };

    const scale7 = {
      C: 'Ds2.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale8 = {
      C: 'Ds1.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale9 = {
      C: 'Em.mp3',
      D: 'C.mp3',
      E: 'F.mp3',
      F: 'Am.mp3',
    };

    const scale10 = {
      C: 'Em.mp3',
      D: 'F.mp3',
      E: 'Dm.mp3',
      F: 'G.mp3',
    };

    const scale11 = {
      C: 'Ds2.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale12 = {
      C: 'Ds1.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale13 = {
      C: 'F.mp3',
      D: 'Am.mp3',
      E: 'C.mp3',
      F: 'Dm.mp3',
    };

    const scale14 = {
      C: 'F.mp3',
      D: 'Em.mp3',
      E: 'G.mp3',
      F: 'Am.mp3',
    };

    const scale15 = {
      C: 'Fs2.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale16 = {
      C: 'Fs1.ogg',
      D: '',
      E: '',
      F: '',
    };

    const scale17 = {
      C: 'G.mp3',
      D: 'Em.mp3',
      E: 'G.mp3',
      F: 'F.mp3',
    };

    const scale18 = {
      C: 'G.mp3',
      D: 'Am.mp3',
      E: 'C.mp3',
      F: 'Dm.mp3',
    };

    const scale19 = {
      C: '.mp3',
      D: '',
      E: '',
      F: '',
    };

    const scale20 = {
      C: '',
      D: '',
      E: '',
      F: '',
    };

    const scale21 = {
      C: 'Am.mp3',
      D: 'F.mp3',
      E: 'Em.mp3',
      F: 'Dm.mp3',
    };

    const scale22 = {
      C: 'Am.mp3',
      D: 'G.mp3',
      E: 'C.mp3',
      F: 'Em.mp3',
    };

    const scale23 = {
      C: 'A2.mp3',
      D: '',
      E: '',
      F: '',
    };

    const scale24 = {
      C: 'A1.mp3',
      D: '',
      E: '',
      F: '',
    };

   

    let intervalIds = []; // Array de IDs de intervalo para las melodías
    let tempo = 90; // Tempo inicial (BPM)

    // Función para reproducir una nota de una melodía
    function playNote(note, scale) {
      const audio = new Audio(`Acordes/${scale[note]}`); // Ruta al archivo de sonido correspondiente a la nota
      audio.play();
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
      });
    }

let currentMelodyInterval; // Variable para almacenar el ID del intervalo actual
let isTouching = false; // Variable para verificar si se está tocando la pantalla

function playSalsaMelody(scale) {
  const melodyScale = ['C', 'D', 'E', 'F'];

  const rhythmPattern = [1, 0.75, 0.25, 1]; // Patrón rítmico para una balada

  let beat = 0;
  currentMelodyInterval = setInterval(() => {
    if (isTouching) {
      const rhythmIndex = rhythmPattern[beat % rhythmPattern.length];
      if (rhythmIndex !== 3) { // No reproducir sonido en el cuarto beat (silencio)
        playNote(melodyScale[beat % melodyScale.length], scale);
      } else {
        // Puedes agregar algún efecto adicional para el sonido del cuarto beat (silencio)
        // Por ejemplo: playSilence();
      }
      beat++;
    }
  }, 20000 / tempo); // Intervalo de tiempo ajustado para un ritmo más rápido
}

function stopMelodies() {
  clearInterval(currentMelodyInterval); // Detener el intervalo de la melodía actual
}
    

// Función para aumentar el tempo
function increaseTempo() {
  tempo += 10;
  updateTempoDisplay();
  stopMelodies();
}

    // Función para disminuir el tempo
    function decreaseTempo() {
      if (tempo > 10) {
        tempo -= 10;
        updateTempoDisplay();
        stopMelodies();
      }
    }

    // Obtén los botones
const playButtons = document.getElementsByClassName('play-button');

// Agrega event listeners a los botones
for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener('touchstart', function() {
    // Cambia la clase 'active' del botón al hacer clic
    this.classList.toggle('active');  
    // Agrega aquí tu código adicional para el evento del botón
    toggleButtonColor(this);
  });
}

function toggleButtonImage(button) {
  const defaultImage = button.getAttribute('data-image');
  const activeImage = button.getAttribute('data-active-image');

  // Verifica si el botón está activo
  if (button.classList.contains('active')) {
    button.style.backgroundImage = `url("${activeImage}")`;
  } else {
    button.style.backgroundImage = `url("${defaultImage}")`;
  }
}

// Asigna imágenes específicas para cada botón
document.querySelector('.btn-24').setAttribute('data-active-image', 'img1/img/flor.png');

function toggleButtonColor(button) {
  if (button.classList.contains('btn-1')) {
    button.classList.toggle('btn-1-active');
  } else if (button.classList.contains('btn-2')) {
    button.classList.toggle('btn-2-active');
  } else if (button.classList.contains('btn-3')) {
    button.classList.toggle('btn-3-active');
  } else if(button.classList.contains('btn-4')) {
    button.classList.toggle('btn-4-active');
  } else if (button.classList.contains('btn-5')) {
    button.classList.toggle('btn-5-active');
  } else if (button.classList.contains('btn-6')) {
    button.classList.toggle('btn-6-active');
  } else if (button.classList.contains('btn-7')) {
    button.classList.toggle('btn-7-active');
  } else if (button.classList.contains('btn-8')) {
    button.classList.toggle('btn-8-active');
  }else if (button.classList.contains('btn-9')) {
    button.classList.toggle('btn-9-active');
  } else if (button.classList.contains('btn-10')) {
    button.classList.toggle('btn-10-active');
  } else if(button.classList.contains('btn-11')) {
    button.classList.toggle('btn-11-active');
  } else if (button.classList.contains('btn-12')) {
    button.classList.toggle('btn-12-active');
  } else if (button.classList.contains('btn-13')) {
    button.classList.toggle('btn-13-active');
  } else if (button.classList.contains('btn-14')) {
    button.classList.toggle('btn-14-active');
  } else if (button.classList.contains('btn-15')) {
    button.classList.toggle('btn-15-active');
  }else if (button.classList.contains('btn-16')) {
    button.classList.toggle('btn-16-active');
  }else if (button.classList.contains('btn-17')) {
    button.classList.toggle('btn-17-active');
  }else if (button.classList.contains('btn-18')) {
    button.classList.toggle('btn-18-active');
  } else if (button.classList.contains('btn-19')) {
    button.classList.toggle('btn-19-active');
  } else if(button.classList.contains('btn-20')) {
    button.classList.toggle('btn-20-active');
  } else if (button.classList.contains('btn-21')) {
    button.classList.toggle('btn-21-active');
  } else if (button.classList.contains('btn-22')) {
    button.classList.toggle('btn-22-active');
  } else if (button.classList.contains('btn-23')) {
    button.classList.toggle('btn-23-active');
  } else if (button.classList.contains('btn-24')) {
    button.classList.toggle('btn-24-active');
  }
}



    // Función para actualizar la visualización del tempo
    function updateTempoDisplay() {
        const tempoDisplay = document.getElementById('tempoDisplay');
      tempoDisplay.textContent = `Tempo: ${tempo} BPM`;
    }
    
   
    const playButton1 = document.getElementById('playButton1');
    
    playButton1.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale1);
    });
    
    playButton1.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });
    

    const playButton2 = document.getElementById('playButton2');
    
    playButton2.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale2);
    });
    
    playButton2.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton3 = document.getElementById('playButton3');
    
    playButton3.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale3);
    });
    
    playButton3.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton4 = document.getElementById('playButton4');
    
    playButton4.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale4);
    });
    
    playButton4.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton5 = document.getElementById('playButton5');
    
    playButton5.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale5);
    });
    
    playButton5.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton6 = document.getElementById('playButton6');
    
    playButton6.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale6);
    });
    
    playButton6.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton7 = document.getElementById('playButton7');
    
    playButton7.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale7);
    });
    
    playButton7.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton8 = document.getElementById('playButton8');
    
    playButton8.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale8);
    });
    
    playButton8.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton9 = document.getElementById('playButton9');
    
    playButton9.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale9);
    });
    
    playButton9.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton10 = document.getElementById('playButton10');
    
    playButton10.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale10);
    });
    
    playButton10.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton11 = document.getElementById('playButton11');
    
    playButton11.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale11);
    });
    
    playButton11.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton12 = document.getElementById('playButton12');
    
    playButton12.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale12);
    });
    
    playButton12.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton13 = document.getElementById('playButton13');
    
    playButton13.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale13);
    });
    
    playButton13.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton14 = document.getElementById('playButton14');
    
    playButton14.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale14);
    });
    
    playButton14.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton15 = document.getElementById('playButton15');
    
    playButton15.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale15);
    });
    
    playButton15.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });
    

    const playButton16 = document.getElementById('playButton16');
    
    playButton16.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale16);
    });
    
    playButton16.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton17 = document.getElementById('playButton17');
    
    playButton17.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale17);
    });
    
    playButton17.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton18 = document.getElementById('playButton18');
    
    playButton18.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale18);
    });
    
    playButton18.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton19 = document.getElementById('playButton19');
    
    playButton19.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale19);
    });
    
    playButton19.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton20 = document.getElementById('playButton20');
    
    playButton20.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale20);
    });
    
    playButton20.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton21 = document.getElementById('playButton21');
    
    playButton21.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale21);
    });
    
    playButton21.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton22 = document.getElementById('playButton22');
    
    playButton22.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale22);
    });
    
    playButton22.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton23 = document.getElementById('playButton23');
    
    playButton23.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale23);
    });
    
    playButton23.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });

    const playButton24 = document.getElementById('playButton24');
    
    playButton24.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado (p. ej., zoom)
      isTouching = true;
      playSalsaMelody(scale24);
    });
    
    playButton24.addEventListener('touchend', () => {
      isTouching = false;
      stopMelodies(); // Detener la melodía cuando se levanta el dedo
    });



    const stopButton = document.getElementById('stopButton');
    stopButton.addEventListener('click', stopMelodies);

    const increaseTempoButton = document.getElementById('increaseTempoButton');
    increaseTempoButton.addEventListener('click', increaseTempo);

    const decreaseTempoButton = document.getElementById('decreaseTempoButton');
    decreaseTempoButton.addEventListener('click', decreaseTempo);

    // Actualizar la visualización del tempo inicial
    updateTempoDisplay();

    const playTune = (key) => {
      audio.play();
    
      const clickedKey = document.querySelector(`[data-key="${key}"]`);
      clickedKey.classList.add("active");
      setTimeout(() => {
        clickedKey.classList.remove("active");
      }, 150);
    };

    pianoKeys.forEach((key) => {
      allKeys.push(key.dataset.key);
      key.addEventListener("click", () => playTune(key.dataset.key));
    });
    
    const handleVolume = (e) => {
      audio.volume = e.target.value;
    };
    
    const showHideKeys = () => {
      pianoKeys.forEach((key) => key.classList.toggle("hide"));
    };
    
    const pressedKey = (e) => {
      if (allKeys.includes(e.key)) playTune(e.key);
    };
    
    keysCheckbox.addEventListener("click", showHideKeys);
    volumeSlider.addEventListener("input", handleVolume);
    document.addEventListener("keydown", pressedKey);


    const pianoKeys = document.querySelectorAll(".button-container .key"),
    volumeSlider = document.querySelector(".volume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbox input");

























































