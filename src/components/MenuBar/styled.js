import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: #000000;
  border-left: 1px solid #FFE0CD;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #FFE0CD;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 0.1rem;
  position: relative;
  width: 1.75rem;

  &:hover {
    color: #B1A6CC;
  }
`