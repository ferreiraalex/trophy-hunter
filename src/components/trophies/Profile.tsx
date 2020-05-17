import { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

const Profile: FC = () => {
  return (
    <Container>
      <Avatar src={`${process.env.PUBLIC_DIR}/avatar.png`} />
      <div>
        <h4>sirlunchalot619</h4>
        <p>24/217 TH points</p>
      </div>
    </Container>
  );
};

export default Profile;