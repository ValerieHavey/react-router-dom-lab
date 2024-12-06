import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({onMailboxAdded}) => {

    const [name, setName] = useState('');
    const [boxSize, setBoxSize] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onMailboxAdded({boxHolder:name, boxSize});
      setName('');
      setBoxSize('');
      navigate('/mailboxes');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <select value={boxSize} onChange={(event) => setBoxSize(event.target.value)}>
          <option value="">Select Box Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Assign Mailbox</button>
      </form>
    );
  }

export default MailboxForm;