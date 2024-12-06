import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  console.log("Mailbox Details:", selectedBox);
  return (
    <>
      <h2>Mailbox {selectedBox._id}</h2>
      <dl>
        <dt>Details</dt>
        <dt>Boxholder:</dt> 
        <dd>{selectedBox.boxHolder}</dd>
        <dt>Box Size:</dt> 
        <dd>{selectedBox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
