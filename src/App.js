import React, {useState} from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {

  const [name,setName] = useState('Your Name');
  const [job,setJob] = useState('Job Title');
  const [about,setAbout] = useState('Elon Musk is a Business Magnate and Investor. He is the Founder, CEO and Chief Engineer Of SpaceX; Angel Investor, CEO and Product Architect of Tesla, Inc.; Owner & CEO Of Twitter, Inc.; Founder of The Boring Company; Co-Founder Of Neuralink & OpenAI; and President Of Philanthropic Musk Foundation.');
  return (
    <div className="App">
      <ProfileCard name={'Elon Musk'} job={'CEO'} about={about} />
    </div>
  );
}

export default App;
