import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>,
        <div key="followings">팔로잉</div>,
        <div key="followings">팔로워</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="ZeroCho" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};
export default UserProfile;
