import document from 'document';
import { display } from 'display';

(function () {
	let isOn = true;
	let defaultDisplayValue = display.brightnessOverride;
	let defaultAutoOff = display.autoOff;
	let root = document.getElementById('background');
	let background = document.getElementById('root');
	let interval = null;
	function changeDisplay() {
		if (isOn) {
			background.class = 'on';
			background.animate('enable'); // Specify the name of the event to trigger
			display.brightnessOverride = 'max';
			interval = setInterval(() => {
				display.poke();
			}, 50);
		} else {
			background.class = 'off';
			background.animate('disable'); // Specify the name of the event to trigger
			display.brightnessOverride = defaultDisplayValue;
			clearInterval(interval);
		}
	}

	root.onmouseup = function () {
		isOn = !isOn;
		changeDisplay();
	};

	changeDisplay();
})();
