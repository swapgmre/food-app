import React from 'react'
import UserContext from '../utils/userContext';
import UserClass from './UserClass'


class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log(" Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className='font-bold'>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Mumbai class"} />
        <UserClass name={"Second"} location={"California class"} />
      </div>
    )
  }
}


export default About
