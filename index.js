class Heroi {
    
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = 'ataque desconhecido';
      }
  
      
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  const heroi1 = new Heroi('Gandalf', 120, 'mago');
  const heroi2 = new Heroi('Arthur', 30, 'guerreiro');
  const heroi3 = new Heroi('Bruce', 40, 'monge');
  const heroi4 = new Heroi('Ryu', 25, 'ninja');
  
  
  heroi1.atacar(); // o mago atacou usando magia
  heroi2.atacar(); // o guerreiro atacou usando espada
  heroi3.atacar(); // o monge atacou usando artes marciais
  heroi4.atacar(); // o ninja atacou usando shuriken
  