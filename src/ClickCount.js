import React from 'react'

class ClickCount extends React.Component{
    constructor(props){
        super(props);
        this.onCilckButton = this.onCilckButton.bind(this);
        this.state={
            count:0
        }
    }

    onCilckButton () {
        const { count } = this.state;
        this.setState({
            count:count+1
        });
    }

    render(){
        const countStyle={
            margin:'16px',
            color:'red'
        }
        return(
            <div style={countStyle}>
                <button onClick={this.onCilckButton}>click me</button>
                <div>
                    ClickCount:{this.state.count}
                </div>
            </div>
        )
    }
}

export default ClickCount