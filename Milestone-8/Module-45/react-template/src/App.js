import './App.css';

function App() {
  const tools = ['VS Code', 'Git', 'GitHub', 'Figma'];
  return (
    <div>
      <div className='container'>
        <h1>React.JS</h1>
        <p>A JavaScript library for building user interfaces</p>
      </div>
      {tools.map((tool) => (
        <Tools tool={tool}></Tools>
      ))}
      <FrontEnd Language='JavaScript' framework='React.JS' />
      <BackEnd server='Node.JS' database='MongoDB' />
    </div>
  );
}

function Tools(props) {
  return (
    <div className='tools'>
      <h3>{props.tool}</h3>
    </div>
  );
}

const FrontEnd = ({ Language, framework }) => {
  return (
    <div className='front-end'>
      <h2>Front-End Developer</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>{Language}</li>
        <li>{framework}</li>
      </ol>
    </div>
  );
};

function BackEnd(props) {
  return (
    <div className='back-end'>
      <h2>Back-End Developer</h2>
      <ol>
        <li>Firebase</li>
        <li>{props.server}</li>
        <li>Express.JS</li>
        <li>{props.database}</li>
      </ol>
    </div>
  );
}

export default App;
