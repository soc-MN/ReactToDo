


  var CheckList = React.createClass({displayName: "CheckList",
    delete: function(i) {
      this.props.delete(i);
    },
    
    displayTask: function(task,i) {
      return React.createElement("li", null, React.createElement("div", {onClick: this.delete.bind(this,i)}), 
             task
             )
    },
    
    render: function() {
      
      return (
        React.createElement("ul", null, 
           this.props.items.map(this.displayTask) 
        )  
      ); 
    }
  
  }); 
  
  var CheckActions = React.createClass({displayName: "CheckActions",
    getInitialState: function() {
      return {
        items: [],
        task: ''
      }
    },
    addTask: function(e) {
      this.setState({
        items: this.state.items.concat([this.state.task]),
        task: ''
      });
    },
    onChange: function(e) {
      this.setState({task: e.target.value});
    },
    delete: function(i) {
      delete this.state.items[i];
      this.setState({items: this.state.items});
    },
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("h1", null, "My ToDo List"), 
          React.createElement(CheckList, {items: this.state.items, delete: this.delete}), 
          
          React.createElement("input", {onChange: this.onChange, value: this.state.task}), 
          React.createElement("button", {onClick: this.addTask}, "Add a ToDo")
        )
      );
    }
  
  });
  
  React.render(React.createElement(CheckActions, null), document.getElementById('container'));