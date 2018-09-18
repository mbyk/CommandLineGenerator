<template>
  <div class="envEditorContainer">
		<pre id="editor">
{
"key": "xxxxxxxxxx",
"mode": "production"
}
		</pre>
	</div>
</template>

<script>

export default {
  head: {
    script: [
      { src: '/src/ace.js' }
    ]
	},
	data() {
		return {
		}
	},

	methods: {
	},

	mounted() {
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/tommorrow");
		editor.session.setMode("ace/mode/json");
	}
}

</script>

<style scoped>

.envEditorContainer {
	width: 100%;
	height: 100%;
}

#editor {
	margin: 0;
	width: 100%;
	height: 100%;
}

</style>

