


  var CheckList = React.createClass({
    delete: function(i) {
      this.props.delete(i);
    },
    
    displayTask: function(task,i) {
      return <li><div onClick={this.delete.bind(this,i)}></div>
             {task}
             </li>
    },
    
    render: function() {
      
      return (
        <ul >
          { this.props.items.map(this.displayTask) }
        </ul>  
      ); 
    }
  
  }); 
  
  var CheckActions = React.createClass({
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
        <div>
          <h1>My ToDo List</h1>
          <CheckList items={this.state.items} delete={this.delete} />
          
          <input onChange={this.onChange} value={this.state.task}/>            
          <button onClick={this.addTask}>Add a ToDo</button>            
        </div>
      );
    }
  
  });
  
  React.render(<CheckActions />, document.getElementById('container'));