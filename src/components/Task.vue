<template>
	<div v-if="task.visibilite === true">
		<div class="collection col s12">
			<p class="col s3"><span class="title">{{task.intitule}}</span></p>
			<p class="col s2">Criticité : {{task.criticite}}</p>
			<p class="col s3">Nombre d'heures : {{task.nbheure}} h</p>
			<p><button @click="deleteTask(task)" class="btn waves-effect waves-light orange lighten-2" type="submit" name="action"><i class="material-icons">done</i></button></p>
		</div>
	</div>
</template>

<script>
	import { Store } from '@/Store.js'

	export default {
		name: 'task',
		props: ['task'],
		data() {
			return {
				counter: 0,
			}
		}, methods: {
			deleteTask: function (theTask) {
				let position = Store.datas.tasks.indexOf(theTask);
				if (position != -1) { // Si la position est trouvé on supprime la tache à la position donnée
					Store.datas.tasks.splice(position, 1);
					this.counter += 1;
					console.log(this.counter)
				}
			},
		}
	}

</script>

<style scoped>

</style>