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
    flex-wrap: wrap;
  `,
}
