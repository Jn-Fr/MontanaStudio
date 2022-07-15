import React from 'react'
import Icon1 from '../../assets/img/Icon1.jpg';
import Icon2 from '../../assets/img/Icon2.png';
import Icon3 from '../../assets/img/Icon3.png';
import Icon4 from '../../assets/img/Icon4.jpg';
import Icon5 from '../../assets/img/Icon5.jpg';
import Icon6 from '../../assets/img/Icon6.png';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>EMPRESAS</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>MONTANA TATTOO STUDIO</ServicesH2>
                <ServicesP>
                    Estudio de tatuajes y piercings
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>MONTANA SMOKING SHOP</ServicesH2>
                <ServicesP>
                    Accesorios para fumadores
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>MONTANA FULL ESTHETIC</ServicesH2>
                <ServicesP>
                    Barbería profesional
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>MONTANA BEATS</ServicesH2>
                <ServicesP>
                    Estudio de producción musical
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5} />
                <ServicesH2>MONTANA DIGITAL MARKETING</ServicesH2>
                <ServicesP>
                    Departamento de marketing digital profesional
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6} />
                <ServicesH2>MONTANA MOB FREESTYLE</ServicesH2>
                <ServicesP>
                Evento dedicado a la promoción del talento emergente en la rama de Freestyle
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services