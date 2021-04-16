import React from 'react'
import Avatar from './Avatar'
import Data from './Data'


class InfoPage extends React.Component{
    render(){
        return(
          <div>
              <Avatar updateavatar={this.props.updateavatar}
                      avatar={this.props.data.avatar}
                      removeAvatar={this.props.removeAvatar}/>
                      
              <Data data={this.props.data}
                changeHandler={this.props.changeHandler}
                save={this.props.save}
                />
          </div>
        )
    }
}

export default InfoPage