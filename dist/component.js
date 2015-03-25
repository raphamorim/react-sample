"use strict";

var ServiceChooser = React.createClass({
    displayName: "ServiceChooser",

    getInitialState: function getInitialState() {
        return { total: 0 };
    },

    addTotal: function addTotal(price) {
        this.setState({ total: this.state.total + price });
    },

    render: function render() {
        var self = this;
        var services = this.props.items.map(function (s) {
            return React.createElement(Service, { name: s.name, price: s.price, active: s.active, addTotal: self.addTotal });
        });

        return React.createElement(
            "div",
            { className: "ServiceChooserComponent" },
            React.createElement(
                "h2",
                { className: "ServiceChooserComponent-title" },
                "Services"
            ),
            React.createElement(
                "div",
                { className: "ServiceChooserComponent-services" },
                services,
                React.createElement(
                    "p",
                    { className: "ServiceChooserComponent-total" },
                    "Total ",
                    React.createElement(
                        "strong",
                        null,
                        "$",
                        this.state.total.toFixed(2)
                    )
                )
            )
        );
    }
});

var Service = React.createClass({
    displayName: "Service",

    getInitialState: function getInitialState() {
        return { active: false };
    },

    clickHandler: function clickHandler() {
        var active = !this.state.active;
        this.setState({ active: active });

        this.props.addTotal(active ? this.props.price : -this.props.price);
    },

    render: function render() {
        return React.createElement(
            "p",
            { className: this.state.active ? "ServiceChooserComponent-service--active" : "ServiceChooserComponent-service", onClick: this.clickHandler },
            this.props.name,
            " ",
            React.createElement(
                "strong",
                null,
                "$",
                this.props.price.toFixed(2)
            )
        );
    }
});

var Timer = React.createClass({
    displayName: "Timer",

    getInitialState: function getInitialState() {
        return { elapsed: 0 };
    },

    componentDidMount: function componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.timer);
    },

    tick: function tick() {
        this.setState({ elapsed: new Date() - this.props.start });
    },

    render: function render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);

        return React.createElement(
            "div",
            { className: "TimerComponent" },
            React.createElement(
                "h2",
                { className: "TimerComponent-title" },
                "Timer"
            ),
            React.createElement(
                "p",
                null,
                "This example was started ",
                React.createElement(
                    "b",
                    null,
                    seconds,
                    " seconds"
                ),
                " ago."
            )
        );
    }
});
var timerElement = document.querySelector("#Timer"),
    serviceChooserElement = document.querySelector("#ServiceChooser");

var services = [{ name: "Web Development", price: 300 }, { name: "Design", price: 400 }, { name: "Integration", price: 250 }, { name: "Training", price: 220 }];

React.render(React.createElement(Timer, { start: Date.now() }), timerElement);

React.renderComponent(React.createElement(ServiceChooser, { items: services }), serviceChooserElement);