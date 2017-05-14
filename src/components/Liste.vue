<template>
	<div>
		<div class="row">
			<task v-for="task in tasks" :key="task.id" :task="task"></task>
		</div>
	</div>
</template>

<script>
	import Task from './Task'
	import { Store } from '@/Store.js'

	export default {
		name: 'liste',
		components: { task: Task },
		data() {
			return {
				tasks: Store.datas.tasks
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