import React, { useState } from "react";
import PropTypes from "prop-types";
//? next js 의 link - router
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

//Input.Search 을 커스터마이징
const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      {/* xs:모바일,sm:테블릿,md:작은 데스크탑 */}
      {/* md = n/ 24의 크기 */}
      {/* xs끼리 더했을 때 24가 넘아가면 다음 줄로 이동 */}
      {/* gutter : 컬럼 사이의 간격 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/**noreferrer noopener : target="_blank" 시 정보를 제거해 보안에 반드시 써야함 */}
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by zerocho
          </a>
        </Col>
      </Row>
      {children}
    </div>
  );
};
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
