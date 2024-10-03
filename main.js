// Se crea el objeto principal del juego

const game = {

    choices: ['piedra', 'papel', 'tijeras'], // Opciones del juego
  
    // Función para obtener una elección aleatoria para la computadora

    getRandomChoice: function() {

      const randomIndex = Math.floor(Math.random() * this.choices.length);

      return this.choices[randomIndex];

    },
  
    // Con esta función se determina el ganador
    
    determineWinner: function(playerChoice, computerChoice) {

      if (playerChoice === computerChoice) {

        return 'Empate';

      }
      if (

        (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijeras' && computerChoice === 'papel')

      ) {
        return 'Jugador';
      }
      return 'Computadora';
    },
  
    // con esta función se muestra el resultado de la ronda

    displayRoundResult: function(playerChoice, computerChoice, winner) {

      alert(`Elegiste: ${playerChoice}\nLa computadora eligió: ${computerChoice}\nResultado: ${winner}`);

    },
  
    // esta función gestiona el ciclo de juego

    playGame: function() {

      let playing = true;
  
      // Ciclo de juego

      while (playing) {

        // Para obtener la elección del jugador

        const playerChoice = prompt('Elegí piedra, papel o tijeras (o escribi "salir" para terminar el juego):').toLowerCase();
  
        // se verifica si el jugador quiere salir del juego

        if (playerChoice === 'salir') {

          playing = false;

          alert('Gracias por jugar. ¡Hasta pronto!');

          break;
        }
  
        // se valida la elección del jugador

        if (!this.choices.includes(playerChoice)) {

          alert('Elección no válida, intenta nuevamente.');

          continue;
        }
  
        // se obtiene la elección de la computadora

        const computerChoice = this.getRandomChoice();
  
        // se determina el ganador

        const winner = this.determineWinner(playerChoice, computerChoice);
  
        // se muestra el resultado

        this.displayRoundResult(playerChoice, computerChoice, winner);

      }
    }
  };
  
  // Inicia el juego
  game.playGame();
  
  