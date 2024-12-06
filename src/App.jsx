import MailboxDetails from './components/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm.jsx'
import MailboxList from './components/MailboxList.jsx'
import NavBar from './components/NavBar.jsx'
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const handleMailboxAdded = (newMailbox) => {
    setMailboxes([...mailboxes, {...newMailbox, _id:mailboxes.length + 1}]);
  }

  return (
    <>
      <NavBar />
      <h1>Mailbox List</h1>
      <Routes>
        <Route path="/" element={<h2>Post Office</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/new-mailbox"
          element={<MailboxForm onMailboxAdded={handleMailboxAdded} />}   
        />
         <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;