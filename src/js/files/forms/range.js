// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {

	const priceSlider = document.querySelector('#range-slider');
   
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: 2000000, // [0,200000]
			connect: [true, false],
			range: {
				'min': [0],
				'max': [5000000]
			},
         step: 10000,
         tooltips: true,
		});
      let tooltip = document.querySelector(".noUi-tooltip");
      let handle = document.querySelector(".noUi-handle");
      let attr;
      let index;
      let b;
      priceSlider.noUiSlider.on("update", () => {
         attr = handle.getAttribute("aria-valuenow");
         index = attr.indexOf('.');
         b = attr.slice(0, index); 
         if (b.length === 5) {
            tooltip.innerHTML = `0.0${b[0]}$m`
         }else if(b.length === 6){
            tooltip.innerHTML = `0.${b[0]}$m`
            
         }else{
            tooltip.innerHTML = `${b.substring(0, 2).split('').join().replace(",", ".")}$m`

         }
      })
      
		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;  
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}
}
rangeInit();
