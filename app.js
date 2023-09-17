
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
      C: 'D3.ogg',
      D: 'E4.ogg',
      E: 'A2.ogg',
      F: 'E4.ogg',
      G: 'A3.ogg',
      A: 'C5.ogg',
      B: 'F4.ogg'
    };
  
    const scale2 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale3 = {
      C: 'C3.ogg',
      D: 'D3.ogg',
      E: 'E4.ogg',
      F: 'F4.ogg',
      G: 'G4.ogg',
      A: 'Ab4.ogg',
      B: 'Bb3.ogg'
    };

    const scale4 = {
      C: 'E3.ogg',
      D: 'Gb4.ogg',
      E: 'G3.ogg',
      F: 'A2.ogg',
      G: 'B2.ogg',
      A: 'Db4.ogg',
      B: 'Eb4.ogg'
    };

    const scale5 = {
      C: 'F3.ogg',
      D: 'Gb3.ogg',
      E: 'A3.ogg',
      F: 'Bb2.ogg',
      G: 'C5.ogg',
      A: 'Db4.ogg',
      B: 'F4.ogg'
    };

    const scale6 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale7 = {
      C: 'G3.ogg',
      D: 'Ab4.ogg',
      E: 'Bb3.ogg',
      F: 'C3.ogg',
      G: 'Db3.ogg',
      A: 'Eb3.ogg',
      B: 'Gb3.ogg'
    };

    const scale8 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale9 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale10 = {
      C: 'A2.ogg',
      D: 'Bb3.ogg',
      E: 'C3.ogg',
      F: 'Db4.ogg',
      G: 'Eb3.ogg',
      A: 'F4.ogg',
      B: 'Ab4.ogg'
    };

    const scale11 = {
      C: 'B3.ogg',
      D: 'C5.ogg',
      E: 'D4.ogg',
      F: 'E3.ogg',
      G: 'F4.ogg',
      A: 'Gb4.ogg',
      B: 'A3.ogg'
    };

    const scale12 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale13 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale14 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale15 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale16 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale17 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale18 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale19 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale20 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale21 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale22 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale23 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale24 = {
      C: 'A4.ogg',
      D: 'B5.ogg',
      E: 'E4.ogg',
      F: 'A5.ogg',
      G: 'D3.ogg',
      A: 'F3.ogg',
      B: 'C5.ogg'
    };

    const scale25 = {
      C: 'A2.ogg',
      D: 'B3.ogg',
      E: 'C3.ogg',
      F: 'D4.ogg',
      G: 'E3.ogg',
      A: 'F3.ogg',
      B: 'B4.ogg'
    };

    const scale26 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale27 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };

    const scale28 = {
      C: 'D3.ogg',
      D: 'C4.ogg',
      E: 'E4.ogg',
      F: 'F3.ogg',
      G: 'A2.ogg',
      A: 'B2.ogg',
      B: 'A3.ogg'
    };


    let intervalIds = []; // Array de IDs de intervalo para las melodías
    let tempo = 120; // Tempo inicial (BPM)

    // Función para reproducir una nota de una melodía
    function playNote(note, scale) {
      const audio = new Audio(`sounds/${scale[note]}`); // Ruta al archivo de sonido correspondiente a la nota
      audio.play();
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;
      });
    }

    // Función para reproducir una melodía con el tempo actualizado
    //function playMelody(scale) {
      //const melody = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; // Melodía en escala
      //let beat = 0; // Contador de tiempo de beats
      //const intervalId = setInterval(() => {
        //playNote(melody[beat % melody.length], scale);
        //beat++;
      //}, 25000 / tempo); // Reducir el intervalo de tiempo para hacer que las melodías sean más rápidas
      //intervalIds.push(intervalId); // Almacenar el ID del intervalo para detenerlo más tarde
    //}
    
    function playSalsaMelody(scale) {
      const melodyScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    
      const rhythmPattern = [0, 1, 1, 2, 1, 0, 3]; // Un patrón rítmico de ejemplo
    
      let beat = 0;
      const intervalId = setInterval(() => {
       
        const rhythmIndex = rhythmPattern[beat % rhythmPattern.length, scale];
        
        if (rhythmIndex !== 3) { // No reproducir sonido en el cuarto beat (silencio)
          playNote(melodyScale[beat % melodyScale.length],scale);
        }  
        beat++;
      }, 24000 / tempo); // Intervalo de tiempo más rápido para lograr un ritmo rápido
      intervalIds.push(intervalId); // Almacenar el ID del intervalo para detenerlo más tarde
    }
    const salsaButton = document.getElementById('salsaButton');
