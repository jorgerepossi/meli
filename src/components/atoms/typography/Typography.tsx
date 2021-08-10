import styled from "styled-components";

export const SmallText = styled.p`
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo12};
`;

export const NormalText = styled.p`
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo14};
`;

export const Text = styled.p`
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo16};
`;

export const BigTitle = styled.h2`
  font-weight: 400;
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo28};
`;

export const SmallPrice = styled.p`
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo24};
`;

export const BigPrice = styled.span`
  word-break: break-word;
  font-size: ${(props) => props.theme.typography.typo46};
`;
