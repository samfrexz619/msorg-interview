import React, { useState } from 'react';
import TextInput from '../input/TextInput';


interface Props {

}

const CheckoutForm: React.FC<Props> = (props) => {

  const [inputs, setInputs] = useState({
    name: '',
    card_num: '',
    cvv: '',
    expiry: ''
  })

  const { name, card_num, cvv, expiry } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleCardNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '')
    if (input.length > 16) {
      input = input.slice(0, 16)
    }

    const splitInput = input.match(/.{1,4}/g)

    let spacedInput = ''

    if (splitInput) {
      spacedInput = splitInput.join(' ')
    }

    setInputs(values => ({ ...values, card_num: spacedInput }))
  }

  const handleExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '')

    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2, 4)
    }
    setInputs(values => ({ ...values, expiry: input }))
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '')

    if (input.length > 3) {
      input = input.slice(0, 3)
    }

    setInputs(values => ({ ...values, cvv: input }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(name, card_num, cvv, expiry)
    setInputs({
      name: '',
      card_num: '',
      cvv: '',
      expiry: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextInput
            label='Name on Card'
            placeholder='Macey Janet'
            inputId='name'
            name='name'
            handleChange={handleChange}
            value={name}
            type='text'
          />
        </div>
        <div className='mt-8'>
          <TextInput
            label='Card Number'
            placeholder='1234 5678 9123 1234'
            inputId='cnum'
            name='card_num'
            handleChange={handleCardNum}
            value={card_num}
            type='text'
          />
        </div>
        <div className='mt-8 grid grid-cols-2 gap-x-8'>
          <div className=''>
            <TextInput
              label='CVV'
              placeholder='&#9679;&#9679;&#9679;'
              inputId='cvv'
              name='cvv'
              handleChange={handleCvvChange}
              value={cvv}
              type='password'
            />
          </div>
          <div className=''>
            <TextInput
              label='Expiry'
              placeholder='06/24'
              inputId='expiry'
              name='expiry'
              handleChange={handleExpChange}
              value={expiry}
              type='text'
            />
          </div>
        </div>
        <div className='w-full mt-10 grid grid-cols-2 gap-x-8'>
          <button className='bg-[#1B1C1E] text-white rounded-xl py-3'>Cancel</button>
          <button className='bg-[#FF6B00] text-white rounded-xl py-3'>
            Pay NGN300.50
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
