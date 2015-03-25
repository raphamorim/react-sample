var ServiceChooser = React.createClass({
    getInitialState: function(){
        return { total: 0 };
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {
        var self = this;
        var services = this.props.items.map(function(s){
            return (
                <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />
            );
        });

        return (
            <div className="ServiceChooserComponent">
                <h2 className="ServiceChooserComponent-title">Our services</h2>
                <div className="ServiceChooserComponent-services">
                    {services}
                    <p className="ServiceChooserComponent-total">Total <strong>${this.state.total.toFixed(2)}</strong></p>
                </div>
            </div>
        )
    }
});

var Service = React.createClass({
    getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){
        var active = !this.state.active;
        this.setState({ active: active });

        this.props.addTotal( active ? this.props.price : -this.props.price );
    },

    render: function(){
        return  (
            <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                {this.props.name} <strong>${this.props.price.toFixed(2)}</strong>
            </p>
        );
    }
});
