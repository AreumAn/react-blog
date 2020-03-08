import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const PostItem = () => {
    return (
        <PostItemBlock>
            <h2>title</h2>
            <SubInfo username="username" publishedDate={new Date()} />
            <Tags tags={['tag1','tag1']} />
            <p>This is body.....</p>
        </PostItemBlock>
    );
};

const PostList = () => {
    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                <Button cyan to="/write">
                New Post
                </Button>
            </WritePostButtonWrapper>
            <div>
                <PostItem />
                <PostItem />
            </div>
        </PostListBlock>
    );
};

export default PostList;
