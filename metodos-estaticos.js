class controleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
    // Método de instância
    aumentaVolume() {
        this.volume += 1;
    }
    // Método estatico
    static trocarPilha() {
        console.log('Ok, vou trocar a pilha!')
    }
}

const controle1 = new controleRemoto('Lg');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
console.log(controle1)
controleRemoto.trocarPilha();

