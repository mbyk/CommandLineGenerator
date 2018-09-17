import Vuex from 'vuex'

const store = () => new Vuex.Store({

	state: {
		isHistoryOpend: false
	},

	mutations: {
		toggleHistory(state) {
			const historyPaneWrap = document.getElementById('historyPaneWrap');
      if (state.isHistoryOpened) {
        state.isHistoryOpened = false;
        historyPaneWrap.style.display = "none";
      } else {
        state.isHistoryOpened = true;
        historyPaneWrap.style.display = "block";
      }	
		},

		closeHistory(state) {
			const historyPaneWrap = document.getElementById('historyPaneWrap');
        state.isHistoryOpened = false;
        historyPaneWrap.style.display = "none";
		}
	}
})

export default store
