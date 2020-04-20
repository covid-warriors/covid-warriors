import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('bk4pu2dmj8g2');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic25vd3ktc2lsZW5jZS0wIn0.QEuU9_0KptX7IvbBUwuAsGlOAWfyxCYpR1c5PfD6HQM';

chatClient.setUser(
  {
       id: 'snowy-silence-0',
       name: 'Snowy silence',
       image: 'https://getstream.io/random_svg/?id=snowy-silence-0&name=Snowy+silence'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

const App = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;