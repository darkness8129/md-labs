import { css } from '@emotion/native'

export const styles = {
  container: css`
    flex: 1;

    background-color: white;
  `,

  booksList: css`
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

  text: {
    noBooks: css`
      text-align: center;

      color: black;
      opacity: 0.6;
      font-size: 16px;
    `,

    error: css`
      text-align: center;

      color: red;
      font-size: 16px;
    `,
  },

  refresh: css`
    text-align: center;

    text-decoration: underline;
    color: blue;
    font-size: 16px;
  `,
}
