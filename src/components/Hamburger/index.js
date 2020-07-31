import React from 'react'
import SideMenu from './SideMenu'
import './styles.css'

const getAnimationCS = (isActive) => {
  if (isActive === null) {
    return ''
  } else if (isActive === true) {
    return 'active'
  } else if (isActive === false) {
    return 'inactive'
  }
}

class Hamburger extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('Click')
    this.setState(
      ({active}) => ({active: !active}),
    )
  }

  render() {
    const { active } = this.state
    return (
      <div className="side-menu">
        <div className={`hamburger-menu`} onClick={this.handleClick} >
          <div className="hamburger-box" >
            <div className={`bar-menu b1 ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b2 ${getAnimationCS(active)}`}></div>
            <div className={`bar-menu b3 ${getAnimationCS(active)}`}></div>
          </div>
        </div>
        <SideMenu 
          isActive={active} 
          onClickMobile={this.handleClick}
          />
      </div>
    )
  }
}

export default Hamburger