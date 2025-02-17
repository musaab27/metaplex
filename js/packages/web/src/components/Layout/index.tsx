import React from 'react';
import { Layout } from 'antd';
import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import useWindowDimensions from '../../utils/layout';


const { Header, Content } = Layout;

// const paddingForLayout = (width: number) => {
//   if (width <= 768) return '5px 10px';
//   if (width > 768) return '10px 30px';
// };

export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Layout
        title={LABELS.APP_TITLE}
        style={{
            // padding: paddingForLayout(width),
          maxWidth: 5000,
          maxHeight: 5000,
          minHeight: 1000,
          minWidth: 1000,
        }}
      >
        {/* <Header style={{background: "black"}}> */}
          <AppBar />
        {/* </Header> */}
        <Content style={{ paddingBottom: 0 }}>
          {props.children}
        </Content>
      </Layout>
    </>
  );
});
// overflow: 'scroll',