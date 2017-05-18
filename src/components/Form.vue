<template>
	<div>
		<form class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<input id="first_name" type="text" class="validate" v-model="newTask.intitule">
					<label for="first_name">Intitulé</label>
				</div>
				<div class="input-field col s12">
					<input id="last_name" type="text" class="validate" v-model="newTask.criticite">
					<label for="last_name">Criticité</label>
				</div>
				<div class="input-field col s12">
					<input id="last_name" type="text" class="validate" v-model="newTask.nbheure">
					<!--mettre v-model.number permet d'éviter de parse-->
					<label for="last_name">Nombre d'heure</label>
				</div>
				<div class="input-field col s12">
					Visibilité
					<p>
						<input name="group1" type="radio" id="test1" value="true" v-model="newTask.visibilite" />
						<label for="test1">Oui</label>

						<input name="group1" type="radio" id="test2" value="false" v-model="newTask.visibilite" />
						<label for="test2">Non</label>
					</p>
				</div>
			</div>
			<button @click="add" class="btn waves-effect waves-light orange lighten-2" type="submit" name="action">Envoyer</button>
		</form>
		<p v-if="counterMessage === true">Hé oh ! Doucement</p>
	</div>
</template>

<script>
	import { Store } from '@/Store.js'
	import { Bus } from '@/Bus.js'

	export default {
		name: 'task',
		created() {
			Bus.$on('counter3', () => this.counterMessage = true)
		},
		data() {
			return {
				newTask: {
					intitule: '',
					criticite: '',
					nbheure: '',
					visibilite: true,
				},
				counterMessage: false,

			}
		},
		methods: {
			add() {
				Store.datas.tasks.push(this.newTask)
				console.log(Store.datas.tasks)
				Bus.$emit('notification');
				this.newTask = {
					intitule: '',
					criticite: '',
					nbheure: '',
					visibilite: true,
				}
			}
		}
	}

</script>

<style scoped>
	.row {
		padding-top: 40px;
		padding-bottom: 20px;
		width: 900px;
	}
	
	form p {
		text-align: center;
	}
</style>