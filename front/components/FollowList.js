import React from "react";
import propTypes from "prop-types";
import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  return (
    <List
      header={<div>{header}</div>}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      style={{ marginBottom: 20 }}
      size="small"
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};
FollowList.propTypes = {
  header: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
};

export default FollowList;
