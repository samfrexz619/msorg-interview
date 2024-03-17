import React from 'react';
import './checkout.css'
import Card from './Card';
import TabPane from '../tab/TabPane';
import Tab from '../tab/Tab';
import CheckoutForm from './CheckoutForm';


interface Props {

}


const Checkout: React.FC<Props> = (props) => {

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
              <span className='block text-right text-[#FF6B00]'> NGN {'5,000.00'}</span>
            </div>
          </div>
        </header>

        <div className='px-[33px] py-6 gap-x-6'>
          <div>
            <Tab>
              <TabPane title={<Card cardTitle={'Card Payment'} icon={'card'} />}>
                <div className='w-full'>
                  <h3 className='text-center mb-10'>Enter your card details </h3>
                  <CheckoutForm />
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

            </Tab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
