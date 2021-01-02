import React from "react";
import styled from "styled-components";
import {
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  border,
  BorderProps,
} from "styled-system";

type Props = SpaceProps | LayoutProps | FlexboxProps | BorderProps;

export const Box = styled.div<Props>`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export const Flex = styled(Box)`
  display: flex;
`;