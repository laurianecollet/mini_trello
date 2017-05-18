<template>
	<div>
		<form action="#" class="col s12">
			<div class="row">
				<div class="input-field col s12">
					<p>{{datas.range}}</p>
					<p class="range-field">
						<input type="range" id="test5" min="0" max="10" v-model.number="datas.range" @click="rangeFunction" />
					</p>
				</div>

			</div>
		</form>
	</div>
</template>

<script>
	import { Store } from '@/Store.js'

	export default {
		name: 'rangeinput',
		data() {
			return {
				datas: Store.datas
			}
		},
		methods: {
			rangeFunction() {
				Store.search();
			}
		}
	}

</script>

<style scoped>
	div {
		width: 900px;
		margin: auto;
	}
</style>