import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    
    return <div style={{height : '100vh'}}>
        <PrettyChatWindow
      projectId="8f9b2c48-3014-4183-9fee-18b7808640fa"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
}

export default ChatsPage