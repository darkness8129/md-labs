import { css } from '@emotion/native'

export const styles = {
  container: css`
    padding: 20px 10px;
  `,

  scrollView: css`
    background-color: white;
  `,

  imageContainer: css`
    margin-bottom: 10px;

    align-items: center;
  `,

  text: {
    title: css`
      font-weight: bold;
      opacity: 0.7;
      font-size: 18px;
    `,

    base: css`
      color: black;
      font-size: 16px;
    `,

    mb: css`
      margin-bottom: 20px;
    `,
  },
}
