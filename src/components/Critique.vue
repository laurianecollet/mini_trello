<template>
	<div>
		<div class="row">
			<task v-for="task in datas.tasks" :key="task.id" :task="task"></task>
			<formulaire></formulaire>
		</div>
	</div>
</template>

<script>
	import Task from './Task'
	import Form from './Form'
	import { Store } from '@/Store.js'

	export default {
		name: 'liste',
		components: { task: Task, formulaire: Form },
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
</style>