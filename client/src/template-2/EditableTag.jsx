import React, { useState } from 'react';

const EditableTag = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Still empty ( double click to edit )');

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          autoFocus
          onBlur={handleBlur}
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default EditableTag;
