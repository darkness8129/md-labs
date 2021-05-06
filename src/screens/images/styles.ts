import { css } from '@emotion/native'

export const styles = {
  container: css`
    flex: 1;

    background-color: white;
  `,

  header: (mt: number) => css`
    margin-top: ${mt + 'px'};
    padding-right: 20px;
  `,

  images: css`
    flex-direction: row;
  `,

  imageContainer: (size: number) => css`
    width: ${size + 'px'};
    height: ${size + 'px'};

    justify-content: center;
    align-items: center;

    background-color: lightgrey;
    border-width: 1px;
    border-color: white;
  `,

  verticalImage: (h: number) => ({
    width: '100%',
    maxWidth: h,
    height: h - 2,
  }),

  error: css`
    margin-top: 20px;
    text-align: center;

    color: red;
    font-size: 16px;
  `,

  refresh: css`
    text-align: center;

    text-decoration: underline;
    color: blue;
    font-size: 16px;
  `,
}
