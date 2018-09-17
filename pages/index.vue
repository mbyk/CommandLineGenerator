<template>
	<div id="generator-container">
		<div id="historyPaneWrap">
			<history/>
		</div>
		<div class="editorWrap">
			<div class="toolbar">
				<toolbar/>	
			</div>
			<div class="contentPane">
				<div class="envPane">
					<env-editor/>
				</div>
				<div class="commandPane">
					<command-editor/>
				</div>
			</div>
			<div class="resultPane">
				<result/>
			</div>
		</div>
	</div>
</template>

<script>
import History from '~/components/History.vue'
import Toolbar from '~/components/Toolbar.vue'
import EnvEditor from '~/components/EnvEditor.vue'
import CommandEditor from '~/components/CommandEditor.vue'
import Result from '~/components/Result.vue'

export default {
  components: {
    History,
    Toolbar,
    EnvEditor,
    CommandEditor,
    Result,
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
	border-right: 1px solid #d7d7d8;
  display: none;
}

.editorWrap {
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
	flex: 1;
	display: flex;
	border-top: 1px solid #d7d7d8;
	border-bottom: 1px solid #d7d7d8;
}

.envPane {
	width: 50%;
	height: 100%;
	border-right: 1px solid #d7d7d8;
}

.commandPane {
	width: 50%;
	height: 100%;
}

.resultPane {
	height: 200px;
	width: 100%;
}

#generator-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  overflow: hidden;
  width: 100%;
}

</style>

