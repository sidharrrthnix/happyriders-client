import React from "react";

import styled from "../../typed-components";

import { getChat, userProfile } from "../../types/api";

import Form from "../../Components/Form";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Message from "../../Components/Message";

const Container = styled.div``;

const Chat = styled.div`
  height: 80vh;
  overflow: scroll;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InputCont = styled.div`
  padding: 0 20px;
`;

interface IProps {
    chatData?: getChat;
    userData?: userProfile;
    messageText: string;
    loading: boolean;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;

}

const ChatPresenter: React.SFC<IProps> = ({
    chatData: { GetChat: { chat = null } = {} } = {},
    userData: { GetMyProfile: { user = null } = {} } = {},
    onInputChange,
    messageText,
    onSubmit,
    loading,

}) => (
        <Container>
            <Header title={"Chat"} />
            {!loading &&
                chat &&
                user && (
                    <React.Fragment>
                        <Chat>
                            {chat.messages &&
                                chat.messages.map(message => {
                                    if (message) {
                                        return (
                                            <Message
                                                key={message.id}
                                                text={message.text}
                                                mine={user.id === message.userId}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                        </Chat>
                        <InputCont>
                            <Form submitFn={onSubmit}>
                                <Input
                                    value={messageText}
                                    placeholder={"Type your message"}
                                    onChange={onInputChange}
                                    name={"message"}
                                />
                            </Form>
                        </InputCont>
                    </React.Fragment>
                )}
        </Container>
    );

export default ChatPresenter;