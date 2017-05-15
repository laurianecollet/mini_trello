<template>
	<div>
		<navbar></navbar>
		<div class="row">
			<formulaire></formulaire>
			<task v-for="task in datas.tasks" :key="task.id" :task="task">
				<div v-if="task.visibilite === true">
					<div class="collection col s12">
						<p class="col s3"><span class="title">{{datas.tasks.intitule}}</span></p>
						<p class="col s2">Criticité : {{datas.tasks.criticite}}</p>
						<p class="col s3">Nombre d'heures : {{datas.tasks.nbheure}} h</p>
						<p><button class="btn waves-effect waves-light orange lighten-2" type="submit" name="action"><i class="material-icons">done</i></button></p>
					</div>
				</div>
			</task>
		</div>
	</div>
</template>

<script>
	import Task from './Task'
	import Navbar from './Navbar'
	import Form from './Form'
	import { Store } from '@/Store.js'

	export default {
		name: 'liste',
		components: { task: Task, formulaire: Form, navbar: Navbar },
		data() {
			return {
				datas: Store.datas,
			}
		},
	}

</script>

<style scoped>
	.row {
		padding-top: 40px;
		padding-bottom: 20px;
		width: 900px;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>