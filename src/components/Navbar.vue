<template>
	<div>
		<nav>
			<div class="nav-wrapper" v-bind:class="{'#ffb74d orange lighten-2': visibleTask.length != 1, '#d50000 red accent-4': visibleTask.length === 1}">
				<router-link to="/">Home</router-link>
				<a>Mini trello - {{moyenneNbheure}} heures en moyenne - {{nombreTotal}} heures en tout</a>
				<router-link to="/critique">Critique</router-link>
				<router-link to="/invisible">Invisible</router-link>
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
		computed: {
			moyenneNbheure: function () {
				return Math.round(this.nombreTotal / this.datas.tasks.length);
			},
			visibleTask: function () {
				let arr = this.datas.tasks.filter(function (elt) {
					return elt.visibilite === true;
				});
				return arr
			},

			nombreTotal: function () {
				let nbTotal = 0;
				for (let i = 0; i < this.datas.tasks.length; i++) {
					nbTotal += parseInt(this.datas.tasks[i].nbheure);
				};
				return Math.round(nbTotal)
			}
		}
	}

</script>

<style scoped>
	.nav-wrapper a {
		font-size: 30px;
	}
</style>