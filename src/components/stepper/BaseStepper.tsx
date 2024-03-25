import React, { useState } from 'react';
import './stepper.css';

interface Props {

}

const steps = ['one', 'two', 'three']

const BaseStepper: React.FC<Props> = (props) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  const handleNextStep = () => {
    currentStep === steps.length ? setComplete(true) :
      setCurrentStep(prev => prev + 1)
  }

  const handlePrev = () => {
    currentStep === steps.length ? setComplete(false) :
      setCurrentStep(prev => prev - 1)
  }

  return (
    <div>
      <div className='stepper'>
        {
          steps.map((step, idx) => (
            <div key={idx} className={`step-item ${currentStep === idx + 1 && 'active'} ${(idx + 1 < currentStep || complete) && 'complete'}`}>
              <div className='step'>
                {(idx + 1 < currentStep || complete) ? '✓' : idx + 1}
              </div>
              <p>{step}</p>
            </div>
          ))
        }
      </div>
      {
        !complete &&
        <button onClick={handleNextStep}>next step</button>
      }
      <button>prev</button>
    </div>
  );
}

export default BaseStepper;
