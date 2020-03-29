import { ComponentType } from 'react';
import styled from '@emotion/styled';

interface TransformIslandProps {
  name: string;
  top: number;
  left: number;
  Component: ComponentType<IslandProps>;
}

export function transformIsland({
  name,
  top,
  left,
  Component
}: TransformIslandProps) {
  return {
    name,
    top,
    left,
    Component: styled(Component)`
      position: absolute;
      top: ${top}px;
      left: ${left}px;

      &:hover {
        background: radial-gradient(
          circle,
          rgba(246, 246, 246, 1) 0%,
          rgba(148, 187, 233, 0) 100%
        );
      }
    `
  };
}

export interface IslandProps {
  className?: string;
  onClick?(): void;
  open?: boolean;
  done?: boolean;
}
