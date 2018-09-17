<template>
  <div class="historyContainer">
		<div class="historyHeader">
			<div class="headerLeft">
			</div>
			<div class="headerCenter">
				History
			</div>
			<div class="headerRight">
				<img src="~/assets/cross_hoso.svg" width="30" height="30" class="close"/>
			</div>
		</div>
		<div class="historyList">
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
	flex: 1;
	border-top: 1px solid #d7d7d8;
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

