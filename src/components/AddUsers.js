
import React  from 'react'

class  AddUsers extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            bio: '',
            age:    1,
            isHappy: false,  
     } }
 render() {
  return(
    <form ref={(el)=> this.myForm = el}>
        <input placeholder='name'onChange={(e) => this.setState({first_name: e.target.value})}/>
        <input placeholder='фамилия'onChange={(e) => this.setState({last_name: e.target.value})}/>
        <textarea placeholder='биография'onChange={(e) => this.setState({bio: e.target.value})}/>
        <input placeholder='возраст'onChange={(e) => this.setState({age: e.target.value})}/>
        <label htmlFor='isHappy'>счастлив?</label>
        <input type='checkbox' id='isHappy'onChange={(e) => this.setState({isHappy: e.target.checked})}/>
        <button type='button'onClick={()=> {
            this.myForm.reset()
            this.userAdd = {
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                bio:this.state.email,
                age:this.state.age,
                isHappy:this.state.isHappy
    
            }
            if(this.props.user)
            this.userAdd.id = this.props.user.id

            this.props.onAdd(this.userAdd)}
        }>добавить</button>

    </form>
  )
 }
}

export default AddUsers