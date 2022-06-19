import React from 'react'
import { CircularProgressbarWithChildren , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Loader = (props) => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center h-screen w-screen'>
            <div className='drop-shadow-2xl shadow-black max-w-[70%] max-h-[70%] '>
                <CircularProgressbarWithChildren value={props.value} minValue={10} maxValue={100} className='' strokeWidth={2} backgroundPadding={0} background={true} 
                styles={buildStyles({
                    
                    pathColor: `#00A651`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#fff',
                    

                  })} >
                    <img src="./assets/logo.svg" alt='Logo of MyDoc' className='h-[60%] w-[40%]' />
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}