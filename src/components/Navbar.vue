<template>
	<div>
		<nav>
			<div class="nav-wrapper" v-bind:class="{'#ffb74d orange lighten-2': datas.tasks.length != 1, '#d50000 red accent-4': datas.tasks.length === 1}">
				<a>Mini trello</a>
			</div>
		</nav>
	</div>
</template>

<script>
	import { Bus } from '@/Bus.js'
	import { Store } from '@/Store.js'
	export default {
		name: 'navbar',
		data() {
			return {
				datas: Store.datas,
			}
		},
		created() {
			let toastContent = ('<i class="material-icons">add_alert</i>');
			Bus.$on('notification', () =>
				Materialize.toast(`New task ${toastContent}`, 1000),
			);
		},
	}

</script>

<style scoped>
	.nav-wrapper a {
		font-size: 30px;
	}
</style>