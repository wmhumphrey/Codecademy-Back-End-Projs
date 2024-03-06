// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// pAequor constructor
const pAequorFactory = (num, dna) => {
  return {
    _specimenNum: num,
    _dna: dna,
    mutate() {
      const randBase = Math.floor(Math.random() * 15);
      notA = ['T','C','G'];
      notT = ['A','C','G'];
      notC = ['A','T','G'];
      notG = ['A','T','C'];
      if (this._dna[randBase] === 'A'){
        this._dna[randBase] = notA[Math.floor(Math.random() * 3)];
      } else if (this._dna[randBase] === 'T'){
        this._dna[randBase] = notT[Math.floor(Math.random() * 3)];
      } else if (this._dna[randBase] === 'C') {
        this._dna[randBase] = notC[Math.floor(Math.random() * 3)];
      } else {
        this._dna[randBase] = notG[Math.floor(Math.random() * 3)];
      }
      return this._dna;
    },
    comapreDNA(pAequor) {
      let count = 0;
      for(let i = 0; i < pAequor._dna.length; i++){
        if(this._dna[i] === pAequor._dna[i]){
          count++;
        }
      }
      let percent = (count/pAequor._dna.length) * 100;
      console.log(`Specimen #${this._specimenNum} and specimen #${pAequor._specimenNum} have ${percent.toFixed(2)}% DNA in common`);
    },
    willLikelySurvive() {
      let count = 0;
      for(let i = 0; i < this._dna.length; i++){
        if(this._dna[i] === 'C' || this._dna[i] === 'G'){
          count++;
        }
      }
      let percent = (count / this._dna.length) * 100;
      if(percent >= 60){
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let strand1 = this._dna;
      let strand2 = [];
      for(let i = 0; i < strand1.length; i++){
        if(strand1[i] === 'A'){
          strand2.push('T');
        } else if (strand1[i] === 'T'){
          strand2.push('A');
        } else if (strand1[i] === 'C'){
          strand2.push('G');
        } else {
          strand2.push('C');
        }
      }
      return strand2;
    }
  };
};

// Creates array of 30 surviving specimines 
let surviving = [];
while(surviving.length < 30){
  let specNum = surviving.length + 1;
  let newPAequor = pAequorFactory(specNum, mockUpStrand());
  if(newPAequor.willLikelySurvive()){
    surviving.push(newPAequor);
  }
}
console.log(surviving);


// Test

/*
const testDNA1 = pAequorFactory(1, mockUpStrand());
const testDNA2 = pAequorFactory(2, mockUpStrand());

const compTest1 = testDNA1.complementStrand();
const compTest2 = testDNA2.complementStrand();

console.log('DNA: ' + testDNA1._dna);
console.log('Comp: ' + compTest1);
console.log('DNA: ' + testDNA2._dna);
console.log('Comp: ' + compTest2);

testDNA1.comapreDNA(testDNA2);

console.log(testDNA1.willLikelySurvive());
console.log(testDNA2.willLikelySurvive());
*/


