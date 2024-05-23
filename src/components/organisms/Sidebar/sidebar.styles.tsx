import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../themes';
import { ThemeUIStyleObject } from 'theme-ui';

export const Container = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${theme.colors?.bgLight};
  position: relative;
  z-index: 9999;
  box-shadow: 2px 2px 2px #aaaaaa;
`; 

export const UlStyled = styled(motion.ul)`
  li + li {
    margin-top: 30px;
  };
  list-style-type: none;
  padding-left: 30px;
`;

export const NestedMenu: any = styled(motion.div)`
  svg + span {
    margin-left: 10px;
  };
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  padding-right: 40px;
  `;

export const buttonCollapse: ThemeUIStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: -3, 
  top: 40, 
  position: 'absolute', 
  backgroundColor: 'white', 
  borderRadius: 9999,
  width: 36,
  height: 36,
  cursor: 'pointer'
};