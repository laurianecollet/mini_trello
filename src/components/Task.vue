<template>
	<div>
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
	import { Bus } from '@/Bus.js'


	export default {
		name: 'task',
		props: ['task'],
		data() {
			return {
				datas: Store.datas
			}
		},
		methods: {
			deleteTask: function (theTask) {
				Store.datas.counter += 1;
				console.log(Store.datas.counter)
				let position = Store.datas.tasks.indexOf(theTask);
				if (position != -1) { // Si la position est trouvé on supprime la tache à la position donnée
					Store.datas.tasks.splice(position, 1);
					if (Store.datas.counter >= 3) {
						Bus.$emit('counter3');
					}
				}
			},
		}
	}

</script>

<style scoped>

</style>