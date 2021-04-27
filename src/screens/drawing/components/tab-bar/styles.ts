import { css } from '@emotion/native'

export const styles = {
  container: css`
    margin-bottom: 10px;

    align-items: center;
  `,

  button: {
    base: css`
      padding: 5px 15px;
      border-radius: 7px;
    `,

    active: css`
      background: white;
    `,
  },

  text: {
    container: css`
      padding: 3px;
      flex-direction: row;

      border-radius: 7px;
      background: lightgrey;
    `,

    base: css`
      font-size: 16px;
      font-weight: normal;
      color: black;
    `,

    active: css`
      font-weight: bold;
    `,
  },
}
