<template>
	<div>
		<navbar></navbar>
		<div class="row">
			<formulaire></formulaire>
			<task v-for="task in datas.tasks" :key="task.id" :task="task"></task>
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