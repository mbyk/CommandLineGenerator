<template>
  <div class="historyContainer">
		<div class="historyHeader">
			<div class="headerLeft">
			</div>
			<div class="headerCenter">
				History
			</div>
			<div class="headerRight">
				<img src="~/assets/cross_hoso.svg" width="30" height="30" class="close" @click="$store.commit('closeHistory')"/>
			</div>
		</div>
		<div class="historyList">
			<div class="historyItemWrapper">
				<div class="historyItem" v-for="i in 12" v-bind:key="i">
					command {{ i }} 	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default {

	data() {
		return {
		}
	},

	methods: {
	}
}

</script>

<style scoped>

.historyContainer {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.historyHeader {
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: row;
}

.historyList {
	width: 100%;
	border-top: 1px solid #d7d7d8;
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	position: relative;
}

.historyItemWrapper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}

.historyItem {
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #d7d7d8;
	padding: 10px;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	display: flex;
	align-items: center;
}

.historyItem:hover {
	background-color: #fc636b;
	color: white;
	cursor: pointer;
}

.headerLeft {
	width: 70px;
	height: 100%;
}

.headerRight {
	width: 70px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.close {
	cursor: pointer;
}

.headerCenter {
	height: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}

</style>

