var Timer = React.createClass({
    getInitialState: function(){
        return { elapsed: 0 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);    

        return (
            <div className="TimerComponent">
                <h2 className="TimerComponent-title">Timer</h2>
                <p>This example was started <b>{seconds} seconds</b> ago.</p>
            </div>
        )
    }
});