import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "test" },
  ];
  const followingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "test" },
  ];
  return (
    <>
      <AppLayout>
        <Head>
          <title>내 프로필 | NodeBird</title>
        </Head>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};
export default Profile;
