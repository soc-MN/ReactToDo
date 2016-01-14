


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
        task: '',
        count: 0
      }
    },
    addTask: function(e) {
      this.setState({
        items: this.state.items.concat([this.state.task]),
        task: '',
        count: this.state.items.length+1
      });
    },
    onChange: function(e) {
      this.setState({task: e.target.value});
    },
    delete: function(i) {
      delete this.state.items[i];
      delete this.state.count;
      this.setState({
        items: this.state.items,
        count: this.state.items.length-1
      });
     
    },

    render: function() {
      return (
        <div>
          <h1>My ToDo List</h1>
          <h4> No. items todo: {this.state.count}</h4>
          <CheckList items={this.state.items} delete={this.delete} />
          
          <input onChange={this.onChange} value={this.state.task}/>            
          <button onClick={this.addTask}>Add a ToDo</button>            
        </div>
      );
    }
  
  });
  
  React.render(<CheckActions />, document.getElementById('container'));