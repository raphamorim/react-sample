var timerElement = document.querySelector('#Timer'),
	serviceChooserElement = document.querySelector('#ServiceChooser');
	
var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

React.render(
  	<Timer start={Date.now()} />, 
  	timerElement 
);

React.renderComponent(
    <ServiceChooser items={ services } />,
    serviceChooserElement
);
