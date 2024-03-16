import React, { useState } from 'react';
import './checkout.css'
import Card from './Card';
import TabPane from '../tab/TabPane';
import TheTab from '../tab/TheTab';
import TextInput from '../input/TextInput';


interface Props {

}


const Checkout: React.FC<Props> = (props) => {

  const [inputs, setInputs] = useState({
    name: '',
    card_num: '',
    password: '',
    expiry: ''
  })

  const [exp, setExp] = useState('')

  const { name, card_num, password, expiry } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLInputElement).name
    const value = (e.target as HTMLInputElement).value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '')

    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2, 4)
    }

    setExp(input)
  }


  return (
    <div className='modal'>
      <div className='modal__body'>
        <header className='w-full py-3 header'>
          <div className='w-full flex justify-between px-[33px] items-center'>
            <p>Pay with</p>
            <a href="#" className='block text-center bg-[#D9D9D9] py-1 rounded-lg px-5'>
              Business <br /> logo
            </a>
            <div className=''>
              <a href="mailto:#" className='block'>
                Macyjanet@gmail.com
              </a>
              <span className='block text-right text-[#FF6B00]'> NGN 5,000.00</span>
            </div>
          </div>
        </header>

        <div className='px-[33px] py-6 gap-x-6'>
          <div>
            <TheTab>
              <TabPane title={<Card cardTitle={'Card Payment'} icon={'card'} />}>
                <div className='w-full'>
                  <h3 className='text-center mb-10'>Enter your card details </h3>
                  <form>
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
                        handleChange={handleChange}
                        value={card_num}
                        type='text'
                      />
                    </div>
                    <div className='mt-8 grid grid-cols-2 gap-x-8'>
                      <div className=''>
                        <TextInput
                          label='CVV'
                          placeholder='&#9679;&#9679;&#9679;'
                          inputId='pwd'
                          name='password'
                          handleChange={handleChange}
                          value={password}
                          type='text'
                        />
                      </div>
                      <div className=''>
                        <TextInput
                          label='Expiry'
                          placeholder='06/24'
                          inputId='exp'
                          name='exp'
                          handleChange={handleCvvChange}
                          value={exp}
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
              </TabPane>
              <TabPane title={<Card cardTitle={'Bank Transfer'} icon={'trsf'} />}>
                <div>
                  <p>second</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aliquid, doloribus in perspiciatis quas modi eius. Tenetur eos maxime sit quasi fuga reiciendis minus porro, autem ullam praesentium iste nam.</p>
                </div>
              </TabPane>
              <TabPane title={<Card cardTitle={'Phone Transfer'} icon={'trsf'} />}>
                <div>
                  <p>third</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aliquid, doloribus in perspiciatis quas modi eius. Tenetur eos maxime sit quasi fuga reiciendis minus porro, autem ullam praesentium iste nam.</p>
                </div>
              </TabPane>
              <TabPane title={<Card cardTitle={'Bank Payment'} icon={'bank'} />}>
                <div>
                  <p>fourth</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aliquid, doloribus in perspiciatis quas modi eius. Tenetur eos maxime sit quasi fuga reiciendis minus porro, autem ullam praesentium iste nam.</p>
                </div>
              </TabPane>
              <TabPane title={<Card cardTitle={'USSD'} icon={'trsf'} />}>
                <div>
                  <p>last</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aliquid, doloribus in perspiciatis quas modi eius. Tenetur eos maxime sit quasi fuga reiciendis minus porro, autem ullam praesentium iste nam.</p>
                </div>
              </TabPane>

            </TheTab>
          </div>
          {/* <div className='flex flex-col gap-y-3'>
            {
              cardItems.map(card => (
                <Card key={card.id} cardTitle={card.cardTitle} icon={card.icon} />
              ))
            }
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
