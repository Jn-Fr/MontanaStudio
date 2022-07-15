import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
 } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='mision' onClick={toggle}>Misión</SidebarLink>
                <SidebarLink to='vision' onClick={toggle}>Visión</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Empresas</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contacto</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar