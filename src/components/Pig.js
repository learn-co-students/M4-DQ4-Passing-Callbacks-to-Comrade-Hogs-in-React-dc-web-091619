import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
    console.log(this.props)
    return(
      <div id={this.props.name} className="sheeple">
        {/* {{(this.state.panicked) ? this.panic() : null} */}
        {(this.props.environment !== "docile") ? this.panic() : null}
      </div>
    )
  }
}
