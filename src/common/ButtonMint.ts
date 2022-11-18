/**
 * 주식 리스트에 들어갈 민트색 버튼
 * 부모컴포넌트에서 props로 width,height 설정 해주면 됨
 * 폰트사이즈는 고정이기 때문에 따로 props 받지 않음
 * ex)<ButtonPurple sidth = {'100px'} height = {'20px'}추천종목</ButtonPurple>
 */

import styled from 'styled-components';

export const ButtonMint = styled.button<{width: String}>`
  width: ${(props: any) => props.width};
  height: 43px;
  height: 50px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color.mint};
  border-radius: 1rem;
  font-size: ${(props) => props.theme.fontSize.font_18};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease 0.3s;
  cursor: pointer;
  color: ${(props) => props.theme.color.mint};
  &:hover{
    background-color: ${(props) => props.theme.color.mint};
    color: rgba(255, 255, 255, 1);
  }
`;