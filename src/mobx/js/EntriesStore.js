import { observable } from "mobx";
import { autorun } from "mobx"; // debugging

class EntriesStore {
	entries = observable(["Istanbul", "Cairo"]);
	@observable test = ["Istanbul", "Cairo"];
	@observable filter = "";
}

const entriesStore = new EntriesStore;
window.entriesStore = entriesStore; // debugging

export default entriesStore;

 // debugging
autorun(() => {
	console.log(entriesStore.entries[0]);
	console.log(entriesStore.filter);
})
