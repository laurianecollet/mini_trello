export const Store = {

	datas: {
		tasks: [
			{
				"intitule": "Faire une navbar",
				"criticite": 10,
				"nbheure": 1,
				"visibilite": true,
			},
			{
				"intitule": "Faire une Liste",
				"criticite": 8,
				"nbheure": 2,
				"visibilite": false,
			},
			{
				"intitule": "Faire un formulaire",
				"criticite": 4,
				"nbheure": 4,
				"visibilite": false,
			},
			{
				"intitule": "Faire un composant Task",
				"criticite": 3,
				"nbheure": 8,
				"visibilite": true,
			},
			{
				"intitule": "Faire une route critique",
				"criticite": 10,
				"nbheure": 6,
				"visibilite": true,
			},
			{
				"intitule": "Faire une route Invisible",
				"criticite": 6,
				"nbheure": 8,
				"visibilite": true,
			},
			{
				"intitule": "Importer materialize",
				"criticite": 5,
				"nbheure": 1,
				"visibilite": true,
			},
			{
				"intitule": "Stocker les tâches dans un Store",
				"criticite": 2,
				"nbheure": 8,
				"visibilite": true,
			},
			{
				"intitule": "Filtrer avec un composant Range",
				"criticite": 1,
				"nbheure": 5,
				"visibilite": true,
			},
			{
				"intitule": "Créer un composant Search",
				"criticite": 2,
				"nbheure": 8,
				"visibilite": true,
			}
		],

		counter: 0,
		word: '',
		range: 0,

	},
	search() {
		let tab = [];
		let reg = new RegExp(this.datas.word, "i");

		if (this.datas.word.length >= 3) {
			console.log('hello')
			return tab = this.datas.tasks.filter((elt) => reg.test(elt.intitule));
		} else {
			tab = this.datas.tasks;
		}
		if (this.datas.range > 0) {
			console.log('coucou')
			tab = this.datas.tasks.filter((elt) => elt.nbheure >= this.datas.range)
		} else {
			tab = this.datas.tasks
		}
		console.log(tab)

		return tab;
	},







};