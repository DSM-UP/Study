import React from 'react';

const Message = ({ match }) => (
  <h3>Message with ID {match.params.id}</h3>
);

export default Message;