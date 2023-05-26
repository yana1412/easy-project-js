import React  from 'react'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'
import AddUsers from './AddUsers'

class  User extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      aditForm: false
    }
  }
    user = this.props.user
 render() {
  return(
    
    <div className='user' >
    <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.user.id)} className='delete-icon'/>
    <IoHammerSharp onClick={()=>{
      this.setState({
        aditForm: !this.state.aditForm
      })
    }} className='edit-icon'/>
    <h3>{this.user.first_name} {this.user.last_name}</h3>
    <img src={this.user.avatar}/>
    <p>{this.user.email}</p>
    <b>{this.user.isHappy ? 'састлив' : 'несчастлив'}</b>
    {this.state.aditForm && <AddUsers user={this.user} onAdd={this.props.onEdit}/>} 
</div>
  )
 }

}

export default User