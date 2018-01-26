import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ( match ) => {
  console.log(match);
  return (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}
    />
    

  </div>
)};

const ShowCat = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.imgSrc} />
    </div>
  );
}



const BasicExample = () => (

  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/cat">Cat Picture</Link></li>
      </ul>

      <hr/><hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/cat" render={()=>(<ShowCat imgSrc="http://78.media.tumblr.com/139f03100b311563cfcb1cc7a6315c59/tumblr_om416whf6h1ui1wxgo1_1280.jpg"/>)} />

    </div>
  </Router>
);

export default BasicExample;




