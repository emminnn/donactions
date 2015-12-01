BlazeTemplate = React.createClass({
    componentDidMount: function() {
        var componentRoot = React.findDOMNode(this);
        var parentNode = componentRoot.parentNode;
        parentNode.removeChild(componentRoot);
        var data = {};
        _.each(this.props, function (val, key) {
            if (key.lastIndexOf('btp-', 0) === 0)
                data[key.slice(4)] = val;
        });
        return Blaze.renderWithData(this.props.template, data, parentNode);
    },
    render: function(template) {
        return (<div />)
    }
});