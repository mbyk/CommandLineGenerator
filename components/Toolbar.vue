<template>
  <div class="toolbarContainer">
		<div id="appLogo">
			CommandLine Generator		
		</div>
		<div id="runButton" @click="toggleHistory">
			<img src="~/assets/133_arr_hoso.svg"/>	
		</div>
		<div id="historyButton">
			history	
		</div>
		<div id="clearButton">
			clear	
		</div>

  </div>
</template>

<script>
	
export default {

	data() {
		return {
			isHistoryOpened: false
		}
	},

	methods: {
		toggleHistory: function() {
			const historyPaneWrap = document.getElementById('historyPaneWrap');
			if (this.isHistoryOpened) {
				this.isHistoryOpened = false;
				historyPaneWrap.style.display = "none";
			} else {
				this.isHistoryOpened = true;
				historyPaneWrap.style.display = "block";
			}

		}
	}
}

</script>

<style scoped>

.toolbarContainer {
	display: flex;
	flex-direction: flow;
	justify-content: left;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: #d0d2d3;
}

#appLogo {
	margin-left: 20px;
	margin-right: 40px;
	font-weight: bold;
	font-size: 1.6em;
  font-family: 'Open Sans Condensed', sans-serif;
}

#runButton {
	margin-right: 40px;
}

#runButton img {
	width: 40px;
	height: 40px;
	cursor: pointer;
}

#historyButton {
	border: 1px solid #f3f4f7;
	padding: 4px 6px;
	color: #505050;
	border-radius: 2px;
	margin-right: 20px;
	background-color: #f3f4f7;;
	cursor: pointer;
}

#clearButton {
	border: 1px solid #f3f4f7;
	color: #505050;
	padding: 4px 6px;
	border-radius: 2px;
	background-color: #f3f4f7;;
	cursor: pointer;
}

</style>

