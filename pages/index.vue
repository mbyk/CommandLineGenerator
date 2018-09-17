<template>
	<div id="generator-container">
		<div id="historyPaneWrap">
		</div>
		<div class="editorWrap">
			<div class="toolbar">
				<toolbar/>	
			</div>
			<div class="contentPane">
				<div class="envPane">
				</div>
				<div class="commandPane">
				</div>
			</div>
			<div class="resultPane">
			</div>
		</div>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Toolbar from '~/components/Toolbar.vue'

export default {
  components: {
    AppLogo,
    Toolbar,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

#historyPaneWrap {
	width: 300px;
	background-color: red;
  display: none;
}

.editorWrap {
	background-color: green;
	//width: calc(100%-300px);
//	width: 400px;
	height: 100%;
	display: flex;
	flex: 1;
	flex-direction: column
}

.toolbar {
	height: 70px;
	width: 100%;
	background-color: blue;
}

.contentPane {
	width: 100%;
	background-color: white;
	flex: 1;
	display: flex;
}

.envPane {
	width: 50%;
	height: 100%;
	background-color: yellow;
}

.commandPane {
	width: 50%;
	height: 100%;
	background-color: gray;
}

.resultPane {
	height: 200px;
	width: 100%;
	background-color: orange;
}

#generator-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  overflow: hidden;
  width: 100%;
  background-color: orange;
}

</style>

