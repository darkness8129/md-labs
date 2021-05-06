import { css } from '@emotion/native'

export const styles = {
  container: (size: number) => css`
    width: ${size + 'px'};
    height: ${size + 'px'};
    position: relative;
    z-index: 2;

    justify-content: center;
    align-items: center;

    background-color: lightgrey;
    border-width: 1px;
    border-color: white;
  `,

  verticalImage: (h: number) => ({
    width: '100%',
    maxWidth: h,
    height: h - 2, // -2  - because 2px for borders
  }),

  loader: css`
    position: absolute;
    z-index: 3;
  `,
}
