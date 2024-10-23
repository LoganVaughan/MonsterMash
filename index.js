console.log('Logan');



function monsterGenerate(){


    function newMonster(name, toes, eyes, wools){
        this.name = name;
        this.toes = toes;
        this.eyes = eyes;
        this.wools = wools;

        this.full = function(){
            return `${this.name} has ${this.toes} frog toes, ${this.eyes} newt eyes, and ${this.wools} bat wools.`
        }
        
    }


    const MonOne = new newMonster('Agatha',4, 12, 36);
    const MonTwo = new newMonster('Beharitx', 6, 18, 54);
    const MonThree = new newMonster('Maleficent', 2, 6, 18);

    document.getElementById('MonOne').textContent = MonOne.full();
    document.getElementById('MonTwo').textContent = MonTwo.full();
    document.getElementById('MonThree').textContent = MonThree.full();

}