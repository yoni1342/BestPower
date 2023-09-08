import React, { useState } from 'react';

const EditableLineInput = () => {
  const [name, setName] = useState('');
//   div[contentEditable]:empty:before {
//     content: attr(data-placeholder);
//     color: #999;
//   }


  const handleInputChange = (event) => {
    setName(event.target.textContent);
  };

  return (
    <div
      contentEditable
      onInput={handleInputChange}
      className="border-b border-gray-400 py-1 w-72 mb-5  text-[#8D8D8D]"
    >
      {name}
    </div>
  );
};

export default EditableLineInput;