import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${({ type = "vertical" }) =>
    type === "horizontal"
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
          gap: 1.6rem;
        `}
`;

export default Row;
