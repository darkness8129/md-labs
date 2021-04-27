import { css } from '@emotion/native'

export const styles = {
  container: {
    base: css`
      padding: 10px;
      padding-left: 0;

      flex-direction: row;
      align-items: flex-start;

      border-bottom-width: 1px;
      border-bottom-color: grey;
    `,
  },

  imageContainer: css`
    width: 80px;
  `,

  text: {
    container: css`
      flex: 1;
    `,

    base: css`
      margin-bottom: 5px;

      font-size: 16px;
    `,

    title: css`
      font-weight: bold;
    `,

    subtitle: css`
      font-style: italic;
    `,

    price: css`
      margin-bottom: 0;
    `,
  },
}
