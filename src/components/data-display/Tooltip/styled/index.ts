import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;

  &::before {
    position: absolute;
    content: '${props => props.title}';
    background: #616161e6;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
    transition: transform 0.2s ease-in-out;
    padding: 8px;

    /* Preventing line breaks */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.left::before {
    top: 50%;
    left: -15px;
    transform: translate(-100%, -50%) scale(0);
    transform-origin: right center;
  }

  &.left:hover:before {
    transform: translate(-100%, -50%) scale(1);
  }

  &.right::before {
    top: 50%;
    right: -15px;
    transform: translate(100%, -50%) scale(0);
    transform-origin: left center;
  }

  &.right:hover::before {
    transform: translate(100%, -50%) scale(1);
  }

  &.top::before {
    left: 50%;
    top: -15px;
    transform: translate(-50%, -100%) scale(0);
    transform-origin: bottom center;
  }

  &.top:hover::before {
    transform: translate(-50%, -100%) scale(1);
  }

  &.bottom::before {
    left: 50%;
    bottom: -15px;
    transform: translate(-50%, 100%) scale(0);
    transform-origin: top center;
  }
  &.bottom:hover:before {
    transform: translate(-50%, 100%) scale(1);
  }
`
