import React from 'react';
import './input.css'



interface Props {
  label: string;
  type: string;
  inputId: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const TextInput: React.FC<Props> = (props) => {

  const { label, type, inputId, placeholder, value, name, handleChange } = props;
  return (
    <div>
      <label htmlFor={inputId} className='mb-2 block'>{label}</label>
      <div className='input p-3 bg-white focus-within:border-[#FF6B00] focus-within:border focus:border-solid flex items-center'>
        {name === 'card_num' && <svg width="34" height="24" viewBox="0 0 34 24" className='block mr-2'>
          <use xlinkHref="/sprite.svg#mcard" />
        </svg>}
        <input type={type} id={inputId} name={name} placeholder={placeholder} onChange={handleChange} value={value} />
      </div>
    </div>
  );
}

export default TextInput;
