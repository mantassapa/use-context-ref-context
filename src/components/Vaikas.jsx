import React, { useContext } from 'react'
import { SenelioKalba } from '../contexts/SenelisSako'
import { SenelisAtimaSk } from '../contexts/SenelisAtimaSk'

const Vaikas = () => {
const senelioInfo = useContext(SenelioKalba)
const senelisAtimaSk = useContext(SenelisAtimaSk)

  return (
    <div className='Vaikas'>
        Vaikui senelis sako: {senelioInfo.text} {senelioInfo.sk}
        {" --- "}
        {senelisAtimaSk}    

        <SenelioKalba.Consumer>
            {(value)=><h3>
                {value.text}
                {value.sk}
            </h3>}
        </SenelioKalba.Consumer>
    </div>
  )
}

export default Vaikas