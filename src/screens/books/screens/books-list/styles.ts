import { css } from '@emotion/native'

export const styles = {
  container: css`
    background-color: white;
    padding-bottom: 80px;
  `,

  booksList: css`
    height: 100%;

    background-color: white;
  `,

  input: {
    container: css`
      align-items: center;

      background-color: white;
    `,

    input: css`
      width: 60%;
      margin: 20px 0;
      padding: 10px 20px;

      border-radius: 15px;
      background-color: lightgray;
    `,
  },

  noBooks: {
    container: css`
      height: 100%;
      margin-top: 20px;

      align-items: center;
    `,

    text: css`
      color: black;
      opacity: 0.6;
      font-size: 16px;
    `,
  },

  delete: {
    container: css`
      height: 100%;

      justify-content: center;
      align-items: flex-end;

      background-color: red;
    `,

    text: css`
      padding: 10px 20px;

      color: white;
      font-weight: bold;
      font-size: 16px;
    `,
  },

  separator: css`
    height: 1px;

    background-color: grey;
  `,
}