salsaButton.addEventListener('click', playSalsaMelody);
    

    // Función para detener todas las melodías
    function stopMelodies() {
      intervalIds.forEach(intervalId => clearInterval(intervalId));
      intervalIds = [];
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
  playButtons[i].addEventListener('click', function() {
    // Cambia la clase 'active' del botón al hacer clic
    this.classList.toggle('active');  
    // Agrega aquí tu código adicional para el evento del botón
  });
}

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
  } else if (button.classList.contains('btn-25')) {
    button.classList.toggle('btn-25-active');
  } else if(button.classList.contains('btn-26')) {
    button.classList.toggle('btn-26-active');
  } else if (button.classList.contains('btn-27')) {
    button.classList.toggle('btn-27-active');
  } else if (button.classList.contains('btn-28')) {
    button.classList.toggle('btn-28-active');
  }
}

    // Función para actualizar la visualización del tempo
    function updateTempoDisplay() {
        const tempoDisplay = document.getElementById('tempoDisplay');
      tempoDisplay.textContent = `Tempo: ${tempo} BPM`;
    }

    // Obtener los botones y agregar event listeners
    const playButton1 = document.getElementById('playButton1');
    playButton1.addEventListener('click', () => {
      playSalsaMelody(scale1);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });
    

    const playButton2 = document.getElementById('playButton2');
    playButton2.addEventListener('click', () => {
      playSalsaMelody(scale2);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton3 = document.getElementById('playButton3');
    playButton3.addEventListener('click', () => {
      playSalsaMelody(scale3);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton4 = document.getElementById('playButton4');
    playButton4.addEventListener('click', () => {
      playSalsaMelody(scale4);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton5 = document.getElementById('playButton5');
    playButton5.addEventListener('click', () => {
      playSalsaMelody(scale5);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton6 = document.getElementById('playButton6');
    playButton6.addEventListener('click', () => {
      playSalsaMelody(scale6);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton7 = document.getElementById('playButton7');
    playButton7.addEventListener('click', () => {
      playSalsaMelody(scale7);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton8 = document.getElementById('playButton8');
    playButton8.addEventListener('click', () => {
      playSalsaMelody(scale8);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton9 = document.getElementById('playButton9');
    playButton9.addEventListener('click', () => {
      playSalsaMelody(scale9);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton10 = document.getElementById('playButton10');
    playButton10.addEventListener('click', () => {
      playSalsaMelody(scale10);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton11 = document.getElementById('playButton11');
    playButton11.addEventListener('click', () => {
      playSalsaMelody(scale11);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton12 = document.getElementById('playButton12');
    playButton12.addEventListener('click', () => {
      playSalsaMelody(scale12);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton13 = document.getElementById('playButton13');
    playButton13.addEventListener('click', () => {
      playSalsaMelody(scale13);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton14 = document.getElementById('playButton14');
    playButton14.addEventListener('click', () => {
      playSalsaMelody(scale14);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton15 = document.getElementById('playButton15');
    playButton15.addEventListener('click', () => {
      playSalsaMelody(scale15);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton16 = document.getElementById('playButton16');
    playButton16.addEventListener('click', () => {
      playSalsaMelody(scale16);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton17 = document.getElementById('playButton17');
    playButton17.addEventListener('click', () => {
      playSalsaMelody(scale17);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton18 = document.getElementById('playButton18');
    playButton18.addEventListener('click', () => {
      playSalsaMelody(scale18);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton19 = document.getElementById('playButton19');
    playButton19.addEventListener('click', () => {
      playSalsaMelody(scale19);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton20= document.getElementById('playButton20');
    playButton20.addEventListener('click', () => {
      playSalsaMelody(scale20);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton21 = document.getElementById('playButton21');
    playButton21.addEventListener('click', () => {
      playSalsaMelody(scale21);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton22 = document.getElementById('playButton22');
    playButton22.addEventListener('click', () => {
      playSalsaMelody(scale22);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton23 = document.getElementById('playButton23');
    playButton23.addEventListener('click', () => {
      playSalsaMelody(scale23);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton24 = document.getElementById('playButton24');
    playButton24.addEventListener('click', () => {
      playSalsaMelody(scale24);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton25 = document.getElementById('playButton25');
    playButton25.addEventListener('click', () => {
      playSalsaMelody(scale25);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton26 = document.getElementById('playButton26');
    playButton26.addEventListener('click', () => {
      playSalsaMelody(scale26);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton27 = document.getElementById('playButton27');
    playButton27.addEventListener('click', () => {
      playSalsaMelody(scale27);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
    });

    const playButton28 = document.getElementById('playButton28');
    playButton28.addEventListener('click', () => {
      playSalsaMelody(scale28);
      setTimeout(stopMelodies, 80000 / tempo * 7); // Detener después de una vuelta completa de la melodía
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

























































