let data;
let taille = ['grand','moyen','petit','moderer','enorme','flou']


function preload() {
  data = loadJSON("data.json");
}


function setup(){
	let smsListe = data.corpus.sms;
    print(smsListe)
    console.log(random(smsListe).cont); //affiche le premier sms
    console.log('nbr sms : '+smsListe.length); // affiche le nombre de sms 


    for(let i = 0; i <smsListe.length; i++){
        let smsData = smsListe[i];
        let texte = smsData.cont

          if(typeof texte == 'object'){
    texte = texte.__text;
    }
        let p = createP(texte);
        p.addClass(random(taille))

        let c = map(i,0,smsListe.length,0,100)

let top = random(255)+'px' //renvoit une valeur entre 0px et 55px
p.style('top', top);

// let c = 'rgb('+random(255)+',255,255)' 
// p.style('color', c);

let t = random(50)+'px' //renvoit une valeur entre 0px et 55px
p.style('font-size', taille);
        
let largeur = random(500)+'px' //renvoit une valeur entre 0px et 55px
p.style('width', taille);
    }

     let sms = data.corpus.sms;
	sms = shuffle(sms); //la fonction suffle mélange une liste

  listeMotsAvecFrequences(sms)

   for (let i = 0; i < smsListe.length; i++) {
    let smsData = smsListe[i];
    let texte = smsData.cont;

    if (typeof texte == "object") {
      texte = texte.__text;
    }

	let nbrCaractère = texte.length;
	if(neContientPas(texte, 'bonjour')){ // compléter la condition pour n'imprimer que les sms de plus de 50 caractères
 
    let p = createP(texte);
    }
  }
  }
