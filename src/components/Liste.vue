<template>
	<div>
		<div class="row">
			<task v-for="task in tasks" :key="task.id" :task="task" v-if="task.visibilite === true"></task>

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
				datas: Store.datas,
			}
		},
		computed: {
			tasks() {
				return Store.search();
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