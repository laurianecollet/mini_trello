<template>
	<div v-if="task.visibilite === true">
		<ul class="collection col s12">
			<li class="collection-item avatar">
				<span class="title">Tâche : {{task.intitule}}</span>
				<p>Criticité : {{task.criticite}}</p>
				<p>Nombre d'heures : {{task.nbheure}} heures</p>
				<p>Visibilité : {{task.visibilite}}</p>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'task',
		props: ['task'],
	}

</script>

<style scoped>

</style>