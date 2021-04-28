import { css } from '@emotion/native'

export const styles = {
  container: css`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,

  noBorder: css`
    border-bottom-width: 0;
  `,

  input: {
    container: css`
      align-items: center;
    `,

    input: css`
      width: 60%;
      margin: 20px 0;
      padding: 10px 20px;

      /* border-width: 1px; */
      border-radius: 15px;
      background-color: lightgray;
    `,
  },

  noBooks: {
    container: css`
      align-items: center;
    `,

    text: css`
      color: black;
      opacity: 0.6;
      font-size: 16px;
    `,
  },
}
