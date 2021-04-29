import { css } from '@emotion/native'

export const styles = {
  container: css`
    padding: 20px;
    flex: 1;

    background-color: white;
  `,

  item: css`
    margin-bottom: 20px;

    align-items: flex-start;
  `,

  input: css`
    width: 100%;
    margin-top: 10px;
    padding: 10px 20px;

    border-radius: 10px;
    border-width: 1px;
    background-color: white;
  `,

  button: {
    container: css`
      margin-bottom: 45px;

      flex: 1;
      align-items: center;
    `,

    button: css`
      padding: 7px 30px;

      background-color: lightgrey;
      border-radius: 10px;
    `,

    text: css`
      font-size: 18px;
      color: blue;
    `,
  },

  error: css`
    font-size: 16px;
    color: red;
  `,
}
